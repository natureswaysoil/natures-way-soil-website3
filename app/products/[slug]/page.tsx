
import { notFound } from 'next/navigation'
import { getProductBySlug } from '@/lib/products'
import { ProductDetail } from '@/components/product-detail'
import { RelatedProducts } from '@/components/related-products'
import { Breadcrumbs } from '@/components/breadcrumbs'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found'
    }
  }

  return {
    title: `${product.name} - Nature's Way Soil`,
    description: product.description,
    keywords: product.seoKeywords.join(', '),
    openGraph: {
      title: product.name,
      description: product.description,
      type: 'website',
    }
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: product.name, href: `/products/${product.slug}` }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      <ProductDetail product={product} />
      <RelatedProducts currentProduct={product} />
    </div>
  )
}

export async function generateStaticParams() {
  // This would typically fetch from your database or API
  const products = await import('@/lib/products').then(mod => mod.products)
  
  return products.map((product) => ({
    slug: product.slug,
  }))
}
