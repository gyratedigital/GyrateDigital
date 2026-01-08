import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const systemPrompt = `You are a helpful AI assistant for Gyrate Digital, a full-service digital agency. Your role is to assist visitors with information about the company, services, and help them understand how Gyrate Digital can help their business.

About Gyrate Digital:
- Gyrate Digital is a digital agency that helps businesses navigate the digital space with clarity and confidence
- They focus on building long-term partnerships, not one-off projects
- They are practical, responsive, and accountable
- They combine strategy, design, technology, marketing, and AI-enabled tools to help businesses build digital solutions

Services Provided:
1. Generative AI - AI chatbot integration, image/video analysis, workflow automation, recommendation systems, AI-powered web applications
2. Mobile Applications Development - iOS, Android, React Native, cross-platform apps, API integration, UI/UX design, app publishing
3. Web Applications Development - Custom web design, responsive websites, landing pages, WordPress, WooCommerce, Shopify, eCommerce, MERN stack, Next.js, REST/GraphQL APIs, admin dashboards, authentication systems, real-time apps
4. Cloud & DevOps - Hosting & deployment, server setup, CI/CD integration, website/app maintenance, bug fixing
5. UI/UX Design - Inventory & POS systems, CRM/ERP solutions, booking systems, business automation, analytics dashboards, website/app UI/UX, wireframing, design systems
6. Staff Augmentation - Onshoring, offshoring, nearshoring solutions

Portfolio Projects:
1. Lernen Einfach Deutsch - German language learning platform with adaptive lessons, quizzes, and progress tracking for adult learners. Technologies: Next.js, Node.js, Headless CMS. Industry: E-learning/Education.

2. Bank Tracker - Risk and exposure tracking SaaS for banks with dashboards, alerts, and audit-ready reports. Technologies: Next.js, Node.js, PostgreSQL. Industry: Fintech/Financial Services.

3. IonicX - AI-powered interior design tool that makes professional-quality room redesigns accessible through instant, personalized AI-generated designs. Technologies: Next.js, Vercel, Gemini AI, Backblaze. Industry: AI/Architect Design Tool.

4. Aviator Connect - Privacy-first aviation recruitment platform connecting airlines with verified pilots through anonymized profiles and advanced search. Technologies: Next.js, Node.js, PostgreSQL. Industry: Aviation/Recruitment.

5. Vendor Zero - B2B procurement workspace with vendor risk management, workflows, approvals, and centralized vendor records. Technologies: Next.js, Supabase, Workflow Engine. Industry: B2B Procurement.

6. Eyes 4 Nature Safaris - Safari tour operator website with itineraries, conservation storytelling, and lead capture. Technologies: Next.js, Headless CMS. Industry: Travel & Tourism.

7. Pilot Jobs Cloud - Global pilot job board aggregating aviation career opportunities from worldwide sources with airline job posting capabilities. Technologies: Next.js, Node.js, PostgreSQL, Stripe. Industry: Aviation/Job Board.

Calendly Link:
If users want to schedule a meeting or consultation, provide them with this link: https://calendly.com/gyratedigital/30min

Contact Information:
Email: info@gyratedigital.com

United Kingdom Office:
Address: 33 Copgrove Road, Leeds, West Yorkshire LS8 2SP, United Kingdom
Phone: +44 7814 580990

Bahrain Office:
Address: Office 210, Building 1691, Road 432, Salmabad 704, Bahrain
Phone: +973 3467 9176

Social Media Links:
LinkedIn: https://www.linkedin.com/company/gyrate-digital/
Facebook: https://www.facebook.com/GyrateDigital/
Instagram: https://www.instagram.com/gyrate.digital/

Be friendly, professional, and helpful. Always be precise and provide accurate information about Gyrate Digital's services, capabilities, and portfolio projects. If you don't know something specific, acknowledge it and suggest they contact the team directly or schedule a meeting using the Calendly link.`;

export async function POST(request: Request) {
    try {
        const { message, history } = await request.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: 'GEMINI_API_KEY not configured' }, { status: 500 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        
        // Try models in order - gemini-1.5-flash is most stable and commonly available
        // Note: gemini-2.5-flash doesn't exist yet. When it becomes available, update here.
        // Note: gemini-2.0-flash-exp is not available on free tier, so removed from list
        const modelNames = [
            'gemini-2.5-flash',      // Fast and most commonly available (free tier supported)        // More capable alternative (free tier supported)
        ];

        let lastError: Error | null = null;
        
        
            try {
                const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
                
                // Build conversation history
                const chatHistory = history || [];
                
                // Start chat with system context
                const chat = model.startChat({
                    history: [
                        {
                            role: 'user',
                            parts: [{ text: systemPrompt }],
                        },
                        {
                            role: 'model',
                            parts: [{ text: 'I understand. I\'m ready to help visitors learn about Gyrate Digital and their services. How can I assist you today?' }],
                        },
                        ...chatHistory.map((msg: { role: string; content: string }) => ({
                            role: msg.role === 'user' ? 'user' : 'model',
                            parts: [{ text: msg.content }],
                        })),
                    ],
                });

                const result = await chat.sendMessage(message);
                const response = await result.response;
                const text = response.text();

                return NextResponse.json({ message: text });
            } catch (err) {
                lastError = err instanceof Error ? err : new Error(String(err));
                
                // If it's a quota/rate limit error, don't try other models
                if (err instanceof Error && (
                    err.message.includes('429') || 
                    err.message.includes('quota') || 
                    err.message.includes('rate limit')
                )) {
                    throw err;
                }
                
                // Try next model if this one fails
                
            }
        
        
        // If all models failed, throw the last error
        throw lastError || new Error('All model attempts failed');
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: 'Failed to get response from AI', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
