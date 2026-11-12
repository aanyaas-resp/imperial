"use client";

import { FormEvent, useRef } from "react";
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useGSAP } from "@/lib/gsap";
import { revealWithin } from "@/lib/animations";
import { contact, createWhatsAppLink, halls } from "@/lib/content";

export default function Inquiry() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => revealWithin(scope.current!), { scope });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello, I would like to enquire about hosting an event at Hotel Imperial Park.",
      "",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Hall: ${formData.get("hall") || "Not selected"}`,
      `Function: ${formData.get("function") || "Not selected"}`,
      `Event details: ${formData.get("details") || "Not provided"}`,
    ].join("\n");

    window.location.assign(createWhatsAppLink(message));
  }

  return (
    <section className="inquiry" id="inquiry" ref={scope}>
      <div className="container inquiry-grid">
        <div className="inquiry-info">
          <span className="eyebrow reveal">Direct Concierge</span>
          <h2 className="reveal">Reserve Your Occasion</h2>
          <p className="reveal">
            Speak with our banquet team to check date availability, arrange a walkthrough and receive custom
            pricing.
          </p>

          <div className="info-block reveal">
            <FaPhoneAlt className="info-icon" aria-hidden="true" />
            <div className="info-content">
              <span className="info-label">Telephone</span>
              <a className="info-value" href={contact.phoneLink}>
                {contact.phoneDisplay}
              </a>
              <span className="info-note">{contact.hours}</span>
            </div>
          </div>

          <div className="info-block reveal">
            <FaMapMarkerAlt className="info-icon" aria-hidden="true" />
            <div className="info-content">
              <span className="info-label">Estate Location</span>
              <p className="info-text">{contact.address}</p>
              <a className="text-link" href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="info-block reveal">
            <FaInstagram className="info-icon" aria-hidden="true" />
            <div className="info-content">
              <span className="info-label">Instagram</span>
              <a className="info-text" href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
                {contact.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <form className="form-card reveal" onSubmit={handleSubmit}>
          <span className="eyebrow">Online Reservation Desk</span>
          <h3>Plan Your Celebration</h3>
          <p className="form-note">Share your name and number, then choose a hall and function to help us plan.</p>

          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Name *</label>
              <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                autoComplete="tel"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="hall">Preferred Hall</label>
              <select id="hall" name="hall" defaultValue="">
                <option value="">Select a hall</option>
                {halls.map((hall) => (
                  <option key={hall.name} value={hall.name}>
                    {hall.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="function">Function</label>
              <select id="function" name="function" defaultValue="">
                <option value="">Select a function</option>
                <option value="Wedding">Wedding</option>
                <option value="Reception">Reception</option>
                <option value="Engagement / Roka">Engagement / Roka</option>
                <option value="Sangeet">Sangeet</option>
                <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="field full">
              <label htmlFor="details">Event details (optional)</label>
              <textarea
                id="details"
                name="details"
                rows={3}
                placeholder="Event type, date or guest count"
              />
            </div>
          </div>

          <div className="form-submit">
            <button type="submit" className="btn btn-solid btn-block">
              Send Inquiry on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
