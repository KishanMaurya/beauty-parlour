import { SITE } from "@/lib/data";
import styles from "./MapSection.module.css";

const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/Glow+%26+Shine+Beauty+Parlour+Kharhatti+Mohal+Ward+No+1+Link+Marg+Road+Gopiganj+Uttar+Pradesh+221303";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.18!2d82.4786!3d25.3517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzA2LjEiTiA4MsKwMjgnNDMuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

export default function MapSection({ embedded = false }: { embedded?: boolean }) {
  const content = (
    <div className={styles.panel}>
      <header className={styles.header}>
        <div className={styles.label}>Find Us</div>
        <h2 className={styles.title}>
          Visit <em>Our Parlour Studio</em>
        </h2>
        <p className={styles.address}>
          📍 Kharhatti Mohal Ward No.1 (Link Marg Road), Gopiganj, UP 221303
          <br />
          <a
            href={`https://wa.me/${SITE.phone.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.phoneLink}
          >
            📞 {SITE.phoneDisplay}
          </a>
        </p>
      </header>
      <div className={styles.mapWrap}>
        <iframe
          src={MAP_EMBED_URL}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Glow & Shine Beauty Parlour – Gopiganj, Bhadohi UP"
        />
        <div className={styles.pinCard}>
          <div className={styles.pinTitle}>✦ Glow &amp; Shine Beauty Parlour</div>
          <div className={styles.pinAddress}>
            Kharhatti Mohal Ward No.1, Link Marg Road, Gopiganj, UP 221303
          </div>
        </div>
        <a
          href={MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.directionsBtn}
        >
          🗺️ Get Directions
        </a>
      </div>
    </div>
  );

  if (embedded) {
    return <div className={styles.embedded}>{content}</div>;
  }

  return <section className={styles.standalone}>{content}</section>;
}
