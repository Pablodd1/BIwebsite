const DB_NAME = "SmartCacheDB";
const STORE_NAME = "Chunks";

function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);

        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

export async function saveChunk(key, data) {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).put(data, key);
    return tx.complete;
}

export async function getChunk(key) {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readonly");
    return tx.objectStore(STORE_NAME).get(key);
}

export async function clearTag(tagPrefix) {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);

    return new Promise((resolve) => {
        const request = store.openCursor();
        request.onsuccess = (e) => {
            const cursor = e.target.result;
            if (cursor) {
                if (cursor.key.startsWith(tagPrefix)) {
                    store.delete(cursor.key);
                }
                cursor.continue();
            } else {
                resolve();
            }
        };
    });
}
