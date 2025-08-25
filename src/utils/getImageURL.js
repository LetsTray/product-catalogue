// Resolves an image file name from src/assets to a usable URL
// Supports both Vite dev and production builds.
export function getImageURL(imageFileName) {
  if (!imageFileName) return "";
  try {
    return new URL(`../assets/${imageFileName}`, import.meta.url).href;
  } catch (error) {
    return "";
  }
}

