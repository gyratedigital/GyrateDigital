"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Silently ignore clipboard errors
    }
  };

  return (
    <div className="relative">
      <Button variant="outline" size="sm" onClick={handleCopy}>
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>
      {copied && (
        <span className="absolute -top-8 right-0 text-xs bg-black text-white px-2 py-1 rounded">
          Copied!
        </span>
      )}
    </div>
  );
}
