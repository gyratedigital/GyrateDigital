"use client";

import { useState } from "react";
import NavigationMenuDemo from "../components/Header";
import FooterSection from "../components/FooterSection";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Database, FileText, AlertCircle } from "lucide-react";

export default function PrivacyPolicyPage() {
  const [showConsent, setShowConsent] = useState(true);

  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: `We collect information that you provide directly to us, including:
      
• Personal identification information (name, email address, phone number)
• Professional information (company name, job title)
• Usage data and analytics
• Cookies and similar tracking technologies
• Communication preferences and feedback

We collect this information when you visit our website, fill out forms, subscribe to our newsletter, or interact with our services.`
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: `We use the information we collect for various purposes:

• To provide, maintain, and improve our services
• To communicate with you about our products and services
• To send you marketing communications (with your consent)
• To respond to your inquiries and support requests
• To analyze usage patterns and optimize user experience
• To detect, prevent, and address technical issues
• To comply with legal obligations and protect our rights`
    },
    {
      icon: Lock,
      title: "Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal data:

• Industry-standard encryption (SSL/TLS)
• Secure data storage and transmission
• Regular security audits and updates
• Access controls and authentication
• Employee training on data protection
• Incident response procedures

However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: `You have several rights regarding your personal data:

• Right to access your personal information
• Right to rectify inaccurate data
• Right to erasure ("right to be forgotten")
• Right to restrict processing
• Right to data portability
• Right to object to processing
• Right to withdraw consent at any time

To exercise these rights, please contact us using the information provided below.`
    },
    {
      icon: FileText,
      title: "Data Retention",
      content: `We retain your personal information for as long as necessary to:

• Fulfill the purposes outlined in this privacy policy
• Comply with legal, accounting, or reporting requirements
• Resolve disputes and enforce our agreements
• Maintain business records

When data is no longer needed, we securely delete or anonymize it in accordance with our data retention policies.`
    },
    {
      icon: AlertCircle,
      title: "Third-Party Services",
      content: `We may share your information with trusted third-party service providers:

• Analytics providers (Google Analytics, etc.)
• Email service providers
• Hosting and infrastructure providers
• Payment processors
• Marketing and advertising partners

These third parties are contractually obligated to protect your data and use it only for specified purposes.`
    }
  ];

  return (
    <div className="w-full min-h-screen bg-background">
      <NavigationMenuDemo />

      {/* Hero Section */}
      <div className="relative container mx-auto px-4 pt-[100px] pb-16">
        <div className="relative z-10 text-center rounded-xl overflow-hidden border border-foreground/10 py-12 px-4">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 p-6"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/10 z-[-1]" />

          <div className="max-w-4xl mx-auto text-center relative z-1">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <p className="text-foreground text-xs mb-4 uppercase tracking-wider">Legal</p>
            <h1 className="outfit-text text-foreground text-4xl md:text-5xl font-semibold mb-6">
              Privacy Policy
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
            </p>
            <p className="text-foreground/60 text-sm mt-4">
              Last Updated: October 21, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Consent Banner */}
      {showConsent && (
        <div className="sticky top-20 z-40 mx-4 mb-8">
          <div className="container mx-auto sm:px-4">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 shadow-lg backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold mb-2">Privacy Notice</h3>
                  <p className="text-foreground/70 text-sm">
                    By continuing to use our website, you acknowledge that you have read and understood this Privacy Policy.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowConsent(false)}
                  >
                    Dismiss
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => setShowConsent(false)}
                  >
                    I Understand
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-card rounded-lg p-6 md:p-8 border border-border mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Welcome to Gyrate Digital's Privacy Policy. This policy describes how Gyrate Digital ("we," "us," or "our") collects, uses, and shares your personal information when you use our website and services.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal information. By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-6 md:p-8 border border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex sm:flex-row flex-col items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-foreground mb-4">{section.title}</h2>
                      <div className="text-foreground/70 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="bg-primary/5 rounded-lg p-6 md:p-8 border border-primary/20 mt-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
            </p>
            <div className="space-y-2 text-foreground/70">
              <p><strong>Email:</strong> info@gyratedigital.com</p>
              <p><strong>Phone:</strong> +92 332 4543168</p>
              <p><strong>Address:</strong> 123 Business Street, Suite 100, City, State 12345</p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="bg-card rounded-lg p-6 md:p-8 border border-border mt-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
            <p className="text-foreground/70 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

