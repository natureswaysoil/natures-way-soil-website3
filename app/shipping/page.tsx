
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Truck, Clock, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Shipping Information - Nature\'s Way Soil',
  description: 'Shipping information, rates, and policies for Nature\'s Way Soil products.',
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Shipping Info', href: '/shipping' }
]

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shipping Information</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Coverage Area</h3>
            <p className="text-gray-700">Lower 48 States Only</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Processing Time</h3>
            <p className="text-gray-700">1-2 Business Days</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <Truck className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Free Shipping</h3>
            <p className="text-gray-700">On All Orders</p>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping & Returns</h2>
            <div className="bg-green-50 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <strong>FREE standard shipping on ALL orders</strong>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <strong>No-hassle refunds - no need to return products</strong>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Expedited shipping options available at checkout
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing & Delivery</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Orders are processed within 1-2 business days. Since our products are made fresh weekly, 
                your order will contain the freshest possible fertilizers for maximum effectiveness.
              </p>
              <p>
                Standard shipping typically takes 3-7 business days depending on your location. 
                Expedited options are available for faster delivery.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No-Hassle Refund Policy</h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>We stand behind our products 100%.</strong> If you're not completely satisfied 
                  with your purchase, simply contact us and we'll issue a full refund.
                </p>
                <ul className="space-y-2">
                  <li>• No need to return products - keep them or dispose responsibly</li>
                  <li>• Full refunds processed within 1-2 business days</li>
                  <li>• No restocking fees or hidden charges</li>
                  <li>• Contact us via email or chat for instant refund processing</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Geographic Restrictions</h2>
            <div className="bg-yellow-50 rounded-lg p-6">
              <p className="text-gray-700">
                We currently ship to the lower 48 United States only. We do not ship to Alaska, 
                Hawaii, or international destinations at this time.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
