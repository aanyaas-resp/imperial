"use client";

import { useRef } from "react";
import { SiGooglemaps } from "react-icons/si";
import { useGSAP } from "@/lib/gsap";
import { revealWithin } from "@/lib/animations";
import { contact, testimonials } from "@/lib/content";

export default function Accolades() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => revealWithin(scope.current!, ".section-head, .quote-card, .reviews-action"), { scope });

  return (
    <section className="accolades" id="accolades" ref={scope}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Guest Reviews</span>
          <h2 className="section-title">What Guests Say</h2>
          <div className="gold-rule" />
          <p>Experiences shared by families who celebrated with us.</p>
        </div>

        <div className="quote-grid">
          {testimonials.map((item) => (
            <figure className="quote-card" key={item.name}>
              {item.rating && (
                <div className="stars" aria-label={`${item.rating} out of 5 stars`}>
                  {"★".repeat(item.rating)}
                </div>
              )}
              <blockquote>“{item.quote}”</blockquote>
              <figcaption className="quote-author">
                <strong>{item.name}</strong>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reviews-action reveal">
          <a
            className="btn btn-solid reviews-link"
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGooglemaps aria-hidden="true" />
            Read more reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
