

import { NextRequest, NextResponse } from 'next/server'
import { createUPSService, getUPSConfig } from '@/lib/ups-shipping'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderId, destination, items, serviceCode = '03' } = body

    // Validate required fields
    if (!orderId || !destination || !items) {
      return NextResponse.json(
        { error: 'Missing required fields: orderId, destination, and items' },
        { status: 400 }
      )
    }

    // Check if UPS is configured
    const upsConfig = getUPSConfig()
    if (!upsConfig.clientId || !upsConfig.clientSecret) {
      return NextResponse.json(
        { error: 'UPS shipping not configured' },
        { status: 500 }
      )
    }

    const upsService = createUPSService(upsConfig)

    // Default origin address (make this configurable)
    const origin = {
      name: 'Nature\'s Way Soil',
      addressLine1: '123 Farm Road', // Replace with actual address
      city: 'Anytown',
      stateProvinceCode: 'CA',
      postalCode: '90210',
      countryCode: 'US'
    }

    // Convert items to packages
    const packages = [{
      weight: items.reduce((total: number, item: any) => {
        const estimatedWeight = item.size?.includes('gallon') ? 8.5 : 
                               item.size?.includes('quart') ? 2.2 : 
                               item.size?.includes('32 fl oz') ? 2.2 : 1.0
        return total + (estimatedWeight * (item.quantity || 1))
      }, 0),
      length: 12,
      width: 12,
      height: 8
    }]

    const shipment = await upsService.createShipment(origin, destination, packages, serviceCode)

    if (shipment.ShipmentResponse) {
      const response = shipment.ShipmentResponse
      return NextResponse.json({
        success: true,
        trackingNumber: response.ShipmentResults.PackageResults.TrackingNumber,
        labelUrl: response.ShipmentResults.PackageResults.ShippingLabel.GraphicImage,
        shipmentId: response.ShipmentResults.ShipmentIdentificationNumber,
        cost: 0.00, // Free shipping
        service: serviceCode
      })
    } else {
      throw new Error('Failed to create shipment')
    }

  } catch (error) {
    console.error('Create shipment error:', error)
    return NextResponse.json(
      { error: 'Failed to create shipment', details: error },
      { status: 500 }
    )
  }
}

