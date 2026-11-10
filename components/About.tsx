"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { revealWithin } from "@/lib/animations";

export default function About() {
  const scope = useRef<HTMLElement>(null);
   
  useGSAP(
    () => {
      // Text blocks fade up as they enter the viewport.
      revealWithin(scope.current!);

      // Photo drifts gently inside its frame while scrolling.
      gsap.set(".about-media img", { scale: 1.15 });
      gsap.to(".about-media img", {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope }
  );

  return (
    <section className="about" id="about" ref={scope}>
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow reveal">About Imperial Park</span>
          <h2 className="reveal">A Destination for Every Celebration</h2>

          <blockquote className="about-quote reveal">
            From grand wedding receptions to intimate family gatherings, Hotel Imperial Park brings together
            palatial scale, European grandeur and authentic hospitality.
          </blockquote>

          <p className="reveal">
            Positioned in the celebration corridor of Sahibabad, Ghaziabad, Imperial Park offers a sanctuary of
            refined grandeur. Handcrafted moldings, dramatic crystal installations and expansive banqueting halls
            form the ideal backdrop for life&apos;s most cherished moments.
          </p>

          <div className="about-stats reveal">
            <div>
              <h3>Palatial Scale</h3>
              <p>High vaulted ceilings with dramatic crystal installations.</p>
            </div>
            <div>
              <h3>White-Glove Care</h3>
              <p>A dedicated banquet team for every celebration, from the first call to the final farewell.</p>
            </div>
          </div>
        </div>

        <div className="about-media reveal">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />
          <div className="frame">
            <Image
              src="/images/about.webp"
              alt="Imperial Park grand ballroom with crystal chandeliers and a decorated stage"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
