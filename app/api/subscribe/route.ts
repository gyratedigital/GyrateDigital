
import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';
import { generateSubscribeAdminEmail, generateSubscribeUserEmail } from '@/lib/email-templates';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // 1. Send email to Admin
        const adminEmail = `${process.env.SMTP_USER || 'info@gyratedigital.com'}, daniyalamjadali@gmail.com`;

        await sendMail(
            adminEmail,
            'New Newsletter Subscriber',
            generateSubscribeAdminEmail(email)
        );

        // 2. Send email to User
        await sendMail(
            email,
            'Welcome to Gyrate Digital',
            generateSubscribeUserEmail(email)
        );

        return NextResponse.json({ success: true, message: 'Subscribed successfully' });
    } catch (error) {
        console.error('Subscribe API Error:', error);
        return NextResponse.json({ error: 'Failed to subscribe', details: error }, { status: 500 });
    }
}
