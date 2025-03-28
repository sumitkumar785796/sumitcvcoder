import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 });
        }

        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_MAIL,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: process.env.SMTP_MAIL, // Your email where you want to receive messages
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <img src="https://res.cloudinary.com/dcqhaedeb/image/upload/v1743155750/1743155748394_android-chrome-192x192.png.png" alt="icon" width={100} height={100}/>
                <h3>New Message from ${name}</h3>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong>${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Email sending failed:", error.message);
        return NextResponse.json({ success: false, message: "Failed to send message." }, { status: 500 });
    }
}
