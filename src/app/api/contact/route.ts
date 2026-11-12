
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("_replyto", email);

    const response = await fetch(
      "https://formspree.io/f/xoedqyad",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: data.errors?.[0]?.message || "Unable to send message.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out! Your message has been sent successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again.",
      },
      { status: 500 }
    );
  }
}
