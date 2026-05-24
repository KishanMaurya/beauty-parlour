import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header fade-in">
        <div className="section-label">What We Offer</div>
        <h2 className="section-title">
          Premium <em>Beauty Services</em>
        </h2>
        <p className="section-sub">
          From everyday glow to your most special day — we bring out your best
          self with expert care and luxury treatments.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.name} className="service-card fade-in">
            <div className="service-img-wrap">
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  background: service.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem",
                }}
              >
                {service.emoji}
              </div>
              <div className="service-icon-wrap">{service.icon}</div>
            </div>
            <div className="service-body">
              <h3 className="service-name">{service.name}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
