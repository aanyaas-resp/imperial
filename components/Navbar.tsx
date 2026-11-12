"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";

const links = [
  { href: "#about", label: "About" },
  { href: "#halls", label: "Halls" },
  { href: "#gallery", label: "Gallery" },
  { href: "#accolades", label: "Reviews" },
  { href: "#inquiry", label: "Contact" },
];

// Same width formula as `.container`, so the navbar lines up with section content.
const styles = {
  navbar: {
    width: "min(calc(100% - 2 * var(--gutter)), var(--container))",
  } satisfies CSSProperties,
  navbarInner: {
    height: 72,
    padding: "0 12px 0 16px",
  } satisfies CSSProperties,
  // Compact (hamburger) mode: used at 1100px and below.
  menuToggle: {
    display: "block",
  } satisfies CSSProperties,
  reserveButton: {
    display: "none",
  } satisfies CSSProperties,
  dropdown: (open: boolean): CSSProperties => ({
    display: open ? "flex" : "none",
    position: "absolute",
    top: "calc(100% + 12px)",
    left: 0,
    right: 0,
    flexDirection: "column",
    gap: 0,
    padding: 10,
    borderRadius: 24,
    background: "rgba(44, 23, 15, 0.85)",
    WebkitBackdropFilter: "blur(22px) saturate(180%)",
    backdropFilter: "blur(22px) saturate(180%)",
    border: "1px solid rgba(245, 235, 221, 0.2)",
    boxShadow: "0 20px 40px rgba(10, 4, 2, 0.5)",
  }),
  dropdownLink: (isLast: boolean): CSSProperties => ({
    padding: "16px 20px",
    fontSize: 13,
    borderBottom: isLast ? "none" : "1px solid rgba(201, 162, 74, 0.1)",
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const compact = useMediaQuery("(max-width: 1100px)");

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

  // Leaving compact mode closes the dropdown.
  useEffect(() => {
    if (!compact) setOpen(false);
  }, [compact]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`} style={styles.navbar}>
      <div className="liquid-glass navbar-inner" style={styles.navbarInner}>
        <a href="#top" className="brand" aria-label="Hotel Imperial Park home">
          <Image src="/images/logo.webp" alt="Hotel Imperial Park" width={48} height={48} priority />
        </a>

        <nav
          id="primary-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label="Primary"
          style={compact ? styles.dropdown(open) : undefined}
        >
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href ? "is-active" : ""}
              aria-current={activeSection === link.href ? "location" : undefined}
              onClick={() => setOpen(false)}
              style={compact ? styles.dropdownLink(index === links.length - 1) : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href="#inquiry"
            className="btn btn-solid btn-sm"
            style={compact ? styles.reserveButton : undefined}
          >
            Reserve Date
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((value) => !value)}
            style={compact ? styles.menuToggle : { display: "none" }}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
