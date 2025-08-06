

import { Breadcrumbs } from '@/components/breadcrumbs'
import { AIChat } from '@/components/ai-chat'
import { Leaf, MessageCircle, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'AI Gardening Expert - Nature\'s Way Soil',
  description: 'Get personalized organic gardening advice and product recommendations from our AI-powered gardening expert.',
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Expert Advice', href: '/expert-advice' }
]

export default function ExpertAdvicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Gardening Expert</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant, personalized advice on organic gardening and lawn care from our AI expert, 
            trained specifically on Nature's Way Soil products and organic growing methods.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Organic Focus</h3>
            <p className="text-gray-700 text-sm">
              Expert advice on chemical-free, sustainable gardening practices
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Instant Answers</h3>
            <p className="text-gray-700 text-sm">
              Get immediate responses to your gardening questions 24/7
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <Sparkles className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Product Recommendations</h3>
            <p className="text-gray-700 text-sm">
              Personalized Nature's Way Soil product suggestions for your needs
            </p>
          </div>
        </div>

        <AIChat />

        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">What Our AI Expert Can Help With:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <ul className="space-y-2">
              <li>• Plant disease and pest identification</li>
              <li>• Soil preparation and improvement</li>
              <li>• Fertilizer selection and application</li>
              <li>• Seasonal gardening planning</li>
              <li>• Lawn care and maintenance</li>
            </ul>
            <ul className="space-y-2">
              <li>• Organic composting guidance</li>
              <li>• Vegetable garden optimization</li>
              <li>• Flower garden design tips</li>
              <li>• Tree and shrub care</li>
              <li>• Indoor houseplant care</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

