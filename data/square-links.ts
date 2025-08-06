// Return URL for redirect after checkout
const RETURN_URL = 'https://natureswaysoil.com'

// Individual Square buy button links for each product with return URL
export const squareLinks: Record<string, string> = {
  '1': 'https://natures-way-soil.square.site/', // Soil Booster and Loosener - using main store
  '2': `https://square.link/u/R0lXkbGN?return_url=${encodeURIComponent(RETURN_URL)}`, // Dog Urine Neutralizer
  '3': `https://square.link/u/vpb2A2FG?return_url=${encodeURIComponent(RETURN_URL)}`, // Enhanced Living Compost
  '4': `https://square.link/u/bkV4hykA?return_url=${encodeURIComponent(RETURN_URL)}`, // Liquid Bone Meal Fertilizer
  '5': `https://square.link/u/Sxu3YjeF?return_url=${encodeURIComponent(RETURN_URL)}`, // Humic & Fulvic Acid
  '6': `https://square.link/u/trG28E08?return_url=${encodeURIComponent(RETURN_URL)}`, // Liquid Kelp Fertilizer  
  '7': `https://square.link/u/e2SMKI8d?return_url=${encodeURIComponent(RETURN_URL)}`, // Orchid & African Violet Mix
  '8': `https://square.link/u/TB1OW2H4?return_url=${encodeURIComponent(RETURN_URL)}`, // Organic All-Purpose Fertilizer
  '9': `https://square.link/u/mc83oFID?return_url=${encodeURIComponent(RETURN_URL)}`, // Organic House Plant Fertilizer
  '10': `https://square.link/u/gBmH5NzX?return_url=${encodeURIComponent(RETURN_URL)}`, // Organic Hydroponic Fertilizer
  '11': 'https://natures-way-soil.square.site/', // Organic Liquid Fertilizer - using main store
  '12': `https://square.link/u/hYTOdSG1?return_url=${encodeURIComponent(RETURN_URL)}`, // Organic Tomato Liquid Fertilizer
  '13': `https://square.link/u/NW5nZnUr?return_url=${encodeURIComponent(RETURN_URL)}`, // Organic Vegetable Fertilizer
  '14': `https://square.link/u/VVrZwNnd?return_url=${encodeURIComponent(RETURN_URL)}` // Premium Organic Potting Mix
}

// Helper function to get Square link by product ID
export function getSquareLink(productId: string): string {
  return squareLinks[productId] || 'https://natures-way-soil.square.site/'
}