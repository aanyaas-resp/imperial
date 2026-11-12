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
          <h2 className="reveal">
            Destination for Every Celebration
          </h2>
          <span className="about-rule reveal" aria-hidden="true" />
          <blockquote className="about-quote reveal">
            A grand setting, made personal.
          </blockquote>
          <p className="about-description reveal">
            In Sahibabad, Ghaziabad, Hotel Imperial Park brings together graceful architecture, crystal-lit
            spaces and warm, attentive hospitality.
          </p>
          <p className="about-description reveal">
            From a spectacular wedding reception to an intimate family gathering, our distinctive banquet
            halls make every occasion feel beautifully your own.
          </p>
        </div>

        <div className="about-media reveal">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />
          <div className="frame">
            <Image
              src="/images/about-lounge.webp"
              alt="Imperial Park lounge with crystal chandeliers and plush seating"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
