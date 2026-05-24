"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollTesti = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll(".testi-card");
    const card = cards[i] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    setActiveIdx(i);
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % testimonials.length;
        scrollTesti(next);
        return next;
      });
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header fade-in">
        <div className="section-label">Client Love</div>
        <h2 className="section-title">
          What Our <em>Brides Say</em>
        </h2>
        <p className="section-sub" style={{ margin: "0 auto" }}>
          Real stories from real women whose lives — and looks — we&apos;ve
          touched.
        </p>
      </div>
      <div
        className="testi-track fade-in"
        id="testiTrack"
        ref={trackRef}
        onMouseEnter={() => {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }}
        onMouseLeave={startAutoSlide}
      >
        {testimonials.map((t) => (
          <div key={t.name} className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">&quot;{t.text}&quot;</p>
            <div className="testi-author">
              <div className="testi-avatar">{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-service">{t.service}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testi-nav">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`testi-dot${activeIdx === idx ? " active" : ""}`}
            onClick={() => scrollTesti(idx)}
            aria-label={`View testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
