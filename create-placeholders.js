const fs = require('fs');
const path = require('path');

// Create a 1x1 pixel PNG with a single color
const createColorImage = (filePath, color) => {
  // Simple 1x1 pixel PNG with the specified color
  const pngHeader = Buffer.from([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,  // PNG signature
    0x00, 0x00, 0x00, 0x0d, 0x49, 0x48, 0x44, 0x52,  // IHDR chunk
    0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,  // Width & height: 1x1
    0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53,  // Bit depth, color type, etc.
    0xde, 0x00, 0x00, 0x00, 0x0c, 0x49, 0x44, 0x41,  // IDAT chunk
    0x54, 0x08, 0xd7, 0x63, color[0], color[1], color[2], 0xff, 0x00,  // Color data
    0x05, 0x00, 0x01, 0x5a, 0x00, 0x59, 0xf0, 0x9d,  // CRC, etc.
    0x05, 0x8a, 0x00, 0x00, 0x00, 0x00, 0x49, 0x45,  // IEND chunk
    0x4e, 0x44, 0xae, 0x42, 0x60, 0x82
  ]);

  try {
    fs.writeFileSync(filePath, pngHeader);
    console.log(`Created color image at ${filePath}`);
  } catch (err) {
    console.error(`Error creating image: ${err}`);
  }
};

// Create the textures directory if it doesn't exist
const texturesDir = path.join(__dirname, 'public', 'assets', 'textures');
if (!fs.existsSync(texturesDir)) {
  fs.mkdirSync(texturesDir, { recursive: true });
}

// Create a light cream colored image for marble texture
createColorImage(path.join(texturesDir, 'marble-light.png'), [249, 247, 242]);

// Create a subtle pattern image (slightly darker cream)
createColorImage(path.join(texturesDir, 'subtle-pattern.png'), [245, 242, 235]);

console.log('✓ Placeholder texture files created!');
