
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata = {
  title: 'Privacy Policy - Nature\'s Way Soil',
  description: 'Privacy policy for Nature\'s Way Soil website and customer information.',
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Privacy Policy', href: '/privacy' }
]

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700">
                We collect information you provide directly to us, such as when you contact us, 
                place an order, or sign up for our newsletter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700">
                We use the information we collect to provide, maintain, and improve our services, 
                process orders, and communicate with you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us through our contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
