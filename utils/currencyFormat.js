/**
 * Function to format a number into readable currency format for the USA (USD).
 * 
 * @param {number} amount - The number to be formatted as currency.
 * @returns {string} - The formatted currency string in USD.
 */
export default function formatCurrencyUSD(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
        amount = 0;
    }

    // Create a new instance of the Intl.NumberFormat for US (en-US) locale and USD currency.
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    // Format the number using the formatter
    return formatter.format(amount);
}
