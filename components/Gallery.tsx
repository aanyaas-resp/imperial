"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@/lib/gsap";
import { revealWithin } from "@/lib/animations";
import { galleryImages } from "@/lib/content";

export default function Gallery() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => revealWithin(scope.current!, ".gallery-item, .section-head"), { scope });

  return (
    <section className="gallery" id="gallery" ref={scope}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Visual Splendour</span>
          <h2 className="section-title">Moments Inside Imperial Park</h2>
          <div className="gold-rule" />
        </div>

        <div className="gallery-grid">
          {galleryImages.map((photo) => (
            <figure className="gallery-item" key={photo.src}>
              <Image src={photo.src} alt={photo.caption} fill sizes="(max-width: 900px) 50vw, 40vw" />
              <figcaption className="gallery-caption">
                <span>{photo.caption}</span>
                <span>{photo.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
