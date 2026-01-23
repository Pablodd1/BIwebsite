// inside remHypACap utility
export const remHypACap = (str = "") => {
    return str
        .toString()
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
};
export const EXCEPTIONS = []; 
export const preZero = (Num) => (Num < 10 && Num >= 0 ? `0${Num}` : Num);
export const multiplyQTY = (digits, qty) => qty > 0 ? Number(digits) * Number(qty) : Number(digits);
export const getCartItems = (name) => JSON.parse(localStorage.getItem(name)) || [];
export const saveCartItems = (name, items) => localStorage.setItem(name, JSON.stringify(items));
export const totalPrice = (list) => list?.reduce((total, b) => total + multiplyQTY(b.unitPrice, b.quantity), 0) || 0;
export const totalBundles = (list) => list?.reduce((total, b) => total + b.quantity, 0) || 0;
export const totalProducts = (list) => list?.reduce((total, b) => total + (b.products?.reduce((totalc, c) => totalc + c.qty, 0) || 0), 0) || 0;
export const totalItems = (list) => list?.reduce((total, b) => total + b.quantity * (b.products?.reduce((subtotal, p) => subtotal + p.qty, 0) || 0), 0) || 0;
export const refreshRec = (name, ID) => getCartItems(name).filter((product) => product.ID === ID)[0]
export const calPrice = (list) => list?.reduce((total, y) => total + (y.quantity * (y.price || 0)), 0).toFixed(2);
export const calSave = (basePrice, price) => basePrice === 0 ? (price === 0 ? 0 : 100) : (((basePrice - price) / basePrice) * 100).toFixed(2);
export const getContainerVolume = (c) =>
  c.length * c.width * c.height;


export const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

/**
 * Dynamically generates a list of feature objects based on provided key pairs and content data.
 * 
 * This function processes dynamic key-value pairs and ensures each object contains both the `icon` and `label` (or whatever keys are provided) together.
 * 
 * It can handle any number of key-value pair configurations (e.g., title/description, icon/label, etc.) by using prefixes to extract the corresponding content data.
 * 
 * @param {Object} content - The object containing the content data to be processed. It contains keys like `prefix_1`, `prefix_2`, etc.,
 *                           where each prefix corresponds to a unique value for the feature.
 * @param {Array} keyPairs - An array of objects, where each object contains `key` and `pre` properties. 
 *                            `key` is the name of the field you want to generate in the final object (e.g., 'title', 'description', 'icon'), 
 *                            and `pre` is the prefix used to construct the keys in `content` (e.g., 'step_title', 'icon').
 * 
 * @returns {Array} - An array of feature objects, where each object contains the fields defined by `keyPairs`.
 *                    Each object in the array will contain all the keys from `keyPairs` (e.g., `icon`, `label`, `title`, `description`).
 * 
 * @example
 * const content = {
 *   icon_1: 'HPSolarModule',
 *   label_1: 'High Performance Solar Modules',
 *   step_title_1: 'Select a product',
 *   step_description_1: 'Lorem Ipsum is simply text of the printing and type',
 *   // other fields...
 * };
 *
 * const keyPairs = [
 *   { key: 'icon', pre: 'icon' },
 *   { key: 'label', pre: 'label' },
 *   { key: 'title', pre: 'step_title' },
 *   { key: 'description', pre: 'step_description' }
 * ];
 * 
 * const result = reGenerateList(content, keyPairs);
 * // Output: [
 * //   { icon: 'HPSolarModule', label: 'High Performance Solar Modules', title: 'Select a product', description: 'Lorem Ipsum is simply text of the printing and type' }
 * // ]
 */
export const reGenerateList = (content, keyPairs) => {
    const features = [];

    // Loop through possible indices (1 to 5, or adjust as needed)
    for (let i = 1; i <= 5; i++) {
        const feature = {};

        // Loop through keyPairs to construct the data object
        keyPairs.forEach(({ key, pre }) => {
            const currentKey = `${pre}_${i}`;
            const currentValue = content[currentKey];

            if (currentValue) {
                feature[key] = currentValue;  // Add the key-value pair to the feature object
            }
        });

        // If feature object has any valid data, push it to the array
        if (Object.keys(feature).length > 0) {
            features.push(feature);
        }
    }

    return features;
};

export function reCreateDate(date) {
    if (!(date instanceof Date) || isNaN(date)) {
        
        return date;
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');  // Get month (0-based, so add 1)
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}`;
}

// Thsi function dynamically add list items either to drop dwon or autocomplete - updates given list and adds data to options
export const addOptions = (formConfig, modifyConfigAs) => {
    return formConfig?.map((field) => {
        // Loop through each modifier and update the matching field
        modifyConfigAs.forEach((modifier) => {
            
            if (field.name === modifier.modify) {
                field = {
                    ...field,
                    [modifier?.label || 'options']: modifier.options,
                };
            }
        });
        return field; // Return the modified field (or the original if no match)
    });
};

export function generateID() {
    const randomNumber = () => String(Math.floor(Math.random() * 90 + 10000000)); 
    return `ID-${randomNumber()}`;
}