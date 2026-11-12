"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

const styles = {
  image: { objectPosition: "center 62%", opacity: 1, filter: "saturate(0.95) contrast(1.02)" } satisfies CSSProperties,
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(26, 10, 4, 0.22) 0%, rgba(26, 10, 4, 0.05) 45%, rgba(26, 10, 4, 0.45) 100%)",
  } satisfies CSSProperties,
  title: { textShadow: "0 2px 24px rgba(26, 10, 4, 0.55)" } satisfies CSSProperties,
  copy: { color: "var(--cream)", textShadow: "0 1px 14px rgba(26, 10, 4, 0.6)" } satisfies CSSProperties,
};

export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 1. Intro: logo, then the headline rises word by word, then copy and buttons.
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".hero-logo", { opacity: 0, scale: 0.85, y: 24, duration: 1.1 })
        .from(".hero-eyebrow", { opacity: 0, y: 14, duration: 0.7 }, "-=0.6")
        .from(".hero-title .word", { yPercent: 110, duration: 1, stagger: 0.12 }, "-=0.5")
        .from(".hero-copy, .hero-ctas .btn", { opacity: 0, y: 24, duration: 0.8, stagger: 0.12 }, "-=0.5");

      // 2. Parallax: the background drifts slower than the page as you scroll away.
      gsap.to(".hero-bg", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope }
  );

  return (
    <section className="hero" ref={scope} id="top">
      <div className="hero-bg" aria-hidden="true">
        <Image src="/images/herobg.webp" alt="" fill priority sizes="100vw" style={styles.image} />
        <div style={styles.overlay} />
      </div>

      <div className="hero-content">
        

        <span className="eyebrow hero-eyebrow">Sahibabad, Ghaziabad · Luxury Banquet Venue</span>

        <h1 className="hero-title" style={styles.title}>
          <span className="line">
            <span className="word">Imperial</span>
          </span>
          <span className="line">
            <span className="word">Park</span>
          </span>
        </h1>

        <div className="gold-rule" />

        <p className="hero-copy" style={styles.copy}>
          Step into a destination crafted for weddings, social celebrations, and memorable occasions
          designed to leave a lasting impression.
        </p>

        <div className="hero-ctas">
          <a href="#inquiry" className="btn btn-solid">
            Book Your Date
          </a>
          <a href="https://maps.app.goo.gl/J7vsqX5kXNWHYyUNA" target="_blank" rel="noopener noreferrer" className="btn">
            Get Directions
          </a>
        </div>
      </div>

      
    </section>
  );
}
