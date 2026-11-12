"use client";

import { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
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
          <span className="eyebrow">Google Reviews</span>
          <h2 className="section-title">Words from Our Guests</h2>
          <div className="gold-rule" />
          <p>Real experiences shared by families who celebrated with us.</p>
        </div>

        <div className="quote-grid">
          {testimonials.map((item) => (
            <figure className="quote-card" key={item.name}>
              <figcaption className="review-topline">
                <div className="review-profile">
                  <span className="review-avatar" aria-hidden="true">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div className="quote-author">
                    <strong>{item.name}</strong>
                    <span>Guest review</span>
                  </div>
                </div>
                <FcGoogle className="review-google-icon" aria-hidden="true" />
              </figcaption>
              {item.rating && (
                <div className="stars" role="img" aria-label={`${item.rating} out of 5 stars`}>
                  {"★".repeat(item.rating)}
                </div>
              )}
              <blockquote>“{item.quote}”</blockquote>
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
