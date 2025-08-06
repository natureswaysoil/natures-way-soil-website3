
export interface Product {
  id: string
  asin: string
  sku: string
  title: string
  shortName?: string | null
  sellingPrice?: number | null
  active: boolean
  category?: string | null
  description?: string | null
  features?: string | null
  benefits?: string | null
  applicationTips?: string | null
  imageUrl?: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Contact {
  id: string
  name: string
  email: string
  subject?: string | null
  message: string
  formType: string
  status: string
  createdAt: Date
  updatedAt: Date
}

export interface ContactFormData {
  name: string
  email: string
  subject?: string
  message: string
  formType?: string
}

export interface ProductFilters {
  category?: string
  priceRange?: {
    min: number
    max: number
  }
  search?: string
}

export const PRODUCT_CATEGORIES = [
  'All Products',
  'Liquid Fertilizers',
  'Specialized Fertilizers',
  'Organic Supplements',
  'Soil Amendments',
  'Potting Mixes',
  'Hydroponic Fertilizers',
  'Lawn Care',
  'Application Tools'
] as const

export type ProductCategory = typeof PRODUCT_CATEGORIES[number]

// SEO Meta Types
export interface MetaData {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}
