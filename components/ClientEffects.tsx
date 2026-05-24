"use client";

import { useFadeIn, useStatsCounter } from "@/hooks/useSiteEffects";

export default function ClientEffects() {
  useFadeIn();
  useStatsCounter();
  return null;
}
