
import { Hero } from '@/components/hero'
import { FeaturedProducts } from '@/components/featured-products'
import { Benefits } from '@/components/benefits'
import { FAQ } from '@/components/faq'
import { CTA } from '@/components/cta'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <FAQ />
      <CTA />
    </div>
  )
}
