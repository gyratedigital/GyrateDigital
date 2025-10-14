"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import NavigationMenuDemo from "../components/Header";
import PortfolioBanner from "../components/portfolio/Banner";
import GreenBanner from "../components/portfolio/GreenBanner";
import FooterSection from "../components/FooterSection";
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
import { Mail, Phone, MapPin } from "lucide-react";

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
      <NavigationMenuDemo />
      <PortfolioBanner />
      <GreenBanner />
      
      <div className="container mx-auto px-4 pt-[80px] pb-[80px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-[90%] mx-auto">
          {/* Left Side - Contact Details */}
          <div className="lg:w-1/2 w-full">
            <div className="mb-8">
              <p className="text-foreground text-xs mb-5 uppercase tracking-wider">Get In Touch</p>
              <h1 className="outfit-text text-foreground text-4xl font-semibold mb-6">
                Let's Create Something Amazing Together
              </h1>
              <p className="text-foreground/80 text-md font-normal leading-relaxed">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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
                  <p className="text-foreground/70">+1 (555) 123-4567</p>
                  <p className="text-foreground/70">Mon-Fri 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground text-lg font-semibold mb-1">Visit Us</h3>
                  <p className="text-foreground/70">33 Copgrove Rd</p>
                  <p className="text-foreground/70">Roundhay, Leeds LS8 2SP, UK</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-lg bg-primary/5 border border-primary/10">
              <h3 className="text-foreground text-lg font-semibold mb-2">Business Hours</h3>
              <div className="space-y-1 text-sm text-foreground/70">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-card rounded-lg p-8 border border-border shadow-sm">
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
      <div className="w-full bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-[90%] mx-auto">
            <div className="text-center mb-8">
              <p className="text-foreground text-xs mb-3 uppercase tracking-wider">Find Us</p>
              <h2 className="outfit-text text-foreground text-3xl font-semibold mb-4">
                Our Location
              </h2>
              <p className="text-foreground/70">Visit us at our office</p>
            </div>

            <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg border border-border">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.8756789!2d-1.5123456!3d53.8267890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c1b9e0b9b0b%3A0x1234567890abcdef!2s33%20Copgrove%20Rd%2C%20Roundhay%2C%20Leeds%20LS8%202SP%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
              
              {/* Address Overlay Card */}
              <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-border max-w-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground text-lg font-semibold mb-2">Our Office</h3>
                    <p className="text-foreground/80 text-sm font-medium">33 Copgrove Rd</p>
                    <p className="text-foreground/70 text-sm">Roundhay, Leeds LS8 2SP</p>
                    <p className="text-foreground/70 text-sm">United Kingdom</p>
                    <a
                      href="https://www.google.com/maps/dir//33+Copgrove+Rd,+Roundhay,+Leeds+LS8+2SP,+UK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-primary text-sm font-medium hover:underline"
                    >
                      Get Directions →
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

