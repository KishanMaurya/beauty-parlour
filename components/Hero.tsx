import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="orb1 hero-orb" />
      <div className="orb2 hero-orb" />
      <div className="orb3 hero-orb" />
      <div
        className="hero-content"
        style={{ paddingLeft: "6vw", paddingTop: "4rem" }}
      >
        <div className="hero-badge">Gopiganj&apos;s Premier Beauty Studio</div>
        <h1 className="hero-h1">
          Glow With
          <br />
          <em>Confidence.</em>
        </h1>
        <p className="hero-sub">
          Where beauty meets perfection &amp; skills become careers. Expert
          makeup, advanced skincare, bridal transformations, and certified
          beauty education — all under one roof.
        </p>
        <div className="hero-ctas">
          <a href="#booking" className="btn-primary">
            ✦ Book Appointment
          </a>
          <a href="#services" className="btn-outline">
            Explore Services →
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img-frame">
          <Image
            src="/hero.jpg"
            alt="Beautiful Indian bride with traditional jewellery and bridal makeup"
            width={600}
            height={800}
            priority
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="hero-img-badge">
            <strong>500+</strong>
            <small>Brides Beautified</small>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

