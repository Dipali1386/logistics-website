import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("Form submitted:", body); // log to console

  // You could store this in a database here — for now we just return success
  return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
}
