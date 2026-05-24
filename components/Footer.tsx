import { SITE, INSTAGRAM_URL } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            Glow <span>&</span> Shine Beauty Parlour
          </a>
          <p>
            Where Beauty Meets Perfection &amp; Skills Become Careers.
            Gopiganj&apos;s most trusted beauty parlour, makeup studio &amp;
            beauty academy.
          </p>
          <div className="social-links">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Instagram"
            >
              &#9825;
            </a>
            <a href="#" className="social-btn" aria-label="Facebook">
              f
            </a>
            <a href="#" className="social-btn" aria-label="YouTube">
              ▶
            </a>
            <a
              href={`https://wa.me/${SITE.phone.replace("+", "")}`}
              className="social-btn"
              aria-label="WhatsApp"
            >
              ✉
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href="#services">Bridal Makeup</a>
            </li>
            <li>
              <a href="#services">Skincare & Facials</a>
            </li>
            <li>
              <a href="#services">Hair Care & Styling</a>
            </li>
            <li>
              <a href="#services">Nail Art & Spa</a>
            </li>
            <li>
              <a href="#services">Wellness & Massage</a>
            </li>
            <li>
              <a href="#academy">Beauty Academy</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Opening Hours</h4>
          <div className="hours-row">
            <span>Monday – Friday</span>
            <span>10AM – 8PM</span>
          </div>
          <div className="hours-row">
            <span>Saturday</span>
            <span>10AM – 9PM</span>
          </div>
          <div className="hours-row">
            <span>Sunday</span>
            <span>11AM – 6PM</span>
          </div>
          <br />
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`tel:${SITE.phone}`}>📞 Call for Appointment</a>
            </li>
            <li>
              <a href="#">📍 {SITE.address}</a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>✉ {SITE.email}</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p
            style={{
              fontSize: "0.82rem",
              marginBottom: "0.75rem",
              lineHeight: 1.6,
            }}
          >
            Get beauty tips, offers &amp; course announcements in your inbox.
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Your email…" />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © 2025 Glow &amp; Shine Beauty Parlour, Gopiganj. All rights reserved.
        </span>
        <span>
          <a href="#">Privacy Policy</a> · <a href="#">Terms</a> · Made with ♥
          for beauty
        </span>
      </div>
    </footer>
  );
}
