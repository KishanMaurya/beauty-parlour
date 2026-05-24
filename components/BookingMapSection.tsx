import Booking from "@/components/Booking";
import MapSection from "@/components/MapSection";
import styles from "./BookingMapSection.module.css";

export default function BookingMapSection() {
  return (
    <section className={styles.section} id="booking">
      <div className={`${styles.grid} fade-in`}>
        <Booking embedded />
        <MapSection embedded />
      </div>
    </section>
  );
}
