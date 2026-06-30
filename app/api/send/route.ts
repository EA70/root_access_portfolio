import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "clementanguandia5@gmail.com",
      subject: `Message de : ${name}`,
      text: `De: ${name} (${email})\n\nMessage: ${message}`,
      html: `
<div style="max-width:600px;margin:auto;font-family:Arial,Helvetica,sans-serif;background:#ffffff;border:1px solid #e5e7eb;border-radius:1px;overflow:hidden;">

    <div style="background:#16a34a;padding:20px;text-align:center;">
        <h2 style="margin:0;color:#ffffff;"> Nouveau message reçu</h2>
        <p style="margin:8px 0 0;color:#dcfce7;font-size:14px;">
            Un visiteur a envoyé un message depuis votre site.
        </p>
    </div>

    <div style="padding:25px;">

        <p style="margin:0 0 15px;">
            <strong style="color:#16a34a;">Nom</strong><br>
            <span style="color:#111827;">${name}</span>
        </p>

        <p style="margin:0 0 15px;">
            <strong style="color:#16a34a;">Email</strong><br>
            <span style="color:#111827;">${email}</span>
        </p>

        <p style="margin:0;">
            <strong style="color:#16a34a;">Message</strong>
        </p>

        <div style="margin-top:8px;padding:15px;background:#f9fafb;solid #16a34a;border-radius:1px;color:#111827;line-height:1.6;">
            ${message}
        </div>

    </div>

    <div style="background:#111827;padding:15px;text-align:center;color:#d1d5db;font-size:12px;">
        Cet e-mail a été envoyé automatiquement depuis le formulaire de contact de votre portfolio.
    </div>

</div>
`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
