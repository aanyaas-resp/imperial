"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * ScrollTrigger measures the page once. Images that load later can change
 * those measurements, so we refresh once everything has loaded.
 */
export default function ScrollRefresh() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return null;
}
