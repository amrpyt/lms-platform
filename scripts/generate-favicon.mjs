import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const inputImage = join(rootDir, 'public', 'Gemini_Generated_Image_g7lm4og7lm4og7lm.png');

async function generateFavicons() {
  console.log('Generating favicons from Dr. Zeyad photo...');
  
  // Read the image and crop to a square (center crop)
  const image = sharp(inputImage);
  const metadata = await image.metadata();
  
  const size = Math.min(metadata.width, metadata.height);
  const left = Math.floor((metadata.width - size) / 2);
  const top = Math.floor((metadata.height - size) / 2);
  
  // Create a circular mask effect by using rounded corners
  const baseImage = sharp(inputImage)
    .extract({ left, top, width: size, height: size });
  
  // Generate different sizes
  const sizes = [16, 32, 48, 180, 192, 512];
  
  for (const s of sizes) {
    const buffer = await baseImage
      .clone()
      .resize(s, s, { fit: 'cover' })
      .png()
      .toBuffer();
    
    if (s === 180) {
      writeFileSync(join(rootDir, 'src', 'app', 'apple-icon.png'), buffer);
      console.log(`Created apple-icon.png (${s}x${s})`);
    } else if (s === 192) {
      writeFileSync(join(rootDir, 'src', 'app', 'icon-192.png'), buffer);
      console.log(`Created icon-192.png (${s}x${s})`);
    } else if (s === 512) {
      writeFileSync(join(rootDir, 'src', 'app', 'icon-512.png'), buffer);
      console.log(`Created icon-512.png (${s}x${s})`);
    }
  }
  
  // Create favicon.ico (32x32)
  const favicon32 = await baseImage
    .clone()
    .resize(32, 32, { fit: 'cover' })
    .png()
    .toBuffer();
  
  writeFileSync(join(rootDir, 'src', 'app', 'icon.png'), favicon32);
  console.log('Created icon.png (32x32)');
  
  // Also create a 16x16 version
  const favicon16 = await baseImage
    .clone()
    .resize(16, 16, { fit: 'cover' })
    .png()
    .toBuffer();
  
  writeFileSync(join(rootDir, 'src', 'app', 'icon-16.png'), favicon16);
  console.log('Created icon-16.png (16x16)');
  
  console.log('Done! Favicons generated successfully.');
}

generateFavicons().catch(console.error);
