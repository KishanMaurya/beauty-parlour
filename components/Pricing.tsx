import { SITE, pricingPlans } from "@/lib/data";

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-header fade-in">
        <div className="section-label">Transparent Pricing</div>
        <h2 className="section-title">
          Beauty <em>Packages</em>
        </h2>
        <p className="section-sub" style={{ margin: "0 auto" }}>
          Luxury within reach. Choose the package that suits your occasion and
          let us make you shine.
        </p>
      </div>
      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`price-card fade-in${plan.featured ? " featured" : ""}`}
          >
            {"badge" in plan && plan.badge ? (
              <div className="price-badge">{plan.badge}</div>
            ) : null}
            <div className="price-tier">{plan.tier}</div>
            <h3 className="price-name">{plan.name}</h3>
            <div className="price-amount">
              <span
                className="price-currency"
                style={plan.featured ? { color: "var(--gold-light)" } : undefined}
              >
                ₹
              </span>
              <span className="price-val">{plan.price}</span>
            </div>
            <p className="price-period">{plan.period}</p>
            <div
              className="price-divider"
              style={
                plan.featured
                  ? { background: "rgba(201, 168, 76, 0.2)" }
                  : undefined
              }
            />
            <ul className="price-features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className="btn-book" type="button">
              <a
                href={`tel:${SITE.phone}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {plan.cta}
              </a>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
