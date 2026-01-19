// import { notify } from '@MyHooks/notify';
import { notify } from 'lib/notify';
import { getChunk, saveChunk } from './db';

export const smartFetch = async ({
    limit,
    chunkSize = 0,
    url,
    method = 'POST',
    bodyObj = {},
    cacheTag,
    headers = {},
    extractFn = res => res.data, // Expected to return array
    isProtected = true,
}) => {
    if (!url || !cacheTag || !limit) {
        notify('error', 'Missing Parameters', 'Required: url, limit, cacheTag', 4000);
        return { error: true, heading: 'Incomplete Data', message: 'Missing required parameters' };
    }

    // 🔒 Safety: Unprotected requests MUST contain '/public/'
    if (!isProtected && !url.includes('/public/')) {
        notify('error', 'Unsafe Request Blocked', 'Unprotected URL must include /public/', 4000);
        return { error: true, message: 'Unprotected URLs must include "/public/" in the path' };
    }


    const totalChunks = chunkSize > 0 ? Math.ceil(limit / chunkSize) : 1;
    const allData = [];

    for (let i = 0; i < totalChunks; i++) {
        const chunkKey = `${cacheTag}-chunk-${i + 1}`;
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize, limit);

        // 🧠 Try loading from IndexedDB
        try {
            const cached = await getChunk(chunkKey);
            if (cached && Array.isArray(cached)) {
                allData.push(...cached);
                continue;
            }
        } catch (e) {
            notify('warn', 'Cache Error', `Failed to load cache for chunk ${i + 1}`);
        }

        // 📦 Prepare Body
        const range = chunkSize > 0 ? `${start + 1}-${end}` : null;
        const body = {
            ...bodyObj,
            ...(range && { range }),
        };

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },
                body: method === 'GET' ? undefined : JSON.stringify(body),
            });

            const result = await response.json();

            if (!response.ok) {
                notify('error', 'Fetch Failed', result.message || `Chunk ${i + 1} failed`, 5000);
                return { error: true, message: result.message || 'Request failed', failedChunk: i + 1 };
            }

            const chunkData = extractFn(result);
            if (!Array.isArray(chunkData)) {
                notify('error', 'Extractor Error', 'extractFn must return an array', 4000);
                return { error: true, message: 'Extractor must return an array', failedChunk: i + 1 };
            }

            allData.push(...chunkData);
            await saveChunk(chunkKey, chunkData);
        } catch (err) {
            notify('error', 'Network Error', err.message || `Chunk ${i + 1} failed`, 4000);
            return { error: true, message: err.message || 'Fetch error', failedChunk: i + 1 };
        }
    }

    return {
        success: true,
        data: allData.slice(0, limit),
        total: allData.length,
        usedChunks: totalChunks,
    };
};
