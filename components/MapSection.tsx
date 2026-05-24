import { SITE } from "@/lib/data";

export default function MapSection() {
  return (
    <section style={{ padding: 0, position: "relative", zIndex: 1 }}>
      <div
        style={{
          background: "#0f0608",
          padding: "60px 6vw 30px",
          textAlign: "center",
        }}
      >
        <div className="section-label" style={{ color: "var(--gold)" }}>
          Find Us
        </div>
        <h2
          className="section-title"
          style={{ color: "white", marginBottom: "0.4rem" }}
        >
          Visit <em>Our Parlour Studio</em>
        </h2>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.45)",
            fontFamily: "var(--font-sub)",
            fontSize: "1rem",
            marginBottom: "2rem",
          }}
        >
          📍 Glow &amp; Shine Beauty Parlour, Kharhatti Mohal Ward No.1 (Link
          Marg Road), Gopiganj, UP 221303 &nbsp;·&nbsp;
          <a
            href={`https://wa.me/${SITE.phone.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--gold)", textDecoration: "none" }}
          >
            📞 {SITE.phoneDisplay}
          </a>
        </p>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "420px",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.18!2d82.4786!3d25.3517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzA2LjEiTiA4MsKwMjgnNDMuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="420"
          style={{
            border: 0,
            display: "block",
            filter: "grayscale(20%) contrast(1.05) saturate(1.1)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Glow & Shine Beauty Parlour – Gopiganj, Bhadohi UP"
        />
        <div
          style={{
            position: "absolute",
            top: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(26, 10, 16, 0.85)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(201, 168, 76, 0.4)",
            borderRadius: "16px",
            padding: "1rem 1.6rem",
            textAlign: "center",
            zIndex: 10,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1rem",
              color: "white",
              marginBottom: "3px",
            }}
          >
            ✦ Glow &amp; Shine Beauty Parlour
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "rgba(201, 168, 76, 0.85)",
              letterSpacing: "0.1em",
            }}
          >
            Glow &amp; Shine, Kharhatti Mohal Ward No.1 (Link Marg Road),
            Gopiganj, UP 221303
          </div>
        </div>
        <a
          href="https://www.google.com/maps/search/Glow+%26+Shine+Beauty+Parlour+Kharhatti+Mohal+Ward+No+1+Link+Marg+Road+Gopiganj+Uttar+Pradesh+221303"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            bottom: "1.5rem",
            right: "1.5rem",
            zIndex: 10,
            background: "linear-gradient(135deg, var(--gold), #a8782e)",
            color: "#1a0a10",
            fontFamily: "var(--font-body)",
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "11px 22px",
            borderRadius: "99px",
            textDecoration: "none",
            boxShadow: "0 6px 24px rgba(201, 168, 76, 0.45)",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          🗺️ Get Directions
        </a>
      </div>
    </section>
  );
}
