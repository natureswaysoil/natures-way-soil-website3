
import { ContactForm } from '@/components/contact-form'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Truck } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Contact Nature\'s Way Soil - Customer Support & Information',
  description: 'Get in touch with Nature\'s Way Soil for product information, growing advice, and customer support. We\'re here to help with all your organic fertilizer needs.',
  keywords: 'contact natures way soil, customer support, organic fertilizer questions, plant nutrition help, gardening advice'
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' }
]

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              Have questions about our organic fertilizers, need growing advice, or want to learn more 
              about our products? We're here to help! Fill out the form and we'll get back to you promptly.
            </p>
            <ContactForm />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Information</h2>
            
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Truck className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="font-semibold text-gray-900">Shipping Information</h3>
                </div>
                <p className="text-gray-700 mb-2">
                  We ship to the lower 48 states only. Orders are processed within 1-2 business days.
                </p>
                <p className="text-gray-700">
                  Expedited shipping options available at checkout.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="font-semibold text-gray-900">Response Times</h3>
                </div>
                <p className="text-gray-700 mb-2">
                  Email responses: Within 24 hours during business days
                </p>
                <p className="text-gray-700">
                  For immediate growing advice and product recommendations, use our AI chat system.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Need Immediate Help?</h3>
                <p className="text-gray-700 mb-4">
                  Get instant expert advice on plant nutrition, fertilizer selection, and growing tips 
                  with our AI-powered chat system.
                </p>
                <Button asChild className="w-full">
                  <Link href="https://natureswaysoil.com/chat" target="_blank" rel="noopener noreferrer">
                    Get Expert Advice Now
                  </Link>
                </Button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">How often should I fertilize my plants?</p>
                    <p className="text-gray-700 text-sm">This depends on the plant type and fertilizer. Most liquid fertilizers can be applied every 2-4 weeks during growing season.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Can I use these products on edible plants?</p>
                    <p className="text-gray-700 text-sm">Yes! All our organic fertilizers are safe for vegetables, herbs, and fruit plants.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Do you offer bulk pricing?</p>
                    <p className="text-gray-700 text-sm">Yes, contact us for information about bulk orders and commercial pricing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Growing?</h3>
            <p className="text-gray-700 mb-6">
              Browse our complete collection of premium organic fertilizers and find the perfect 
              nutrition solution for your plants.
            </p>
            <Button asChild size="lg">
              <Link href="/products">Shop All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
