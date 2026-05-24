"use client";

import { useEffect } from "react";

export function useNavScroll() {
  useEffect(() => {
    const onScroll = () => {
      document.getElementById("nav")?.classList.toggle("scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

export function useFadeIn() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export function useStatsCounter() {
  useEffect(() => {
    function animateCounter(el: HTMLElement) {
      const target = parseFloat(el.dataset.count || "0");
      const isDecimal = target % 1 !== 0;
      const duration = 2000;
      const steps = 80;
      const increment = target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current = Math.min(current + increment, target);
        el.textContent = isDecimal
          ? current.toFixed(1)
          : String(Math.floor(current)) + (target >= 1000 ? "+" : "");
        if (current >= target) {
          el.textContent = isDecimal
            ? target.toFixed(1)
            : String(target) + (target >= 100 ? "+" : "");
          clearInterval(interval);
        }
      }, duration / steps);
    }

    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".stat-num").forEach((el) =>
              animateCounter(el as HTMLElement),
            );
            counterObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    const strip = document.querySelector(".stats-strip");
    if (strip) counterObs.observe(strip);
    return () => counterObs.disconnect();
  }, []);
}
