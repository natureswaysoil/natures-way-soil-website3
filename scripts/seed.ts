
import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'
import csv from 'csv-parser'

const prisma = new PrismaClient()

interface ProductData {
  asin: string
  sku: string
  title: string
  shortName?: string
  sellingPrice?: number
  active: boolean
}

// Enhanced product data with categories, descriptions, and SEO content
const productEnhancements: Record<string, {
  category: string
  description: string
  features: string
  benefits: string
  applicationTips: string
  shortName?: string
}> = {
  'B0822RH5L3': {
    category: 'Liquid Fertilizers',
    shortName: 'Organic Liquid Fertilizer',
    description: 'Premium organic liquid fertilizer for garden and house plants. USDA Certified Biobased Product made fresh weekly with B-1 Vitamin and Aloe Vera Juice for superior plant nutrition and transplant success.',
    features: '100% Organic • USDA Certified Biobased • Contains B-1 Vitamin • Enriched with Aloe Vera Juice • Made Fresh Weekly • Suitable for all plants',
    benefits: 'Promotes healthy plant growth • Improves transplant survival rates • Enhances nutrient absorption • Strengthens root development • Safe for organic gardening • Easy liquid application',
    applicationTips: 'Mix 1-2 tablespoons per gallon of water. Apply every 2-3 weeks during growing season. Ideal for feeding vegetables, flowers, and houseplants. Can be used as soil drench or foliar spray.'
  },
  'B0D52CQNGN': {
    category: 'Soil Amendments',
    shortName: 'Horticultural Activated Charcoal',
    description: 'Premium activated charcoal for indoor and outdoor plants. Perfect for terrariums, bonsai soil conditioning, and cactus soil improvement. Enhances drainage and prevents root rot.',
    features: '4 Quart size • Premium activated charcoal • Suitable for terrariums • Ideal for bonsai and cactus soil • Improves drainage • Prevents odors',
    benefits: 'Improves soil drainage • Prevents root rot • Filters impurities • Eliminates odors • Long-lasting soil conditioner • Perfect for specialty plants',
    applicationTips: 'Add 10-20% to potting mix for terrariums. Mix into bonsai soil for better drainage. Use as bottom layer in containers without drainage holes.'
  },
  'B0D6886G54': {
    category: 'Specialized Fertilizers',
    shortName: 'Organic Tomato Fertilizer',
    description: 'Specialized organic liquid fertilizer formulated specifically for tomatoes. Made fresh weekly with B-1 Vitamin and Aloe Vera to prevent blossom end rot and promote healthy fruit development.',
    features: 'Tomato-specific formula • Made Fresh Weekly • Contains B-1 Vitamin • Aloe Vera enriched • Prevents blossom end rot • Concentrated formula',
    benefits: 'Prevents blossom end rot • Promotes larger fruit yields • Strengthens plant immunity • Improves transplant success • Organic and safe • Professional-grade nutrition',
    applicationTips: 'Dilute concentrate according to label directions. Apply every 2 weeks throughout growing season. Start applications after transplanting for best results.'
  },
  'B0D69LNC5T': {
    category: 'Soil Amendments',
    shortName: 'Soil Booster and Loosener',
    description: 'Organic soil booster and loosener designed to enhance soil health, improve aeration, and promote robust root growth. Ideal for gardens, lawns, and potted plants.',
    features: 'Organic formula • Improves soil aeration • Enhances soil structure • Promotes root growth • Suitable for all plant types • Easy application',
    benefits: 'Loosens compacted soil • Improves water infiltration • Enhances nutrient availability • Promotes healthy root systems • Increases soil biology • Long-term soil improvement',
    applicationTips: 'Apply to soil surface and work into top 6 inches. Water thoroughly after application. Best applied in spring or fall for optimal results.'
  },
  'B0D7T3TLQP': {
    category: 'Potting Mixes',
    shortName: 'Orchid & African Violet Mix',
    description: 'Premium potting mix specially formulated for orchids and African violets. Contains coco coir, worm castings, activated biochar, and perlite for optimal drainage and nutrition.',
    features: 'Premium coco coir base • 20% worm castings • Activated biochar included • Perlite for drainage • Lightweight formula • Nutrient-rich blend',
    benefits: 'Perfect drainage for orchids • Rich in organic nutrients • Prevents root rot • Promotes blooming • Long-lasting formula • Professional quality',
    applicationTips: 'Use directly for repotting orchids and African violets. Ensure good drainage in containers. Water when top inch feels dry.'
  },
  'B0D9HT7ND8': {
    category: 'Hydroponic Fertilizers',
    shortName: 'Organic Hydroponic Fertilizer',
    description: 'Concentrated organic hydroponic fertilizer made fresh weekly. 32 oz concentrate makes 512 gallons of nutrient solution for hydroponic systems and aquaponics.',
    features: 'Organic concentrate • Made fresh weekly • Makes 512 gallons • Hydroponic specific • Aquaponics compatible • Complete nutrition',
    benefits: 'Perfect for hydroponic systems • Organic certification • High concentration value • Fresh weekly production • Complete plant nutrition • Suitable for aquaponics',
    applicationTips: 'Mix according to dilution chart for your hydroponic system. Monitor pH levels. Best for leafy greens, herbs, and fruiting plants in hydroponic setups.'
  },
  'B0DC9CSMWS': {
    category: 'Lawn Care',
    shortName: 'Dog Urine Neutralizer',
    description: 'Pet-safe lawn revitalizer that neutralizes dog urine spots and restores green grass. Eliminates odors while reviving damaged lawn areas naturally.',
    features: 'Pet-safe formula • Neutralizes urine spots • Eliminates odors • Restores green grass • 32 oz ready-to-use • Natural ingredients',
    benefits: 'Repairs yellow spots • Safe for pets and family • Eliminates urine odors • Promotes grass regrowth • Easy spray application • Fast-acting results',
    applicationTips: 'Spray directly on affected areas. Apply generously to urine spots. Reapply weekly until grass recovers. Safe to use around pets immediately.'
  },
  'B0DDCPZY3C': {
    category: 'Soil Amendments',
    shortName: 'Enhanced Living Compost',
    description: 'Premium living compost enhanced with fermented duckweed extract, 20% worm castings, and 20% activated biochar. Weed-free organic soil amendment for superior plant growth.',
    features: 'Fermented duckweed extract • 20% worm castings • 20% activated biochar • 60% weed-free compost • Living microbiology • Organic certification',
    benefits: 'Enhances soil biology • Improves nutrient retention • Promotes root development • Increases water retention • Adds beneficial microorganisms • Long-lasting soil improvement',
    applicationTips: 'Mix into existing soil or use as top dressing. Apply 2-4 inches thick for best results. Water gently after application to activate microbes.'
  },
  'B0DFV4YZ61': {
    category: 'Lawn Care',
    shortName: 'Hay & Pasture Fertilizer - 1 Gallon',
    description: 'Organic liquid fertilizer for hay, pasture, and lawn care. Safe for horses and livestock with microbial nitrogen blend for healthy forage growth.',
    features: 'Organic formula • Livestock safe • Microbial nitrogen blend • 1 gallon size • Non-toxic • Promotes forage quality',
    benefits: 'Safe for grazing animals • Improves pasture quality • Enhances nutrient content • Promotes healthy grass growth • Organic certification • Easy liquid application',
    applicationTips: 'Apply with sprayer or watering system. Use during active growing season. Safe for immediate grazing after application.'
  },
  'B0DJ1JNQW4': {
    category: 'Lawn Care',
    shortName: 'Hay & Pasture Fertilizer - 2.5 Gallon',
    description: 'Large size organic liquid soil conditioner for hay, pasture, and lawn. Pet-safe with microbial nitrogen blend for superior grass and forage production.',
    features: '2.5 gallon economy size • Organic liquid formula • Pet safe • Microbial nitrogen • Professional grade • Concentrated formula',
    benefits: 'Economy size savings • Professional results • Safe for all animals • Improves soil health • Enhances grass quality • Sustainable nutrition',
    applicationTips: 'Dilute according to coverage area needed. Apply with tank sprayer for large areas. Most effective during spring and fall growing seasons.'
  },
  'B0DXP97C6F': {
    category: 'Specialized Fertilizers',
    shortName: 'Liquid Bone Meal',
    description: 'Organic liquid bone meal fertilizer rich in phosphorus and calcium. Fast-absorbing formula promotes healthy roots, flowers, and fruit development.',
    features: 'Liquid bone meal • High phosphorus content • Rich in calcium • Fast-absorbing • 32 oz/1 gallon size • Organic formula',
    benefits: 'Promotes root development • Enhances flowering • Improves fruit production • Strengthens plant structure • Organic and natural • Quick nutrient availability',
    applicationTips: 'Apply during planting and flowering stages. Mix with water according to label directions. Excellent for roses, tomatoes, and fruit trees.'
  },
  'B0F4NQNTSW': {
    category: 'Application Tools',
    shortName: 'Spray Pattern Indicator',
    description: 'Professional spray pattern indicator for precise fertilizer and pesticide application. Ensures even coverage and prevents waste.',
    features: 'Spray pattern visibility • Professional grade • Even coverage indicator • Waste reduction • Easy application • Precise targeting',
    benefits: 'Ensures even application • Reduces product waste • Professional results • Visible spray pattern • Improves application efficiency • Cost-effective',
    applicationTips: 'Add to spray tank according to label directions. Provides temporary color to see spray pattern. Safe for all plants when used as directed.'
  },
  'B0F8R45FJ2': {
    category: 'Organic Supplements',
    shortName: 'Liquid Kelp Fertilizer - 1 Gallon',
    description: 'Cold-processed liquid kelp fertilizer made from organic seaweed. One gallon makes 1,890 gallons of nutrient solution. Natural growth booster and soil revitalizer.',
    features: 'Cold-processed kelp • Makes 1,890 gallons • Organic seaweed • Natural growth hormones • Concentrated formula • Professional grade',
    benefits: 'Natural growth stimulation • Improves stress tolerance • Enhances root development • Increases yield • Organic and sustainable • High concentration value',
    applicationTips: 'Mix 1 oz per gallon of water for regular feeding. Apply monthly during growing season. Excellent for vegetables, flowers, and lawns.'
  },
  'B0F9B4Q5Z8': {
    category: 'Organic Supplements',
    shortName: 'Liquid Kelp Fertilizer - 2.5 Gallon',
    description: 'Economy size cold-processed liquid kelp fertilizer. Organic seaweed concentrate for professional growers and large gardens.',
    features: '2.5 gallon economy size • Cold-processed • Organic seaweed concentrate • Professional strength • Natural growth hormones • High value',
    benefits: 'Economy size savings • Professional results • Natural plant hormones • Improves plant vigor • Stress resistance • Sustainable organic input',
    applicationTips: 'Professional concentrate for large applications. Dilute according to crop and application method. Ideal for commercial and large-scale growing.'
  },
  'B0F9TWRWCR': {
    category: 'Soil Amendments',
    shortName: 'All-Natural Wood Compost',
    description: 'Premium all-natural wood compost and organic mulch. Manure-free soil amendment in convenient 25 lb bag for garden improvement.',
    features: '25 lb bag • All-natural wood • No manure • Organic mulch • Soil amendment • Premium quality',
    benefits: 'Improves soil structure • Adds organic matter • Moisture retention • Weed suppression • No odor • Long-lasting',
    applicationTips: 'Apply 2-4 inches thick as mulch or work into soil as amendment. Water after application. Ideal for flower beds and vegetable gardens.'
  },
  'B0F9V3K9L7': {
    category: 'Organic Supplements',
    shortName: 'Humic & Fulvic Acid - 2.5 Gallon',
    description: 'Concentrated liquid humic and fulvic acid with organic kelp. Natural soil conditioner and plant growth stimulator for professional results.',
    features: '2.5 gallon concentrate • Humic and fulvic acids • Organic kelp included • Natural soil conditioner • Growth stimulator • Professional grade',
    benefits: 'Improves nutrient uptake • Enhances soil biology • Increases water retention • Stimulates root growth • Natural chelation • Professional results',
    applicationTips: 'Dilute according to application method. Apply through irrigation or as soil drench. Most effective when applied regularly throughout growing season.'
  },
  'B0F9V4HQNK': {
    category: 'Organic Supplements',
    shortName: 'Humic & Fulvic Acid - 1 Gallon',
    description: 'Premium liquid humic and fulvic acid concentrate with organic kelp. Natural soil conditioner that improves nutrient availability and plant growth.',
    features: '1 gallon size • Humic and fulvic acids • Organic kelp • Concentrated formula • Natural soil conditioner • Plant growth stimulator',
    benefits: 'Enhanced nutrient absorption • Improved soil structure • Better water retention • Increased microbial activity • Natural and organic • Proven results',
    applicationTips: 'Mix with water for soil application or use in irrigation systems. Apply monthly for best results. Safe for all plants and soil types.'
  },
  'B0F9W6R4K9': {
    category: 'Specialized Fertilizers',
    shortName: 'Liquid Bone Meal - 1 Gallon',
    description: 'Premium liquid bone meal fertilizer in 1-gallon size. Organic phosphorus and calcium source for healthy roots, abundant flowers, and quality fruit production.',
    features: '1 gallon economy size • Liquid bone meal • High phosphorus • Rich calcium content • Organic formula • Fast absorption',
    benefits: 'Promotes flowering • Strengthens roots • Improves fruit quality • Organic nutrition • Easy application • Professional results',
    applicationTips: 'Apply during planting and throughout growing season. Ideal for roses, fruit trees, and flowering plants. Mix according to plant type and growth stage.'
  },
  'B0FF98QKY7': {
    category: 'Organic Supplements',
    shortName: 'Liquid Biochar with Kelp',
    description: 'Advanced liquid biochar formula with kelp, humic, and fulvic acid. Premium organic soil conditioner that boosts beneficial microbes and nutrient retention.',
    features: 'Liquid biochar • Kelp extract • Humic and fulvic acids • Microbial booster • Nutrient retention • 1 gallon premium formula',
    benefits: 'Increases soil biology • Improves nutrient retention • Enhances water holding • Carbon sequestration • Sustainable soil building • Long-term benefits',
    applicationTips: 'Apply as soil drench or through irrigation. Use monthly during growing season. Excellent for building long-term soil health and fertility.'
  },
  'B0FFZPLCG7': {
    category: 'Organic Supplements',
    shortName: 'Liquid Kelp Fertilizer - 32 oz',
    description: 'Cold-processed liquid kelp fertilizer in convenient 32 oz size. Organic seaweed plant food perfect for home gardens and container plants.',
    features: '32 oz convenient size • Cold-processed kelp • Organic seaweed • Natural growth booster • Home garden size • Easy application',
    benefits: 'Natural plant hormones • Improved stress tolerance • Enhanced growth • Organic and safe • Perfect home size • Professional quality',
    applicationTips: 'Mix 1-2 tablespoons per gallon of water. Apply every 2-3 weeks during growing season. Perfect for houseplants, vegetables, and flowers.'
  },
  'B0FFZRM6BD': {
    category: 'Organic Supplements',
    shortName: 'Humic & Fulvic Acid - 32 oz',
    description: 'Premium liquid humic and fulvic acid in convenient 32 oz size. Pet-safe natural lawn and garden supplement that boosts root growth and water retention.',
    features: '32 oz home size • Humic and fulvic acids • Pet-safe formula • Natural supplement • Root growth booster • Water retention enhancer',
    benefits: 'Enhances root development • Improves water efficiency • Increases microbial activity • Pet and family safe • Natural soil improvement • Easy application',
    applicationTips: 'Mix with water for lawn and garden application. Safe to use around pets and children. Apply monthly for optimal soil health benefits.'
  },
  'B0FG38YYJ5': {
    category: 'Lawn Care',
    shortName: 'Dog Urine Neutralizer - 1 Gallon',
    description: 'Professional-size pet-safe grass repair spray for yellow spots. 1-gallon economy size eliminates odors and revives damaged lawn areas.',
    features: '1 gallon economy size • Pet-safe formula • Yellow spot repair • Odor eliminator • Grass reviver • Professional strength',
    benefits: 'Repairs large areas • Economy size value • Safe for pets • Eliminates odors • Promotes grass recovery • Professional results',
    applicationTips: 'Apply generously to damaged areas. Safe for immediate pet contact. Reapply as needed until grass recovers. Works on all grass types.'
  },
  'B0FGWSKGCY': {
    category: 'Lawn Care',
    shortName: 'Seaweed & Humic Acid Lawn Treatment',
    description: 'Professional lawn treatment with 4.5% humic acid and 4.5% cold-processed kelp. 32 oz concentrate for organic lawn care and grass fertilization.',
    features: '32 oz concentrate • 4.5% humic acid • 4.5% cold-processed kelp • Lawn specific formula • Organic fertilizer additive • Professional grade',
    benefits: 'Improves lawn health • Enhances grass color • Increases stress tolerance • Organic and natural • Professional results • Easy application',
    applicationTips: 'Dilute according to lawn area. Apply with sprayer for even coverage. Best results when applied monthly during growing season.'
  }
}

async function main() {
  console.log('🌱 Starting seed process...')

  // Read and parse CSV file
  const csvPath = path.join(process.cwd(), 'data', 'products.csv')
  const products: ProductData[] = []

  return new Promise<void>((resolve, reject) => {
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (row) => {
        // Parse CSV row - handling the specific format from the file
        const active = row['Active']?.toString().toLowerCase() === 'true'
        const sellingPrice = row['Selling Price'] ? parseFloat(row['Selling Price']) : undefined
        
        if (active && row['ASIN'] && row['Title']) {
          products.push({
            asin: row['ASIN'].toString(),
            sku: row['SKU'].toString(),
            title: row['Title'].toString(),
            shortName: row['Short Name']?.toString() || undefined,
            sellingPrice: sellingPrice,
            active: active
          })
        }
      })
      .on('end', async () => {
        try {
          console.log(`📊 Found ${products.length} active products to seed`)

          // Clear existing products
          await prisma.product.deleteMany()
          console.log('🗑️ Cleared existing products')

          // Insert products with enhanced data
          for (const product of products) {
            const enhancement = productEnhancements[product.asin]
            
            await prisma.product.create({
              data: {
                asin: product.asin,
                sku: product.sku,
                title: product.title,
                shortName: enhancement?.shortName || product.shortName || product.title.split(' ').slice(0, 4).join(' '),
                sellingPrice: product.sellingPrice,
                active: product.active,
                category: enhancement?.category || 'General',
                description: enhancement?.description || `Premium organic product: ${product.title}`,
                features: enhancement?.features || 'Organic • Professional Grade • Easy Application',
                benefits: enhancement?.benefits || 'Promotes healthy plant growth • Organic and safe • Professional results',
                applicationTips: enhancement?.applicationTips || 'Follow label directions for best results. Safe for organic gardening.'
              }
            })
          }

          console.log(`✅ Successfully seeded ${products.length} products`)
          resolve()
        } catch (error) {
          console.error('❌ Error seeding products:', error)
          reject(error)
        }
      })
      .on('error', (error) => {
        console.error('❌ Error reading CSV:', error)
        reject(error)
      })
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
