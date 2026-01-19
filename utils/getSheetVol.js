/**
 * Calculates the volume of a rectangular sheet.
 *
 * Assumptions:
 * - Shape is rectangular by default (sheet).
 * - Volume is calculated using: width × length × thickness.
 * - Height is ignored for sheet-type materials.
 * - Input units can be mm, cm, or m.
 * - All dimensions are internally converted to meters.
 *
 * Output:
 * - Returns volume value in cubic meters (m³).
 *
 * @param {Object} dimension - Dimension object of the sheet.
 * @param {{ value: number, unit: 'mm' | 'cm' | 'm' }} dimension.width
 * @param {{ value: number, unit: 'mm' | 'cm' | 'm' }} dimension.length
 * @param {{ value: number, unit: 'mm' | 'cm' | 'm' }} dimension.thickness
 *
 * @returns {{ value: number, unit: 'm³' }} Volume of the sheet.
 *
 * @example
 * calculateSheetVolume({
 *   width: { value: 6, unit: 'cm' },
 *   length: { value: 240, unit: 'cm' },
 *   thickness: { value: 13, unit: 'mm' }
 * });
 * // { value: 0.001872, unit: 'm³' }
 */
export default function calcSheetVol(dimension) {
    const convertToMeters = (value, unit) => {
        if (typeof value !== 'number' || isNaN(value)) return 0;

        switch (unit) {
            case 'mm':
                return value / 1000;
            case 'cm':
                return value / 100;
            case 'm':
                return value;
            default:
                return 0;
        }
    };

    const width = convertToMeters(dimension.width?.value, dimension.width?.unit);
    const length = convertToMeters(dimension.length?.value, dimension.length?.unit);
    const thickness = convertToMeters(dimension.thickness?.value, dimension.thickness?.unit);

    const volumeValue = width * length * thickness;

    return {
        value: Number(volumeValue.toFixed(6)),
        unit: 'm³',
    };
}
