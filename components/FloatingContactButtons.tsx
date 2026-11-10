import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { contact } from "@/lib/content";

export default function FloatingContactButtons() {
  return (
    <nav className="floating-contact" aria-label="Contact Imperial Park">
      <a
        className="floating-contact-button floating-whatsapp"
        href={contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
      <a
        className="floating-contact-button floating-call"
        href={contact.phoneLink}
        aria-label={`Call ${contact.phoneDisplay}`}
        title="Call us"
      >
        <FaPhone aria-hidden="true" />
      </a>
    </nav>
  );
}
