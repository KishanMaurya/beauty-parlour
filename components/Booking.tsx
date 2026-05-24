"use client";

import { useState } from "react";
import {
  SITE,
  bookingServices,
  bookingBranches,
  bookingTimes,
  INSTAGRAM_URL,
} from "@/lib/data";
import styles from "./Booking.module.css";

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.784.464 3.558 1.348 5.121L2.045 22l4.979-1.291A9.942 9.942 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.181a8.142 8.142 0 01-4.154-1.138l-.298-.177-3.083.8.824-3.002-.194-.309A8.176 8.176 0 013.818 12c0-4.511 3.67-8.181 8.181-8.181 4.511 0 8.182 3.67 8.182 8.181 0 4.511-3.671 8.181-8.182 8.181z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  return `${m}/${d}/${y}`;
}

export default function Booking() {
  const [form, setForm] = useState({
    service: bookingServices[0] as string,
    branch: "",
    date: "",
    time: bookingTimes[0] as string,
    name: "",
    phone: "",
    notes: "",
  });

  const submitBooking = () => {
    if (!form.service) {
      alert("Please select a service.");
      return;
    }
    if (!form.branch) {
      alert("Please select a branch.");
      return;
    }
    if (!form.date) {
      alert("Please select a date.");
      return;
    }
    if (!form.time) {
      alert("Please select a time.");
      return;
    }
    if (!form.name.trim()) {
      alert("Please enter your full name.");
      return;
    }
    if (!form.phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    const message = [
      "Hello! I'd like to book an appointment at Glow & Shine Beauty Parlour.",
      "",
      `Service: ${form.service}`,
      `Branch: ${form.branch}`,
      `Date: ${formatDate(form.date)}`,
      `Time: ${form.time}`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${SITE.phone.replace("+", "")}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.section} id="booking">
      <div className={`${styles.wrapper} fade-in`}>
        <div className={styles.card}>
          <header className={styles.header}>
            <div className={styles.titleRow}>
              <span className={styles.waIcon}>
                <WhatsAppIcon size={26} />
              </span>
              <h2 className={styles.title}>Book Your Appointment</h2>
            </div>
            <p className={styles.subtitle}>
              Fill details &amp; we&apos;ll redirect to WhatsApp to confirm
              instantly.
            </p>
          </header>

          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              submitBooking();
            }}
          >
            <div className={styles.field}>
              <label className={styles.label} htmlFor="service">
                Select Service <span className={styles.required}>*</span>
              </label>
              <select
                id="service"
                className={styles.select}
                value={form.service}
                onChange={(e) =>
                  setForm((f) => ({ ...f, service: e.target.value }))
                }
                required
              >
                {bookingServices.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="branch">
                Select Branch <span className={styles.required}>*</span>
              </label>
              <select
                id="branch"
                className={styles.select}
                value={form.branch}
                onChange={(e) =>
                  setForm((f) => ({ ...f, branch: e.target.value }))
                }
                required
              >
                <option value="">Choose Branch</option>
                {bookingBranches.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="date">
                  Date <span className={styles.required}>*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  className={styles.input}
                  value={form.date}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, date: e.target.value }))
                  }
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="time">
                  Time <span className={styles.required}>*</span>
                </label>
                <select
                  id="time"
                  className={styles.select}
                  value={form.time}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, time: e.target.value }))
                  }
                  required
                >
                  {bookingTimes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className={styles.input}
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">
                  Phone Number <span className={styles.required}>*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={styles.input}
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="notes">
                Additional notes (optional)
              </label>
              <textarea
                id="notes"
                className={styles.textarea}
                placeholder="Any special requests or occasion details…"
                value={form.notes}
                onChange={(e) =>
                  setForm((f) => ({ ...f, notes: e.target.value }))
                }
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              <WhatsAppIcon size={20} />
              Confirm on WhatsApp
            </button>

            <p className={styles.hint}>
              You&apos;ll be redirected to WhatsApp with pre-filled message
            </p>
          </form>

          <div className={styles.cardFooter}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instaLink}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

