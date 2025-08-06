
export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  type: string
  benefits: string[]
  usage: string[]
  applicationRate: string
  npkRatio?: string
  size: string
  ingredients: string
  seoKeywords: string[]
  slug: string
  image?: string
}

export const products: Product[] = [
  {
    id: "B0D69LNC5T",
    name: "Nature's Way Soil Booster and Loosener",
    description: "Organic Formula to Enhance Soil Health, Improve Aeration, and Promote Root Growth – Ideal for Gardens, Lawns, and Potted Plants. Professional-grade soil amendment that transforms heavy clay soils.",
    price: 29.99,
    category: "Soil Amendments",
    type: "Soil Conditioner",
    benefits: [
      "Enhances soil health",
      "Improves aeration", 
      "Promotes root growth",
      "Ideal for gardens, lawns, and potted plants"
    ],
    usage: [
      "Apply to gardens, lawns, and potted plants",
      "Mix into soil before planting",
      "Use around established plants",
      "Perfect for improving soil structure"
    ],
    applicationRate: "Follow package directions for application rates",
    size: "Variable",
    ingredients: "Organic soil enhancement formula",
    seoKeywords: ["soil booster", "soil loosener", "soil health", "organic soil amendment"],
    slug: "soil-booster-and-loosener"
  },
  {
    id: "B0DC9CSMWS",
    name: "Nature's Way Soil Dog Urine Neutralizer & Lawn Revitalizer – 32 oz",
    description: "Pet-Safe Grass Repair Spray for Yellow Spots | Odor Eliminator & Soil Reviver for Healthy Green Lawns. This natural-based formula neutralizes dog urine pH and revives grass from unsightly burn spots.",
    price: 29.99,
    category: "Specialty Products",
    type: "Pet Safe Treatment",
    benefits: [
      "Neutralizes urine pH",
      "Revives grass from burn spots",
      "Removes odor",
      "Safe for pets, kids & pollinators"
    ],
    usage: [
      "Mix 2 oz concentrate with 1 gallon water",
      "Saturate affected area thoroughly",
      "Water again after 24 hours for best results",
      "Use as preventive treatment"
    ],
    applicationRate: "Mix 2 oz concentrate with 1 gallon of water in pump sprayer",
    size: "32 fl oz (946 mL)",
    ingredients: "Purified Water, Hydrogen Peroxide (3%), Enzyme Blend (Protease, Amylase), Natural Odor Neutralizer, Humic & Fulvic Acids, Citric Acid",
    seoKeywords: ["dog urine neutralizer", "pet lawn damage", "brown spot repair", "pet safe lawn treatment"],
    slug: "dog-urine-neutralizer",
    image: "/images/products/dog 32 front.jpg"
  },
  {
    id: "B0FG38YYJ5",
    name: "Nature's Way Soil Dog Urine Neutralizer & Lawn Revitalizer – 1 Gallon",
    description: "Pet-Safe Grass Repair for Yellow Spots | Odor Eliminator & Soil Reviver for Healthy Green Lawns. Large 1-gallon size for treating larger areas and multiple applications.",
    price: 59.99,
    category: "Specialty Products", 
    type: "Pet Safe Treatment",
    benefits: [
      "Neutralizes Urine pH",
      "Revives Grass & Soil Microbes",
      "Removes Odor",
      "Safe for Pets, Kids & Pollinators"
    ],
    usage: [
      "Attach garden hose tightly to sprayer nozzle",
      "Turn on water and rotate nozzle to 'ON' position",
      "Apply evenly across grass areas affected by dog urine",
      "Turn nozzle to 'OFF' position, then turn off water"
    ],
    applicationRate: "Ready to use - attach to garden hose and spray directly",
    size: "1 GALLON",
    ingredients: "Water, bio-based acids, soil organisms, aloe vera",
    seoKeywords: ["dog urine neutralizer", "1 gallon", "pet lawn damage", "large area treatment"],
    slug: "dog-urine-neutralizer-gallon",
    image: "/images/products/dog 1 gallon front.jpg"
  },
  {
    id: "B0DDCPZY3C",
    name: "Nature's Way Soil Enhanced Living Compost",
    description: "with Fermented Duckweed Extract, 20% Worm Castings, 20% Activated BioChar, 60% Weed-Free Compost – Organic Garden Soil Amendment for Root & Plant Growth",
    price: 29.99,
    category: "Soil Amendments",
    type: "Living Compost",
    benefits: [
      "Contains 20% Worm Castings",
      "20% Activated BioChar",
      "60% Weed-Free Compost",
      "Fermented Duckweed Extract"
    ],
    usage: [
      "Use as organic garden soil amendment",
      "Promotes root & plant growth", 
      "Mix into garden beds",
      "Ideal for container gardening"
    ],
    applicationRate: "Follow package directions for application rates",
    size: "Bag",
    ingredients: "Fermented Duckweed Extract, 20% Worm Castings, 20% Activated BioChar, 60% Weed-Free Compost",
    seoKeywords: ["living compost", "worm castings", "biochar", "organic soil amendment"],
    slug: "enhanced-living-compost"
  },
  {
    id: "B0DXP97C6F",
    name: "Nature's Way Soil Liquid Bone Meal Fertilizer – 32 Ounce",
    description: "Organic Phosphorus & Calcium for Healthy Roots, Flowers & Fruits – Fast-Absorbing Liquid Plant Food for Vegetables, Flowers, Trees, and Shrubs. Made fresh weekly for maximum potency.",
    price: 24.99,
    category: "Liquid Fertilizers",
    type: "Organic Liquid",
    benefits: [
      "Promotes strong root development",
      "Enhances flowering and fruiting",
      "Provides readily available phosphorus",
      "Adds essential calcium"
    ],
    usage: [
      "Apply during planting and early growth",
      "Use before flowering period",
      "Excellent for bulbs and perennials",
      "Ideal for root vegetables"
    ],
    applicationRate: "Mix 1-2 tablespoons per gallon of water, apply every 2-3 weeks",
    npkRatio: "25-5-1",
    size: "32 fl oz",
    ingredients: "Bone Meal (Hydrolyzed): 25%, Calcium: 5%, Phosphorus (P2O5): 10%, Water: Balance",
    seoKeywords: ["liquid bone meal", "phosphorus fertilizer", "root development", "flowering fertilizer"],
    slug: "liquid-bone-meal-fertilizer",
    image: "/images/products/32 ounce liquid bone meal front.jpg"
  },
  {
    id: "B0F9W6R4K9",
    name: "Nature's Way Soil Liquid Bone Meal Fertilizer – 1 Gallon",
    description: "Organic Phosphorus & Calcium for Healthy Roots, Flowers & Fruits – Fast-Absorbing Liquid Plant Food for Vegetables, Flowers, Trees, and Shrubs. Large 1-gallon size for gardens and landscaping.",
    price: 39.99,
    category: "Liquid Fertilizers",
    type: "Organic Liquid",
    benefits: [
      "Promotes strong root development",
      "Enhances flowering and fruiting", 
      "Provides readily available phosphorus",
      "Adds essential calcium"
    ],
    usage: [
      "Apply during planting and early growth",
      "Use before flowering period",
      "Excellent for bulbs and perennials",
      "Ideal for root vegetables"
    ],
    applicationRate: "Mix 1-2 tablespoons per gallon of water, apply every 2-3 weeks",
    npkRatio: "25-5-1",
    size: "1 Gallon",
    ingredients: "Bone Meal (Hydrolyzed): 25%, Calcium: 5%, Phosphorus (P2O5): 10%, Water: Balance",
    seoKeywords: ["liquid bone meal", "1 gallon", "phosphorus fertilizer", "root development"],
    slug: "liquid-bone-meal-fertilizer-gallon",
    image: "/images/products/bone meal 1 gaallon front.jpg"
  },
  {
    id: "B0FF98QKY7",
    name: "Nature's Way Soil® Liquid Biochar with Kelp, Humic & Fulvic Acid – 1 Gallon",
    description: "Organic Soil Conditioner for Plants, Gardens & Lawns – Boost Microbes & Nutrient Retention. Contains Kelp, Humic & Fulvic Acid with Activated Biochar for superior soil health.",
    price: 89.99,
    category: "Soil Conditioners",
    type: "Biochar Conditioner",
    benefits: [
      "Organic Ingredients",
      "Contains Kelp, Humic & Fulvic Acid",
      "Activated Biochar",
      "Made Fresh Weekly • Shelf Life: One Year"
    ],
    usage: [
      "Shake well before use",
      "Apply at rate f 2-4 oz per gallon of water every 4-6 weeks",
      "Mix solution thoroughly before application",
      "Suitable for gardens, lawns, composting, and landscape plantings"
    ],
    applicationRate: "Shake well before use. Apply at a rate f 2-4 oz per gallon of water every 4-6 weeks, or as needed",
    size: "1 GALLON",
    ingredients: "Water, Activated Biochar, Cold-Processed Kelp Extract, Liquid Humic Acid, Liquid Fulvic Acid, Organic Aloe Vera, Organic Molasses, Calcium Sorbate, Citric Acid",
    seoKeywords: ["liquid biochar", "soil conditioner", "humic acid", "kelp extract"],
    slug: "liquid-biochar-humates",
    image: "/images/products/liquid biochar 1 gallon front.jpg"
  },
  {
    id: "B0FFZRM6BD",
    name: "Nature's Way Soil® Liquid Humic & Fulvic Acid – 32 oz",
    description: "Soil Conditioner with Organic Kelp – Boosts Root Growth, Water Retention & Microbial Activity – Natural Lawn & Garden Supplement – Pet-Safe. Improves nutrient uptake and revitalizes soil biology.",
    price: 19.99,
    category: "Soil Conditioners",
    type: "Liquid Conditioner",
    benefits: [
      "Improves nutrient uptake",
      "Revitalizes soil biology", 
      "Builds stronger root systems",
      "Organic & pet-safe"
    ],
    usage: [
      "Mix with water and apply to lawns, plants & gardens",
      "Use rates: Gardens 2 fl oz per gallon of water",
      "Lawns: 1/2 fl oz per gallon of water",
      "Indoor plants: 0.5-1 oz per gallon"
    ],
    applicationRate: "Mix 2 fl oz per gallon of water; Lawn 1/2 fl oz per gallon of water",
    size: "32 oz (946 mL)",
    ingredients: "Humic Acids 6.0%. Derived from Leonardite.",
    seoKeywords: ["humic acid", "fulvic acid", "nutrient uptake", "soil conditioner"],
    slug: "liquid-humic-fulvic-acid",
    image: "/images/products/humic 32 ounce front.jpg"
  },
  {
    id: "B0F9V4HQNK",
    name: "Nature's Way Soil Liquid Humic & Fulvic Acid with Organic Kelp – 1 Gallon",
    description: "Concentrate, Natural Soil Conditioner, Plant Growth Stimulator. Liquid humic and fulvic acids with organic kelp for enhanced plant nutrition and soil health.",
    price: 39.99,
    category: "Soil Conditioners",
    type: "Liquid Conditioner",
    benefits: [
      "Natural Soil Conditioner",
      "Stimulates Plant Growth & Nutrient Uptake", 
      "Improves Root Development",
      "Contains organic kelp"
    ],
    usage: [
      "Mix with water and apply to lawns, plants & gardens",
      "Suitable for gardens, lawns, composting, and landscape plantings",
      "Feed lawn or garden monthly during growing season",
      "Use mixed solution to water indoor plants"
    ],
    applicationRate: "Mix 2 fl oz per gallon of water; Lawn 1/2 fl oz per gallon of water",
    size: "1 Gallon",
    ingredients: "Concentrated Humic and Fulvic Acids with Organic Kelp Extract",
    seoKeywords: ["humic acid", "fulvic acid", "1 gallon", "soil conditioner", "plant growth stimulator"],
    slug: "liquid-humic-fulvic-acid-gallon",
    image: "/images/products/humic 2.5 gallon front.jpg"
  },
  {
    id: "B0FGWSKGCY",
    name: "Nature's Way Soil® Seaweed & Humic Acid Lawn Treatment – 32 oz",
    description: "Organic Super Seaweed Humic Acid Blend - Liquid Sea Kelp for Grass and Plants. Natural Lawn & Garden Concentrate with Soil Hume for Simple Grow Solutions. Made Fresh Weekly with Organic Ingredients Safe for Pets.",
    price: 22.99,
    category: "Liquid Fertilizers",
    type: "Organic Seaweed",
    benefits: [
      "Soil Hume - Simple Grow Solutions",
      "Natural Lawn & Garden Concentrate", 
      "Use with Fertilizer Program",
      "Made Fresh Weekly - Organic Ingredients Safe for Pets"
    ],
    usage: [
      "Shake Well Before Use",
      "Plants: Mix 2-4 Tbs in gallon sprayer, apply every 1-2 weeks",
      "Lawns: Mix 6-8 oz/gal water, cover 1,000 sq ft",
      "Soil: Mix 6 oz in 1-2 gal water, drench soil before planting"
    ],
    applicationRate: "Plants: 2-4 Tbs per gallon; Lawns: 6-8 oz per gallon; Soil: 6 oz in 1-2 gal water",
    size: "32 ounces",
    ingredients: "Kelp Extract (Ascophyllum nodosum), Humic Acid derived from Leonardite, Total Nitrogen (N), Soluble Potash (K2O): 0.2%, Soluble organic nitrogen: 0.2%, Water-soluble potassium: 7.0%",
    seoKeywords: ["seaweed fertilizer", "humic acid", "kelp fertilizer", "lawn treatment"],
    slug: "seaweed-humic-acid-lawn-treatment",
    image: "/images/products/seaweed front.jpg"
  },
  {
    id: "B0D7T3TLQP",
    name: "Nature's Way Soil® Orchid & African Violet Potting Mix",
    description: "Premium Coco Coir, Worm Castings, Activated Biochar & Perlite | Lightweight, Nutrient-Rich Indoor Plant Blend",
    price: 29.99,
    category: "Potting Mixes",
    type: "Specialty Mix",
    benefits: [
      "Premium Coco Coir base",
      "Contains Worm Castings",
      "Activated Biochar included",
      "Lightweight & Nutrient-Rich"
    ],
    usage: [
      "Ideal for orchids and African violets",
      "Perfect for indoor plants",
      "Use for repotting specialty plants",
      "Excellent for container gardening"
    ],
    applicationRate: "Use as primary potting medium, refresh as needed",
    size: "Bag",
    ingredients: "Premium Coco Coir, Worm Castings, Activated Biochar, Perlite",
    seoKeywords: ["orchid potting mix", "african violet soil", "coco coir", "specialty potting mix"],
    slug: "orchid-african-violet-potting-mix"
  },
  {
    id: "B0F8R45FJ2",
    name: "Nature's Way Soil® Liquid Kelp Fertilizer – 1 Gallon",
    description: "Makes 1890 Gallons | Organic Seaweed Plant Food for Lawn, Garden, Flowers & Vegetables | Cold-Processed | Natural Growth Booster & Soil Revitalizer",
    price: 34.99,
    category: "Liquid Fertilizers",
    type: "Organic Seaweed",
    benefits: [
      "Makes 1890 Gallons of solution",
      "Cold-Processed for maximum potency",
      "Natural Growth Booster",
      "Soil Revitalizer"
    ],
    usage: [
      "Use on lawn, garden, flowers & vegetables",
      "Apply throughout growing season",
      "Mix according to directions",
      "Perfect for organic gardening"
    ],
    applicationRate: "Follow package directions for dilution rates",
    size: "1 Gallon",
    ingredients: "Cold-Processed Organic Seaweed Extract (Kelp)",
    seoKeywords: ["liquid kelp fertilizer", "seaweed fertilizer", "organic plant food", "cold processed kelp"],
    slug: "liquid-kelp-fertilizer-gallon",
    image: "/images/products/1 gallon kelp front.jpg"
  },
  {
    id: "B0FFZPLCG7",
    name: "Nature's Way Soil® Liquid Kelp Fertilizer – 32 Ounce",
    description: "Organic Seaweed Plant Food for Lawn, Garden, Flowers & Vegetables | Cold-Processed | Natural Growth Booster & Soil Revitalizer",
    price: 24.99,
    category: "Liquid Fertilizers",
    type: "Organic Seaweed",
    benefits: [
      "Cold-Processed for maximum potency",
      "Natural Growth Booster",
      "Soil Revitalizer",
      "Organic Seaweed Plant Food"
    ],
    usage: [
      "Use on lawn, garden, flowers & vegetables",
      "Apply throughout growing season",
      "Mix according to directions",
      "Perfect for organic gardening"
    ],
    applicationRate: "Follow package directions for dilution rates",
    size: "32 Ounce",
    ingredients: "Cold-Processed Organic Seaweed Extract (Kelp)",
    seoKeywords: ["liquid kelp fertilizer", "seaweed fertilizer", "32 ounce", "cold processed kelp"],
    slug: "liquid-kelp-fertilizer-32oz",
    image: "/images/products/liquid kelp 32 front.jpg"
  },
  {
    id: "B0D9HT7ND8",
    name: "Nature's Way Soil Organic Hydroponic Fertilizer Concentrate",
    description: "Made Fresh Weekly-32 oz – Makes 512 Gallons of Nutrient Solution – Organic Plant Food for Hydroponic Systems, Aquaponics",
    price: 25.99,
    category: "Hydroponic Nutrients",
    type: "Concentrate",
    benefits: [
      "Makes 512 Gallons of nutrient solution",
      "Made Fresh Weekly",
      "Organic Plant Food",
      "For Hydroponic Systems & Aquaponics"
    ],
    usage: [
      "Perfect for hydroponic systems",
      "Use in aquaponics setups",
      "Dilute according to directions",
      "Apply throughout growing cycle"
    ],
    applicationRate: "Follow package directions for dilution rates",
    size: "32 fl oz concentrate",
    ingredients: "Organic hydroponic nutrient concentrate",
    seoKeywords: ["hydroponic fertilizer", "aquaponics nutrients", "organic concentrate", "hydroponic plant food"],
    slug: "organic-hydroponic-fertilizer-concentrate"
  },
  {
    id: "B0822RH5L3",
    name: "Nature's Way Soil Organic Liquid Fertilizer for Garden and House Plants",
    description: "100% Organic/USDA Certified Biobased Product/with B-1 Vitamin, Aloe Vera Juice to Improve Transplants/Made Fresh Weekly",
    price: 20.99,
    category: "Liquid Fertilizers",
    type: "Multi-Purpose Organic",
    benefits: [
      "100% Organic formula",
      "Contains B-1 Vitamin",
      "Aloe Vera Juice for transplants",
      "Made Fresh Weekly"
    ],
    usage: [
      "Use on gardens and houseplants",
      "Excellent for transplants",
      "Apply during active growing season",
      "Perfect for organic gardening"
    ],
    applicationRate: "Follow package directions for application rates",
    size: "Variable",
    ingredients: "100% Organic formula with B-1 Vitamin, Aloe Vera Juice",
    seoKeywords: ["organic liquid fertilizer", "garden fertilizer", "house plant fertilizer", "B-1 vitamin fertilizer"],
    slug: "organic-liquid-fertilizer-garden-house-plants"
  },
  {
    id: "B0D6886G54",
    name: "Nature's Way Soil Organic Tomato Liquid Fertilizer",
    description: "Made Fresh Weekly- Concentrate/Includes Vitamin B-1 and Aloe Vera for Faster Root Establishment, Healthier Transplants/Stops Blossom End Rot",
    price: 29.99,
    category: "Liquid Fertilizers",
    type: "Vegetable Specific",
    benefits: [
      "Made Fresh Weekly",
      "Includes Vitamin B-1 and Aloe Vera",
      "Faster Root Establishment",
      "Stops Blossom End Rot"
    ],
    usage: [
      "Perfect for tomatoes",
      "Excellent for transplants",
      "Apply during growing season",
      "Use for healthier root establishment"
    ],
    applicationRate: "Dilute concentrate according to package directions",
    size: "Concentrate",
    ingredients: "Organic tomato formula with Vitamin B-1 and Aloe Vera",
    seoKeywords: ["tomato fertilizer", "blossom end rot", "vitamin B-1", "aloe vera fertilizer"],
    slug: "organic-tomato-liquid-fertilizer"
  },
  {
    id: "B0DJ1MF2BP",
    name: "Nature's Way Soil Hay and Pasture Liquid Fertilizer – 1 Gallon",
    description: "Organic, Non-Toxic, Safe for Horses, Livestock – Promotes Healthy Growth, Nutrient-Rich Forage, and Enhanced Pasture Quality",
    price: 39.99,
    category: "Specialty Products",
    type: "Pasture & Livestock",
    benefits: [
      "Organic & Non-Toxic",
      "Safe for Horses & Livestock",
      "Promotes Healthy Growth",
      "Enhanced Pasture Quality"
    ],
    usage: [
      "Apply to hay fields and pastures",
      "Safe around livestock",
      "Use for forage improvement",
      "Apply during growing season"
    ],
    applicationRate: "Follow package directions for application rates",
    size: "1 Gallon",
    ingredients: "Organic, non-toxic pasture fertilizer formula",
    seoKeywords: ["hay fertilizer", "pasture fertilizer", "livestock safe", "forage fertilizer"],
    slug: "hay-pasture-liquid-fertilizer-gallon"
  },
  {
    id: "B0F9TWRWCR",
    name: "Nature's Way Soil All-Natural Wood Compost",
    description: "Organic Mulch and Soil Amendment, No Manure, 25 lb Bag",
    price: 39.99,
    category: "Soil Amendments",
    type: "Wood Compost",
    benefits: [
      "All-Natural Wood Compost",
      "Organic Mulch and Soil Amendment",
      "No Manure",
      "25 lb Bag"
    ],
    usage: [
      "Use as organic mulch",
      "Apply as soil amendment",
      "Perfect for garden beds",
      "Ideal for landscaping"
    ],
    applicationRate: "Apply 2-4 inches thick for mulching",
    size: "25 lb Bag",
    ingredients: "All-Natural Wood Compost (No Manure)",
    seoKeywords: ["wood compost", "organic mulch", "soil amendment", "no manure compost"],
    slug: "all-natural-wood-compost",
    image: "/images/products/wood compost frony.jpg"
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 6)
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm)) ||
    product.seoKeywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
  )
}

export const categories = [
  "All Products",
  "Liquid Fertilizers", 
  "Soil Amendments",
  "Potting Mixes",
  "Hydroponic Nutrients",
  "Soil Conditioners",
  "Specialty Products"
]
