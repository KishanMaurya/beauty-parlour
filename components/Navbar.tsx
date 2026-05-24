"use client";

import { useState } from "react";
import { SITE } from "@/lib/data";
import { useNavScroll } from "@/hooks/useSiteEffects";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#academy", label: "Academy" },
  { href: "#testimonials", label: "Reviews" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useNavScroll();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="nav">
        <a href="#" className="nav-logo">
          Glow <span>&</span> Shine Beauty Parlour
          <span className="nav-dot" />
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href={`tel:${SITE.phone}`} className="nav-book">
              Call Now 📞
            </a>
          </li>
        </ul>
        <div
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} id="mobileMenu">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#booking" onClick={closeMenu} className="mobile-menu-book">
          Book Appointment
        </a>
      </div>
    </>
  );
}
