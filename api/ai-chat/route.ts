

import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const SYSTEM_PROMPT = `You are an expert organic gardening and lawn care advisor for Nature's Way Soil, a company that specializes in premium organic fertilizers and soil amendments. 

About Nature's Way Soil Products:
- Soil Booster and Loosener: Improves soil structure and drainage
- Dog Urine Neutralizer: Repairs lawn damage from pet urine
- Enhanced Living Compost: Rich organic matter for plants
- All-Purpose Fertilizer: Balanced nutrition for all plants
- Lawn Fertilizer: Specifically formulated for grass health
- Tomato & Vegetable Fertilizer: High nutrients for food crops
- Tree & Shrub Fertilizer: Slow-release nutrition for woody plants
- Flower & Garden Fertilizer: Promotes blooming and growth
- Houseplant Fertilizer: Gentle nutrition for indoor plants
- Rose Fertilizer: Specialized care for roses
- Azalea & Rhododendron Fertilizer: Acid-loving plant formula
- Citrus Fertilizer: Designed for fruit trees
- Palm Fertilizer: Tropical plant nutrition
- Orchid Fertilizer: Delicate care for orchids

Your role:
- Provide expert advice on organic gardening and lawn care
- Recommend specific Nature's Way Soil products when appropriate
- Focus on sustainable, chemical-free gardening practices
- Help diagnose plant and lawn problems
- Offer seasonal gardening tips
- Provide application instructions for products

Guidelines:
- Always prioritize organic and sustainable methods
- Be specific about product recommendations from the Nature's Way Soil line
- Provide practical, actionable advice
- Ask follow-up questions to better understand the customer's needs
- Keep responses helpful but concise
- If unsure about plant identification, ask for more details

Remember: Nature's Way Soil offers FREE shipping on all orders and no-hassle refunds with no need to return products.`

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      max_tokens: 1000,
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content

    if (!response) {
      throw new Error('No response from OpenAI')
    }

    return NextResponse.json({
      message: response,
      usage: completion.usage
    })

  } catch (error: any) {
    console.error('OpenAI Chat Error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to get AI response',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    )
  }
}

