// app/page.tsx
import React from "react"
import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Benefits from "@/components/benefits"
import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta"
import Footer from "@/components/footer"

export const metadata = {
  title: "Nature’s Way Soil | Organic Soil & Plant Nutrition",
  description:
    "Organic soil amendments and plant nutrition. Shop liquid kelp, humic acid, biochar and more. Fast shipping, expert advice.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <section className="container mx-auto px-4 py-12">
        <FeaturedProducts />
      </section>

      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <Benefits />
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <Testimonials />
      </section>

      <section className="bg-emerald-600">
        <div className="container mx-auto px-4 py-12">
          <Cta />
        </div>
      </section>

      <Footer />
    </main>
  )
}
