import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  const {
    fullName = "",
    phone = "",
    email = "",
    serviceNeeded = "",
    timeframe = "",
    message = "",
    company = "",
  } = payload;

  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!fullName || !phone || !email || !serviceNeeded || !timeframe) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { message: "Email service is not configured." },
      { status: 500 }
    );
  }

  const subject = `New service request: ${serviceNeeded}`;
  const text = [
    `Name: ${fullName}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service: ${serviceNeeded}`,
    `Timeframe: ${timeframe}`,
    `Message: ${message || "N/A"}`,
  ].join("\n");

  const html = `
    <h2>New Service Request</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Service:</strong> ${serviceNeeded}</p>
    <p><strong>Timeframe:</strong> ${timeframe}</p>
    <p><strong>Message:</strong><br />${message ? message.replace(/\n/g, "<br />") : "N/A"}</p>
  `;

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject,
      text,
      html,
      reply_to: email,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Failed to send request." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
