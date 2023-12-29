import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEYs as string);
const toEmail = process.env.TO_EMAIL as string;
export async function POST(req: any) {
  const { email, subject, message } = await req.json();
  const emailTemplate = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #333;">From: ${email}</h2>
    <h3 style="color: #555;">Subject: ${subject}</h3>
    <hr style="border: 1px solid #ddd;">
    <p style="color: #333; line-height: 1.6;">${message}</p>
    <p style="color: #777; font-size: 14px;">Thank you!</p>
  </div>
`;
  try {
    const data = await resend.emails.send({
      from: "HixCoder.me <HixPortfolio@resend.dev>",
      to: toEmail,
      subject: subject,
      html: emailTemplate,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
