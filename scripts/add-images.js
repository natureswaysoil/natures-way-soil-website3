
const fs = require('fs');

// Read the products file
let content = fs.readFileSync('lib/products.ts', 'utf8');

// Image mappings
const imageMap = {
  '"1"': '/images/products/1.jpg',
  '"B0DC9CSMWS"': '/images/products/B0DC9CSMWS.jpg',
  '"B0FG38YYJ5"': '/images/products/B0FG38YYJ5.jpg',
  '"3"': '/images/products/3.jpg',
  '"B0DXP97C6F"': '/images/products/B0DXP97C6F.jpg',
  '"B0F9W6R4K9"': '/images/products/B0F9W6R4K9.jpg',
  '"B0FF98QKY7"': '/images/products/B0FF98QKY7.jpg',
  '"B0FFZRM6BD"': '/images/products/B0FFZRM6BD.jpg',
  '"B0F9V4HQNK"': '/images/products/B0F9V4HQNK.jpg',
  '"B0FGWSKGCY"': '/images/products/B0FGWSKGCY.jpg',
  '"7"': '/images/products/7.jpg',
  '"8"': '/images/products/8.jpg',
  '"9"': '/images/products/9.jpg',
  '"10"': '/images/products/10.jpg',
  '"11"': '/images/products/11.jpg',
  '"12"': '/images/products/12.jpg',
  '"13"': '/images/products/13.jpg',
  '"14"': '/images/products/14.jpg'
};

// Process each product
for (const [id, imagePath] of Object.entries(imageMap)) {
  // Find the pattern for each product and add image property before the closing brace
  const regex = new RegExp(`(id: ${id.replace(/"/g, '\\"')}[\\s\\S]*?slug: "[^"]*")`, 'g');
  content = content.replace(regex, `$1,\n    image: "${imagePath}"`);
}

// Write the updated content back
fs.writeFileSync('lib/products.ts', content);
console.log('Images added to products!');
