
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { ContactFormData } from '@/lib/types'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    
    // Validate required fields
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Save contact form submission to database
    const contact = await prisma.contact.create({
      data: {
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        subject: body.subject?.trim() || null,
        message: body.message.trim(),
        formType: body.formType || 'general',
        status: 'new'
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been received. We\'ll get back to you within 24 hours!',
        id: contact.id
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)
    
    return NextResponse.json(
      { error: 'Unable to process your request. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle GET requests (optional - for form testing)
export async function GET() {
  return NextResponse.json({
    message: 'Contact API endpoint is working',
    methods: ['POST']
  })
}
