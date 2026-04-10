import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, phone, service, message } = body;

  if (!firstName || !lastName || !email || !phone || !service) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const text = [
    `New appointment request from CPS website`,
    ``,
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Message: ${message || "(none)"}`,
  ].join("\n");

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL = "cps@wecanhelpout.com",
  } = process.env;

  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: Number(SMTP_PORT ?? 587) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"CPS Website" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Appointment Request — ${firstName} ${lastName}`,
      text,
    });
  } else {
    // Log in development when SMTP is not configured
    console.log("[contact form]", text);
  }

  return NextResponse.json({ ok: true });
}
