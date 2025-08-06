
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BookOpen, Calendar, Leaf, Lightbulb, Users, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Growing Resources & Expert Guides - Nature\'s Way Soil',
  description: 'Comprehensive growing guides, seasonal calendars, and expert tips for organic gardening success. Learn how to use organic fertilizers effectively.',
  keywords: 'organic gardening tips, fertilizer guide, growing calendar, plant nutrition, organic farming, sustainable gardening, liquid fertilizer application'
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources' }
]

export default function ResourcesPage() {
  const guides = [
    {
      title: "Complete Guide to Liquid Fertilizers",
      description: "Learn the fundamentals of liquid fertilizer application, timing, and selection for optimal plant nutrition.",
      icon: Leaf,
      category: "Fertilizer Basics",
      readTime: "8 min read"
    },
    {
      title: "Seasonal Gardening Calendar",
      description: "Month-by-month guide to fertilizing, planting, and caring for your garden throughout the year.",
      icon: Calendar,
      category: "Seasonal Guide",
      readTime: "12 min read"
    },
    {
      title: "Organic Soil Health & Amendments",
      description: "Understanding soil biology and how organic amendments improve soil structure and plant health.",
      icon: BookOpen,
      category: "Soil Science",
      readTime: "10 min read"
    },
    {
      title: "Troubleshooting Plant Problems",
      description: "Identify and solve common plant nutrition issues with organic fertilizer solutions.",
      icon: Lightbulb,
      category: "Problem Solving",
      readTime: "6 min read"
    },
    {
      title: "Hydroponic Nutrition Guide",
      description: "Complete guide to organic hydroponic growing and nutrient management for soilless systems.",
      icon: Users,
      category: "Hydroponics",
      readTime: "15 min read"
    },
    {
      title: "Container Gardening Success",
      description: "Maximize your container garden's potential with proper fertilization and care techniques.",
      icon: Leaf,
      category: "Container Growing",
      readTime: "7 min read"
    }
  ]

  const quickTips = [
    {
      tip: "Best Time to Fertilize",
      content: "Apply liquid fertilizers in early morning or evening when temperatures are cooler to prevent leaf burn and maximize uptake."
    },
    {
      tip: "Dilution Guidelines",
      content: "Always follow dilution instructions on the label. It's better to fertilize more frequently with a weaker solution than to over-fertilize."
    },
    {
      tip: "Seasonal Adjustments",
      content: "Reduce fertilizer frequency in fall and winter when plants are dormant or growing slowly."
    },
    {
      tip: "Soil Moisture",
      content: "Water plants thoroughly after fertilizer application to help nutrients reach the root zone effectively."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Growing Resources & Expert Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master organic gardening with our comprehensive guides, seasonal calendars, and expert tips. 
            Learn how to maximize your garden's potential with proper fertilization techniques.
          </p>
        </div>

        {/* Quick Tips Section */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Growing Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {quickTips.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{item.tip}</h3>
                <p className="text-gray-700 text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Expert Growing Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-lg p-3 mr-4">
                    <guide.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-green-600 font-medium">{guide.category}</div>
                    <div className="text-xs text-gray-500">{guide.readTime}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <Button variant="outline" className="w-full">
                  Coming Soon
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Calendar Preview */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Seasonal Growing Calendar</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Spring (Mar-May)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Start regular fertilization</li>
                <li>• Apply soil amendments</li>
                <li>• Begin container gardening</li>
                <li>• Prepare garden beds</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Summer (Jun-Aug)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Peak fertilization period</li>
                <li>• Weekly liquid feeding</li>
                <li>• Monitor plant health</li>
                <li>• Harvest vegetables</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Fall (Sep-Nov)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Reduce fertilizer frequency</li>
                <li>• Focus on root development</li>
                <li>• Prepare for winter</li>
                <li>• Plant cover crops</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Winter (Dec-Feb)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Minimal outdoor feeding</li>
                <li>• Maintain houseplants</li>
                <li>• Plan next year's garden</li>
                <li>• Order fresh fertilizers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expert Support CTA */}
        <div className="bg-green-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Growing Advice?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get instant, expert recommendations tailored to your specific plants and growing conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <Link href="https://natureswaysoil.com/chat" target="_blank" rel="noopener noreferrer">
                Chat with Our Experts
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
              <Link href="/products">
                Shop Premium Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
