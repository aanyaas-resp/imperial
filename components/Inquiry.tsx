"use client";

import { FormEvent, useRef } from "react";
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useGSAP } from "@/lib/gsap";
import { revealWithin } from "@/lib/animations";
import { contact, createWhatsAppLink } from "@/lib/content";

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
      `Celebration: ${formData.get("occasion")}`,
      `Preferred date: ${formData.get("date")}`,
      `Estimated guests: ${formData.get("guests")}`,
      `Preferred space: ${formData.get("hall") || "Not specified"}`,
      `Special requests: ${formData.get("notes") || "None"}`,
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
          <p className="form-note">Submit your details and continue in WhatsApp to send your inquiry.</p>

          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Full Name *</label>
              <input id="name" name="name" type="text" placeholder="Your full name" required />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone Number *</label>
              <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required />
            </div>

            <div className="field">
              <label htmlFor="occasion">Celebration Type *</label>
              <select id="occasion" name="occasion" defaultValue="" required>
                <option value="" disabled>
                  Select occasion
                </option>
                <option value="Wedding">Wedding &amp; Reception</option>
                <option value="Sangeet">Sangeet / Mehendi</option>
                <option value="Engagement">Ring Ceremony / Sagai</option>
                <option value="Corporate">Corporate Gala</option>
                <option value="Milestone">Milestone Celebration</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="date">Preferred Date *</label>
              <input id="date" name="date" type="date" required />
            </div>

            <div className="field">
              <label htmlFor="guests">Estimated Guests *</label>
              <select id="guests" name="guests" defaultValue="" required>
                <option value="" disabled>
                  Select count
                </option>
                <option value="100-300">100 – 300</option>
                <option value="300-600">300 – 600</option>
                <option value="600-1000">600 – 1,000</option>
                <option value="1000+">1,000+</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="hall">Preferred Space</label>
              <select id="hall" name="hall" defaultValue="Darbar">
                <option value="Darbar">Darbar Ballroom (500–1,200)</option>
                <option value="Monarch">Monarch (100–350)</option>
                <option value="Lounge">Grand Lounge (200–500)</option>
                <option value="Multiple">Multiple Spaces / Entire Estate</option>
              </select>
            </div>

            <div className="field full">
              <label htmlFor="notes">Special Requests</label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Catering, themes or special ceremony timings"
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
