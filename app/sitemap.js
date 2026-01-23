// Function to generate sitemap dynamically
export default async function Sitemap() {
  const nav = await import(`My_UI/footer/links.json`).then((module) => module.default);

  // Current date for lastModified
  const currentDate = new Date();
  const BASE_URL = process.env.BASE_URL;

  // Helper function to generate sitemap entry
  const generateSitemapEntry = (href, changeFreq = 'monthly', priority = 0.8) => ({
    url: `${BASE_URL}${href}`,
    lastModified: currentDate,
    changeFrequency: changeFreq,
    priority: priority,
  });

  // Sitemap generation
  const pages = [
    // Home Page
    generateSitemapEntry('/'),

    // Information Pages
    ...nav["information"].map(item =>
      generateSitemapEntry(item.link, 'monthly', 0.9)
    ) || [],

    // Residential Services Pages
    ...nav["helpfulLinks"].map(item =>
      generateSitemapEntry(item.link, 'monthly', 0.6)
    ) || [],

  ];

  // Return the pages array which contains all the dynamically generated URLs
  return pages;
}
