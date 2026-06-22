import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenis } from '../lib/lenis';

export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Expose lenis instance via typed singleton (replaces window as any)
    setLenis(lenis);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      setLenis(null);
    };
  }, []);
};

export default useLenis;
