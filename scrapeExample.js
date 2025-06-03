const cheerio = require('cheerio');

async function fetchExample() {
  try {
    const response = await fetch('https://example.com');
    const html = await response.text();
    const $ = cheerio.load(html);
    console.log('Page Title:', $('title').text());
  } catch (error) {
    console.error('Failed to fetch example.com:', error);
  }
}

fetchExample();

