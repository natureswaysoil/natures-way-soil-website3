// app/api/contact/route.ts
import { NextResponse } from "next/server"

export async function OPTIONS() {
  // If you ever submit from another origin, this helps with CORS preflight.
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields: name, email, message" },
        { status: 400 }
      )
    }

    // TODO: send email via a provider (e.g. Resend) or write to a DB
    // For now, just log it so the request succeeds.
    console.log("Contact submission:", { name, email, message })

    return NextResponse.json({ ok: true, message: "Thanks! We received your message." }, { status: 200 })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json({ ok: false, error: "Unexpected error" }, { status: 500 })
  }
}
