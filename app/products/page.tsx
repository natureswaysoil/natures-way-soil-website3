'use client'

import { useState } from 'react'
import { ProductGrid } from '@/components/product-grid'
import { ProductFilters } from '@/components/product-filters'
import { ProductSearch } from '@/components/product-search'
import { Breadcrumbs } from '@/components/breadcrumbs'


const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' }
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50])

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Premium Organic Fertilizers & Soil Amendments
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Discover our complete collection of premium organic liquid fertilizers and soil amendments. 
          Each product is made fresh weekly with the finest organic ingredients for superior plant nutrition and soil health.
        </p>
      </div>

      <div className="mb-8">
        <ProductSearch onSearchChange={setSearchQuery} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilters 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
          />
        </div>
        <div className="lg:col-span-3">
          <ProductGrid 
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            priceRange={priceRange}
          />
        </div>
      </div>

      <div className="mt-16 bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Nature's Way Soil Products?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Made Fresh Weekly</h3>
            <p className="text-gray-600">Our products are manufactured fresh every week to ensure maximum potency and effectiveness.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Professional Grade</h3>
            <p className="text-gray-600">Trusted by commercial growers and gardening professionals nationwide for consistent results.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Sustainable & Organic</h3>
            <p className="text-gray-600">Environmentally responsible formulations that improve soil health while boosting plant growth.</p>
          </div>
        </div>
      </div>
    </div>
  )
}