
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'About Nature\'s Way Soil - Premium Organic Fertilizer Experts',
  description: 'Learn about Nature\'s Way Soil\'s commitment to sustainable agriculture and premium organic fertilizers. Discover our story, mission, and dedication to plant nutrition.',
  keywords: 'about natures way soil, organic fertilizer company, sustainable agriculture, plant nutrition experts, organic gardening company'
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' }
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Nature's Way Soil</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-green-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              At Nature's Way Soil, we're dedicated to providing premium organic fertilizers and soil amendments 
              that promote sustainable gardening practices while delivering exceptional plant nutrition results. 
              Our commitment to quality and environmental stewardship drives everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-700 mb-4">
                Founded on the principle that healthy soil creates healthy plants, Nature's Way Soil has been 
                at the forefront of organic fertilizer innovation. We understand that successful gardening 
                starts with proper plant nutrition and soil health.
              </p>
              <p className="text-gray-700">
                Our team of plant nutrition experts continuously researches and develops formulations that 
                meet the evolving needs of both home gardeners and commercial growers nationwide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Commitment</h3>
              <p className="text-gray-700 mb-4">
                Every product we manufacture is made fresh weekly using the finest organic ingredients. 
                This ensures maximum potency and effectiveness in every bottle, providing your plants 
                with the nutrition they need to thrive.
              </p>
              <p className="text-gray-700">
                We maintain strict quality control standards throughout our production process, 
                ensuring consistent results that gardeners can depend on season after season.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Nature's Way Soil?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">✓ Fresh Manufacturing</h4>
                <p className="text-gray-700">Products made fresh weekly for maximum potency</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">✓ Professional Grade</h4>
                <p className="text-gray-700">Trusted by commercial growers nationwide</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">✓ Sustainable Practices</h4>
                <p className="text-gray-700">Environmentally responsible formulations</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">✓ Expert Support</h4>
                <p className="text-gray-700">Knowledgeable team ready to help with plant nutrition questions</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">✓ Wide Product Range</h4>
                <p className="text-gray-700">Complete line of specialized organic fertilizers</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">✓ Proven Results</h4>
                <p className="text-gray-700">Thousands of satisfied customers nationwide</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Product Philosophy</h3>
            <p className="text-gray-700 mb-4">
              We believe that the best fertilizers work in harmony with nature, not against it. Our organic 
              liquid fertilizers are designed to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Improve soil health and microbial activity</li>
              <li>Provide immediate and long-term plant nutrition</li>
              <li>Support sustainable gardening practices</li>
              <li>Minimize environmental impact</li>
              <li>Deliver consistent, professional results</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability & Environment</h3>
            <p className="text-gray-700 mb-4">
              Environmental stewardship is at the core of our business. We're committed to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Using only organic, sustainably sourced ingredients</li>
              <li>Minimizing packaging waste through efficient design</li>
              <li>Supporting regenerative agriculture practices</li>
              <li>Continuous research into eco-friendly formulations</li>
              <li>Educating gardeners on sustainable growing methods</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-6">
              Discover the Nature's Way Soil difference for yourself. Browse our complete collection 
              of premium organic fertilizers and soil amendments.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/products">Shop Products</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://natureswaysoil.com/chat" target="_blank" rel="noopener noreferrer">
                  Get Expert Advice
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
