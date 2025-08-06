
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { CartProvider } from '@/components/cart-context'
import { CartSidebar } from '@/components/cart-sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Nature\'s Way Soil - Premium Organic Fertilizers & Soil Amendments',
    template: '%s | Nature\'s Way Soil'
  },
  description: 'Premium organic liquid fertilizers, soil amendments, and plant nutrients made fresh weekly. Professional-grade products for sustainable gardening and commercial growing.',
  keywords: 'organic fertilizer, liquid fertilizer, soil amendments, plant nutrients, hydroponic fertilizer, kelp fertilizer, compost, organic gardening, sustainable agriculture, liquid organic fertilizer, organic plant nutrients, fertilizer for vegetables, fertilizer for houseplants',
  authors: [{ name: 'Nature\'s Way Soil' }],
  creator: 'Nature\'s Way Soil',
  publisher: 'Nature\'s Way Soil',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://natureswaysoil.com',
    title: 'Nature\'s Way Soil - Premium Organic Fertilizers & Soil Amendments',
    description: 'Premium organic liquid fertilizers, soil amendments, and plant nutrients made fresh weekly. Professional-grade products for sustainable gardening.',
    siteName: 'Nature\'s Way Soil',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nature\'s Way Soil - Premium Organic Fertilizers',
    description: 'Premium organic liquid fertilizers and soil amendments for sustainable gardening.',
  },
  alternates: {
    canonical: 'https://natureswaysoil.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
            <CartSidebar />
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
