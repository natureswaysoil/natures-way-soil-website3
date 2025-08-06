
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata = {
  title: 'Terms of Service - Nature\'s Way Soil',
  description: 'Terms of service for Nature\'s Way Soil website and purchases.',
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Terms of Service', href: '/terms' }
]

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Products and Services</h2>
              <p className="text-gray-700">
                All products are subject to availability. We reserve the right to discontinue 
                any product at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                For questions about these terms, please contact us through our contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
