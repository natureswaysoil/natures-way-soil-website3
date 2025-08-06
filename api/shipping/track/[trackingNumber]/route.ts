

import { NextRequest, NextResponse } from 'next/server'
import { createUPSService, getUPSConfig } from '@/lib/ups-shipping'

export async function GET(
  request: NextRequest,
  { params }: { params: { trackingNumber: string } }
) {
  try {
    const { trackingNumber } = params

    if (!trackingNumber) {
      return NextResponse.json(
        { error: 'Tracking number is required' },
        { status: 400 }
      )
    }

    // Check if UPS is configured
    const upsConfig = getUPSConfig()
    if (!upsConfig.clientId || !upsConfig.clientSecret) {
      return NextResponse.json(
        { error: 'UPS tracking not configured' },
        { status: 500 }
      )
    }

    const upsService = createUPSService(upsConfig)
    const trackingInfo = await upsService.trackPackage(trackingNumber)

    return NextResponse.json({
      trackingNumber,
      trackingInfo
    })

  } catch (error) {
    console.error('Package tracking error:', error)
    return NextResponse.json(
      { error: 'Failed to track package', details: error },
      { status: 500 }
    )
  }
}

