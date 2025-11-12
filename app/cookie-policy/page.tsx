"use client";

import { useState } from "react";
import NavigationMenuDemo from "../components/Header";
import FooterSection from "../components/FooterSection";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, BarChart, Target, Shield, Info } from "lucide-react";

export default function CookiePolicyPage() {
  const [showConsent, setShowConsent] = useState(true);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  const handleAcceptAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    });
    setShowConsent(false);
  };

  const handleSavePreferences = () => {
    // Save preferences to localStorage or backend
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setShowConsent(false);
  };

  const cookieTypes = [
    {
      icon: Shield,
      title: "Strictly Necessary Cookies",
      enabled: true,
      locked: true,
      description: "These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
      examples: "Session cookies, security cookies, load balancing cookies",
      duration: "Session or up to 1 year"
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      enabled: cookiePreferences.functional,
      locked: false,
      description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.",
      examples: "Language preferences, region selection, user interface customization",
      duration: "Up to 2 years"
    },
    {
      icon: BarChart,
      title: "Analytics Cookies",
      enabled: cookiePreferences.analytics,
      locked: false,
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.",
      examples: "Google Analytics, page views, bounce rate, traffic sources",
      duration: "Up to 2 years"
    },
    {
      icon: Target,
      title: "Marketing Cookies",
      enabled: cookiePreferences.marketing,
      locked: false,
      description: "These cookies are used to track visitors across websites. They are used to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.",
      examples: "Ad targeting, conversion tracking, retargeting campaigns",
      duration: "Up to 1 year"
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
              backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/10 z-[-1]" />

          <div className="max-w-4xl mx-auto text-center relative z-1">
            <div className="flex items-center justify-center mb-4">
              <Cookie className="w-12 h-12 text-primary" />
            </div>
            <p className="text-foreground text-xs mb-4 uppercase tracking-wider">Legal</p>
            <h1 className="outfit-text text-foreground text-4xl md:text-5xl font-semibold mb-6">
              Cookie Policy
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Learn about how we use cookies and similar technologies to provide, protect, and improve our services.
            </p>
            <p className="text-foreground/60 text-sm mt-4">
              Last Updated: October 21, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Cookie Consent Banner */}
      {showConsent && (
        <div className="sticky top-20 z-40 mx-4 mb-8">
          <div className="container mx-auto sm:px-4">
            <div className="bg-primary/10 rounded-xl p-6 shadow-xl border border-border/60  backdrop-blur-sm">
              <div className="flex sm:flex-row flex-col items-start gap-4 mb-4">
                <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold mb-2">Cookie Preferences</h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Please choose your cookie preferences below.
                  </p>
                  
                  {/* Cookie Toggles */}
                  <div className="space-y-3 mb-4">
                    {[
                      { key: 'necessary', label: 'Necessary', locked: true },
                      { key: 'functional', label: 'Functional', locked: false },
                      { key: 'analytics', label: 'Analytics', locked: false },
                      { key: 'marketing', label: 'Marketing', locked: false }
                    ].map((cookie) => (
                      <div key={cookie.key} className="flex items-center justify-between">
                        <label className="text-foreground text-sm font-medium">
                          {cookie.label} Cookies
                        </label>
                        <button
                          onClick={() => {
                            if (!cookie.locked) {
                              setCookiePreferences(prev => ({
                                ...prev,
                                [cookie.key]: !prev[cookie.key as keyof typeof prev]
                              }));
                            }
                          }}
                          disabled={cookie.locked}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            cookiePreferences[cookie.key as keyof typeof cookiePreferences]
                              ? 'bg-primary'
                              : 'bg-foreground/20'
                          } ${cookie.locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              cookiePreferences[cookie.key as keyof typeof cookiePreferences]
                                ? 'translate-x-6'
                                : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button 
                  size="sm"
                  onClick={handleAcceptAll}
                >
                  Accept All Cookies
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={handleSavePreferences}
                >
                  Save My Preferences
                </Button>
                <Button 
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowConsent(false)}
                >
                  Reject Non-Essential
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border/60  mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to the website owners.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. These technologies help us analyze trends, administer the website, track users&apos; movements around the site, and gather demographic information about our user base.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Types of Cookies We Use</h2>
            <div className="space-y-6">
              {cookieTypes.map((cookie, index) => {
                const Icon = cookie.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-xl p-6 border border-border/60  hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex sm:flex-row flex-col items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-bold text-foreground">{cookie.title}</h3>
                          {cookie.locked ? (
                            <span className="text-xs bg-foreground/10 text-foreground px-2 py-1 rounded">
                              Always Active
                            </span>
                          ) : (
                            <span className={`text-xs px-2 py-1 rounded ${
                              cookie.enabled 
                                ? 'bg-primary/10 text-primary' 
                                : 'bg-foreground/10 text-foreground/60'
                            }`}>
                              {cookie.enabled ? 'Enabled' : 'Disabled'}
                            </span>
                          )}
                        </div>
                        <p className="text-foreground/70 leading-relaxed mb-3">
                          {cookie.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="text-foreground/60 font-medium mb-1">Examples:</p>
                            <p className="text-foreground/70">{cookie.examples}</p>
                          </div>
                          <div>
                            <p className="text-foreground/60 font-medium mb-1">Duration:</p>
                            <p className="text-foreground/70">{cookie.duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border/60  mb-6">
            <div className="flex sm:flex-row flex-col items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground mb-4">Managing Your Cookie Preferences</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  You can manage your cookie preferences at any time by:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                  <li>Using the cookie preference tool above</li>
                  <li>Adjusting your browser settings to block or delete cookies</li>
                  <li>Using browser extensions that manage cookies</li>
                  <li>Opting out of third-party cookies through industry opt-out pages</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed">
                  Please note that blocking certain cookies may impact your experience on our website and limit the functionality available to you.
                </p>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border/60  mb-6">
            <div className="flex sm:flex-row flex-col items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground mb-4">Third-Party Cookies</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics and deliver advertisements. These include:
                </p>
                <ul className="list-disc list-inside text-foreground/70 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and user behavior tracking</li>
                  <li><strong>Facebook Pixel:</strong> For advertising and conversion tracking</li>
                  <li><strong>LinkedIn Insight Tag:</strong> For professional audience analytics</li>
                  <li><strong>Social Media Widgets:</strong> For social sharing functionality</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Cookies?</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="space-y-2 text-foreground/70">
              <p><strong>Email:</strong> info@gyratedigital.com</p>
              <p><strong>Phone:</strong> +92 332 4543168</p>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

