
const fs = require('fs');

// Read the products file
let content = fs.readFileSync('lib/products.ts', 'utf8');

// Remove all image properties first
content = content.replace(/,\n    image: "\/images\/products\/.*\.jpg"/g, '');

// Add only the correct images for products with matching ASINs
const correctImages = {
  'B0DC9CSMWS': '/images/products/B0DC9CSMWS.jpg',
  'B0FG38YYJ5': '/images/products/B0FG38YYJ5.jpg',
  'B0DXP97C6F': '/images/products/B0DXP97C6F.jpg',
  'B0F9W6R4K9': '/images/products/B0F9W6R4K9.jpg',
  'B0FF98QKY7': '/images/products/B0FF98QKY7.jpg',
  'B0FFZRM6BD': '/images/products/B0FFZRM6BD.jpg',
  'B0F9V4HQNK': '/images/products/B0F9V4HQNK.jpg',
  'B0FGWSKGCY': '/images/products/B0FGWSKGCY.jpg'
};

// Add images only for products where we have matching files
for (const [id, imagePath] of Object.entries(correctImages)) {
  const regex = new RegExp(`(id: "${id}"[\\s\\S]*?slug: "[^"]*")`, 'g');
  content = content.replace(regex, `$1,\n    image: "${imagePath}"`);
}

// Write the updated content back
fs.writeFileSync('lib/products.ts', content);
console.log('Images fixed - only correct matches added!');
