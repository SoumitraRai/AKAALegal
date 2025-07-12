const fs = require('fs');
const path = require('path');

// Create a basic placeholder image in SVG format
const createSvgPlaceholder = (filePath, text, bgColor, textColor) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <rect width="100%" height="100%" fill="${bgColor}" />
  <circle cx="50" cy="40" r="25" fill="${textColor}" />
  <rect x="25" y="70" width="50" height="5" rx="2" fill="${textColor}" />
  <text x="50" y="95" font-family="Arial" font-size="10" fill="${textColor}" text-anchor="middle">${text}</text>
</svg>`;

  try {
    fs.writeFileSync(filePath, svg);
    console.log(`Created SVG placeholder at ${filePath}`);
  } catch (err) {
    console.error(`Error creating SVG: ${err}`);
  }
};

// Create a basic award icon in SVG format
const createAwardSvg = (filePath, text, number) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="#f9f7f2" stroke="#c9aa6e" stroke-width="2" />
  <polygon points="50,20 56,40 76,40 60,55 66,75 50,63 34,75 40,55 24,40 44,40" fill="#c9aa6e" />
  <text x="50" y="85" font-family="Arial" font-size="10" fill="#0c2444" text-anchor="middle">${text} ${number}</text>
</svg>`;

  try {
    fs.writeFileSync(filePath, svg);
    console.log(`Created award SVG at ${filePath}`);
  } catch (err) {
    console.error(`Error creating SVG: ${err}`);
  }
};

// Create testimonial placeholders
const testimonialsDir = path.join(__dirname, 'public', 'assets', 'images', 'testimonials');
if (!fs.existsSync(testimonialsDir)) {
  fs.mkdirSync(testimonialsDir, { recursive: true });
}

for (let i = 1; i <= 3; i++) {
  createSvgPlaceholder(
    path.join(testimonialsDir, `client-${i}.jpg`),
    `Client ${i}`,
    '#f9f7f2',
    '#c9aa6e'
  );
}

// Create award placeholders
const awardsDir = path.join(__dirname, 'public', 'assets', 'images', 'awards');
if (!fs.existsSync(awardsDir)) {
  fs.mkdirSync(awardsDir, { recursive: true });
}

for (let i = 1; i <= 4; i++) {
  createAwardSvg(
    path.join(awardsDir, `award-${i}.png`),
    'Award',
    i
  );
}

console.log('✓ Placeholder images created successfully!');
