import Image from "next/image";
import { FaArrowUp, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { contact } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-main">
          <div className="footer-about">
            <a className="footer-brand" href="#top" aria-label="Hotel Imperial Park, back to top">
              <Image src="/images/logo.webp" alt="" width={56} height={56} />
              <span>Hotel Imperial Park</span>
            </a>
            <p className="footer-tagline">Celebrating dreams with timeless grandeur.</p>
            <nav className="footer-socials" aria-label="Social media">
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram aria-hidden="true" />
              </a>
              <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp aria-hidden="true" />
              </a>
            </nav>
          </div>

          <nav className="footer-navigation" aria-label="Footer navigation">
            <h2 className="footer-heading">Explore</h2>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#halls">Banquet Halls</a>
              <a href="#gallery">Gallery</a>
              <a href="#accolades">Guest Stories</a>
              <a href="#inquiry">Make an Inquiry</a>
            </div>
          </nav>

          <div className="footer-contact">
            <h2 className="footer-heading">Contact</h2>
            <a className="footer-phone" href={contact.phoneLink}>
              {contact.phoneDisplay}
            </a>
            <p className="footer-hours">{contact.hours}</p>
            <a
              className="footer-location"
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.address}
              <span>Get directions</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p className="footer-copy">© {new Date().getFullYear()} Hotel Imperial Park. All rights reserved.</p>
            <p className="footer-credit">
              Website designed &amp; developed by{" "}
              <a href="https://aniketwebdev.in" target="_blank" rel="noopener noreferrer">
                aniketwebdev.in
              </a>
            </p>
          </div>
          <a className="footer-top" href="#top">
            Back to top <FaArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
