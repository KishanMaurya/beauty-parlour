import Image from "next/image";
import Link from "next/link";
import { signatureServices } from "@/lib/data";
import styles from "./SignatureServices.module.css";

function ServiceIcon({ type }: { type: (typeof signatureServices)[number]["icon"] }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "scissors":
      return (
        <svg {...props}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...props}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case "hand":
      return (
        <svg {...props}>
          <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
          <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
      );
    case "makeup":
      return (
        <svg {...props}>
          <path d="M12 2v4" />
          <path d="M9 6h6" />
          <rect x="8" y="6" width="8" height="14" rx="2" />
          <path d="M10 14h4" />
        </svg>
      );
  }
}

export default function SignatureServices() {
  return (
    <section className={styles.section} id="signature-services">
      <div className={`${styles.header} fade-in`}>
        <p className={styles.label}>What we offer</p>
        <h2 className={styles.title}>Signature Services</h2>
        <p className={styles.subtitle}>
          Tailored for your unique beauty journey
        </p>
      </div>
      <div className={styles.grid}>
        {signatureServices.map((service) => (
          <article key={service.title} className={`${styles.card} fade-in`}>
            <div className={styles.imageWrap}>
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={260}
                className={styles.image}
              />
            </div>
            <div className={styles.body}>
              <div className={styles.icon}>
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <Link href="#booking" className={styles.bookBtn}>
                Book Now →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

