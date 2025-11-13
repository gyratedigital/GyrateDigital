"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

type BackButtonProps = {
  fallbackHref?: string;
};

export default function BackButton({ fallbackHref = "/" }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <Button type="button" variant="outline" onClick={handleBack}>
      <ArrowLeft className="h-4 w-4" />
      Back
    </Button>
  );
}

