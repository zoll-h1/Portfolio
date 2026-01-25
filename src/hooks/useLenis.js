import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // smoothness (lower = smoother but more floaty)
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
