"use client";

import Link from "next/link";
import Icon from "./components/Icon";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-background px-4 sm:px-10 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          {/* Icon */}
          <div className="mb-8 animate-bounce-slow">
            <Icon name="notFound" className="w-full max-w-md mx-auto" />
          </div>

          {/* 404 Text */}
          <h1 className="outfit-text text-foreground text-7xl md:text-9xl font-bold mb-4">
            404
          </h1>

          {/* Title */}
          <h2 className="outfit-text text-foreground text-3xl md:text-4xl font-semibold mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-foreground/70 text-lg mb-8 max-w-md">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/">
              <Button className="gap-2 px-6 py-6 text-base cursor-pointer">
                <Home className="w-5 h-5" />
                Go to Homepage
              </Button>
            </Link>
            <Button
              variant="outline"
              className="gap-2 px-6 py-6 text-base cursor-pointer"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </div>

          {/* Additional Info */}
          {/* <div className="mt-12 p-6 rounded-lg bg-primary/5 border border-primary/10 max-w-md w-full">
            <h3 className="text-foreground text-lg font-semibold mb-2">Need Help?</h3>
            <p className="text-foreground/70 text-sm mb-4">
              If you think this is a mistake, please contact us.
            </p>
            <Link href="/contact">
              <Button variant="link" className="p-0 h-auto text-primary">
                Contact Support →
              </Button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

