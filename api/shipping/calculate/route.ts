

import { NextRequest, NextResponse } from 'next/server'
import { createUPSService, getUPSConfig } from '@/lib/ups-shipping'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { destination, items } = body

    // Validate required fields
    if (!destination || !items || items.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields: destination and items' },
        { status: 400 }
      )
    }

    // Check if UPS is configured
    const upsConfig = getUPSConfig()
    if (!upsConfig.clientId || !upsConfig.clientSecret) {
      // Return free shipping if UPS not configured
      return NextResponse.json({
        rates: [{
          service: 'Standard Shipping',
          cost: 0.00,
          deliveryTime: '3-7 Business Days'
        }],
        freeShipping: true
      })
    }

    const upsService = createUPSService(upsConfig)

    // Default origin address (you can make this configurable)
    const origin = {
      name: 'Nature\'s Way Soil',
      addressLine1: '123 Farm Road', // Replace with actual address
      city: 'Anytown',
      stateProvinceCode: 'CA',
      postalCode: '90210',
      countryCode: 'US'
    }

    // Convert items to packages (simple weight-based calculation)
    const packages = [{
      weight: items.reduce((total: number, item: any) => {
        // Estimate weight based on product size
        const estimatedWeight = item.size?.includes('gallon') ? 8.5 : 
                               item.size?.includes('quart') ? 2.2 : 
                               item.size?.includes('32 fl oz') ? 2.2 : 1.0
        return total + (estimatedWeight * (item.quantity || 1))
      }, 0),
      length: 12,
      width: 12,
      height: 8
    }]

    const rates = await upsService.calculateShippingRates(origin, destination, packages)

    // Since we offer free shipping, return $0 cost
    const freeRates = rates.map(rate => ({
      ...rate,
      cost: 0.00,
      originalCost: rate.cost
    }))

    return NextResponse.json({
      rates: freeRates.length > 0 ? freeRates : [{
        service: 'Standard Shipping',
        cost: 0.00,
        deliveryTime: '3-7 Business Days'
      }],
      freeShipping: true
    })

  } catch (error) {
    console.error('Shipping calculation error:', error)
    
    // Return default free shipping on error
    return NextResponse.json({
      rates: [{
        service: 'Standard Shipping',
        cost: 0.00,
        deliveryTime: '3-7 Business Days'
      }],
      freeShipping: true,
      error: 'Unable to calculate precise shipping rates'
    })
  }
}

