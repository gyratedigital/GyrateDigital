"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import NavigationMenuDemo from "../components/Header";
import GreenBanner from "../components/contact/GreenBanner";
import FooterSection from "../components/FooterSection";
import JsonLd from "../components/JsonLd";
import { contactPageSchema } from "../data/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Phone, MapPin, ArrowUpRight, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      alert("Form submitted successfully!");
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <div className="w-full">
      <JsonLd data={contactPageSchema} />
      <NavigationMenuDemo />

      {/* Header Section */}
      <div className="relative container mx-auto px-4 pt-[100px] pb-16">
        <div className="relative z-10 text-center rounded-xl overflow-hidden border border-foreground/10 py-12 px-4">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/contact-banner.avif')] bg-cover bg-center bg-no-repeat opacity-10" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-background/10 z-[-1]" />

          <div className="max-w-4xl mx-auto text-center relative z-1">
            <div className="flex items-center justify-center mb-4">
              <MessageSquare className="w-12 h-12 text-primary" />
            </div>
            <p className="text-foreground text-xs mb-4 uppercase tracking-wider">Get In Touch</p>
            <h1 className="outfit-text text-foreground text-4xl md:text-5xl font-semibold mb-6">
              Contact Us
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <GreenBanner />

      <div className="container mx-auto px-4 pt-[80px] pb-[80px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:max-w-[90%] mx-auto">
          {/* Left Side - Contact Details */}
          <div className="lg:w-1/2 w-full">
            <div className="mb-8">
              <p className="text-foreground text-xs mb-5 uppercase tracking-wider">Get In Touch</p>
              <h1 className="outfit-text text-foreground text-4xl font-semibold mb-6">
                Let&apos;s Create Something Amazing Together
              </h1>
              <p className="text-foreground/80 text-md font-normal leading-relaxed">
                Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6 mt-12">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground text-lg font-semibold mb-1">Email Us</h3>
                  <p className="text-foreground/70">info@gyratedigital.com</p>
                  <p className="text-foreground/70">support@gyratedigital.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground text-lg font-semibold mb-1">Call Us</h3>
                  <p className="text-foreground/70">+92 332 4543168</p>
                  <p className="text-foreground/70">Mon - Fri 11am - 8pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground text-lg font-semibold mb-1">Visit Us</h3>
                  <p className="text-foreground/70">687 Chester Rd, Old Trafford</p>
                  <p className="text-foreground/70">Stretford, Manchester M32 0QW, UK</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/10">
              <h3 className="text-foreground text-lg font-semibold mb-2">Business Hours</h3>
              <div className="space-y-1 text-sm text-foreground/70">
                <p>Monday - Friday: 11:00 AM - 8:00 PM</p>
                <p>Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2 w-full sticky top-[100px] h-max">
            <div className="bg-card rounded-xl p-8 shadow-[0_10px_50px_rgba(0,0,0,0.05)]">
              <h2 className="text-foreground text-2xl font-semibold mb-6">Send Us a Message</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help you?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full pt-8 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-[90%] mx-auto">
            <div className="text-center mb-8">
              <p className="text-foreground text-xs mb-3 uppercase tracking-wider">Find Us</p>
              <h2 className="outfit-text text-foreground text-3xl font-semibold mb-4">
                Our Location
              </h2>
              <p className="text-foreground/70">Visit us at our office</p>
            </div>

            <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg border border-border">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.8556789!2d-2.3013456!3d53.4547890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae7a4e8a9b0b%3A0x1234567890abcdef!2s687%20Chester%20Rd%2C%20Old%20Trafford%2C%20Stretford%2C%20Manchester%20M32%200QW%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>

              {/* Address Overlay Card */}
              <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-border/60  max-w-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground text-lg font-semibold mb-2">Our Office</h3>
                    <p className="text-foreground/80 text-sm font-medium">687 Chester Rd, Old Trafford</p>
                    <p className="text-foreground/70 text-sm">Stretford, Manchester M32 0QW</p>
                    <p className="text-foreground/70 text-sm">United Kingdom</p>
                    <a
                      href="https://www.google.com/maps/dir//687+Chester+Rd,+Old+Trafford,+Stretford,+Manchester+M32+0QW,+UK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-primary text-sm font-medium hover:underline"
                    >
                      Get Directions
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

