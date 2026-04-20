"use client";

import { useEffect } from "react";
import { useClaimStore } from "@/store/useClaimStore";
import { ClaimHeader } from "./ClaimHeader";
import { Timeline } from "./Timeline";
import { Loader2 } from "lucide-react";

export interface ClaimDashboardProps {
  initialData: unknown;
}

export function ClaimDashboard({ initialData }: ClaimDashboardProps) {
  const { initializeClaim, isInitialized } = useClaimStore();

  useEffect(() => {
    initializeClaim(initialData);
  }, [initialData, initializeClaim]);

  if (!isInitialized) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <ClaimHeader />
      <Timeline />
    </div>
  );
}
