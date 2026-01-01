"use client";

import React, { useState } from 'react';
import {
    generateContactUserEmail,
    generateContactAdminEmail,
    generateSubscribeUserEmail,
    generateSubscribeAdminEmail
} from '@/lib/email-templates';

// Mock Data
const mockContactData = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    subject: "Project Inquiry",
    message: "Hi, I'm interested in building a new website for my business. Can we schedule a call?",
    services: ["Web Development", "Mobile App Development"]
};

const mockSubscribeEmail = "subscriber@example.com";

const templates = [
    {
        name: "Contact User Email (Thank You)",
        generate: () => generateContactUserEmail(mockContactData.name)
    },
    {
        name: "Contact Admin Email (New Lead)",
        generate: () => generateContactAdminEmail(mockContactData)
    },
    {
        name: "Subscribe User Email (Welcome)",
        generate: () => generateSubscribeUserEmail(mockSubscribeEmail)
    },
    {
        name: "Subscribe Admin Email (New Subscriber)",
        generate: () => generateSubscribeAdminEmail(mockSubscribeEmail)
    }
];

export default function EmailPreviewPage() {
    const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

    return (
        <div className="min-h-screen bg-gray-100 p-8 flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 bg-white p-6 rounded-xl shadow-md space-y-4 h-fit">
                <h2 className="text-xl font-bold mb-4">Email Templates</h2>
                <p className="text-sm text-gray-500 mb-6">Select a template to preview it.</p>
                <div className="space-y-2">
                    {templates.map((t, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedTemplate(t)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${selectedTemplate.name === t.name
                                ? 'bg-primary text-white font-medium'
                                : 'hover:bg-gray-100 text-gray-700'
                                }`}
                        >
                            {t.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Preview Area */}
            <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-[800px]">
                <div className="bg-gray-50 border-b p-4 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-700">{selectedTemplate.name}</h3>
                    <span className="text-xs text-gray-400">Preview Mode</span>
                </div>
                <div className="flex-1 bg-gray-200 p-8 overflow-auto flex justify-center">
                    {/* Using an iframe to isolate styles like a real email client */}
                    <iframe
                        title="Email Preview"
                        srcDoc={selectedTemplate.generate()}
                        className="w-full max-w-[600px] h-full bg-white shadow-lg rounded-xl"
                        style={{ border: 'none' }}
                    />
                </div>
            </div>
        </div>
    );
}
