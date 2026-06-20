import { useEffect } from 'react';

/**
 * Observa todos los `.reveal` del documento y les agrega `.in` al entrar en viewport
 * (mismo comportamiento que el IntersectionObserver del diseño vanilla original).
 * Respeta `prefers-reduced-motion`: si está activo, muestra todo de una sin animar.
 *
 * Llamarlo UNA sola vez, en App, cuando todas las secciones ya están montadas.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = document.querySelectorAll<HTMLElement>('.reveal');

    if (reduce) {
      items.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
