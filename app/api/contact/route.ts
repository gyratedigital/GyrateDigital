
import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';
import { generateContactAdminEmail, generateContactUserEmail } from '@/lib/email-templates';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message, services } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 1. Send email to Admin
        // Using default from env or fallback
        const adminEmail = `${process.env.SMTP_USER || 'info@gyratedigital.com'}, daniyalamjadali@gmail.com`;

        await sendMail(
            adminEmail,
            `New Contact Form Submission: ${subject || 'General Inquiry'}`,
            generateContactAdminEmail({ name, email, phone, subject, message, services })
        );

        // 2. Send email to User (Acknowledgement)
        await sendMail(
            email,
            'Thank you for contacting Gyrate Digital',
            generateContactUserEmail(name)
        );

        return NextResponse.json({ success: true, message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ error: 'Failed to send email', details: error }, { status: 500 });
    }
}
