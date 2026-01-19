import calcSheetVol from "lib/getSheetVol"

/**
 * Calculate container fill percentage.
 * @param {object} container
 * @param {string|null} currentItemId
 */
export function containerFillPercent(container, currentItemId = null) {
    const totalVolume =
        container?.meta?.internal?.length *
        container?.meta?.internal?.width *
        container?.meta?.internal?.height || 0

    if (!totalVolume || !Array.isArray(container?.items)) {
        return {
            filledTotal: 0,
            filledCurrent: 0,
            filledOthers: 0,
            available: 100,
        }
    }

    let usedByCurrent = 0
    let usedByOthers = 0

    for (const item of container.items) {
        if (!item?.dimension || typeof calcSheetVol !== "function") continue

        const volResult = calcSheetVol(item.dimension)

        // safety: calcSheetVol must return { value }
        if (!volResult || typeof volResult.value !== "number") continue

        const itemVolume = volResult.value * (item.qty || 1)
        
        if (item.ID === currentItemId) usedByCurrent += itemVolume
        else usedByOthers += itemVolume
    }

    const filledCurrent = Math.min((usedByCurrent / totalVolume) * 100, 100)
    const filledOthers = Math.min((usedByOthers / totalVolume) * 100, 100)
    const filledTotal = Math.min(filledCurrent + filledOthers, 100)

    return {
        filledTotal,
        filledCurrent,
        filledOthers,
        available: Math.max(100 - filledTotal, 0),
    }
}
