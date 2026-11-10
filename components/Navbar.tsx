"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#halls", label: "Halls" },
  { href: "#gallery", label: "Gallery" },
  { href: "#accolades", label: "Accolades" },
  { href: "#inquiry", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Make the glass navbar more solid once the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(`#${visibleSection.target.id}`);
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="liquid-glass navbar-inner">
        <a href="#top" className="brand" aria-label="Hotel Imperial Park home">
          <Image src="/images/logo.webp" alt="Hotel Imperial Park" width={48} height={48} priority />
        </a>

        <nav
          id="primary-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href ? "is-active" : ""}
              aria-current={activeSection === link.href ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#inquiry" className="btn btn-solid btn-sm">
            Reserve Date
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
