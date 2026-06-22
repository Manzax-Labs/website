import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { IconCheck } from './Icons';

// `--i` controla el delay escalonado de la animación de entrada del hero (heroIn).
const step = (i: number) => ({ '--i': i }) as CSSProperties;

// Clips del hero (generados con Veo, CABA). Rotan con crossfade, igual que ASAPP
// cicla varios videos de fondo. Persona-forward: arranca con la administradora.
const CLIPS = ['/hero-pareja-2.mp4', '/hero-conciliacion.mp4', '/hero-asamblea.mp4', '/hero-fachada.mp4'];

// En mobile NO cargamos los videos (pesados): mostramos un frame fijo del primer clip,
// igual que ASAPP. matchMedia decide en el cliente (SPA, sin SSR → sin mismatch de hidratación).
function useIsMobile(query = '(max-width: 760px)') {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return isMobile;
}

export default function Hero() {
  const vidsRef = useRef<HTMLVideoElement[]>([]);
  const isMobile = useIsMobile();

  // Rotación tipo ASAPP: SOLO el clip activo reproduce (los demás pausados → sin contención
  // de decode), y cada uno arranca de 0 al entrar y se desvanece antes de loopear (clips de
  // 10s, ventana de 8s) → nada de "corta y re-empieza". El fade lo hace el CSS (opacity).
  useEffect(() => {
    const vids = vidsRef.current.filter(Boolean);
    if (!vids.length) return;
    vids.forEach((v, idx) => {
      if (idx !== 0) v.pause();
    });
    if (vids.length < 2) return;
    // Lazy-load: el 1er clip carga con la página; los demás recién cuando hacen falta.
    // Pre-cargamos el SIGUIENTE clip de forma diferida (no compite con el first paint).
    const warm = (idx: number) => {
      const v = vids[idx];
      if (v && v.preload !== 'auto') {
        v.preload = 'auto';
        v.load();
      }
    };
    const warmId = window.setTimeout(() => warm(1), 1500);
    let i = 0;
    const id = window.setInterval(() => {
      const outgoing = vids[i];
      const next = vids[(i + 1) % vids.length];
      next.currentTime = 0;
      // play() puede rechazar si el navegador bloquea autoplay; es benigno y no afecta nada.
      void next.play().catch(() => {});
      next.classList.add('is-active');
      outgoing.classList.remove('is-active');
      window.setTimeout(() => outgoing.pause(), 1900); // pausar el saliente tras el crossfade
      i = (i + 1) % vids.length;
      warm((i + 1) % vids.length); // pre-cargar el que viene después
    }, 8000);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(warmId);
    };
  }, []);

  return (
    <>
      {/* Hero PIVOT ASAPP: video full-bleed + copy overlaid a la izquierda, texto en blanco. */}
      <section className="hero hero--video" id="producto" aria-labelledby="hero-h">
        <div className="hero-media" aria-hidden="true">
          {isMobile ? (
            <img className="hero-still" src="/hero-mobile-2.jpg" alt="" fetchPriority="high" />
          ) : (
            CLIPS.map((src, i) => (
              <video
                key={src}
                ref={(el) => {
                  if (el) vidsRef.current[i] = el;
                }}
                className={`hero-vid${i === 0 ? ' is-active' : ''}`}
                autoPlay={i === 0}
                muted
                playsInline
                preload={i === 0 ? 'auto' : 'none'}
                poster={i === 0 ? '/hero-poster-pareja-2.jpg' : undefined}
              >
                <source src={src} type="video/mp4" />
              </video>
            ))
          )}
          <div className="hero-scrim" />
        </div>
        <div className="container hero-copy">
          <h1 id="hero-h" className="hero-anim" style={step(0)}>
            Liquidá las expensas en <span className="word-shine">horas</span>, no en{' '}
            <span className="word-dim">días</span>.
          </h1>
          <p className="sub hero-anim" style={step(1)}>
            Cobranzas, comprobantes y rendición de cuentas en un solo lugar, sin planillas ni vivir
            pegado al WhatsApp.
            <span className="sub-extra"> La migración de tus edificios la hacemos nosotros.</span>
          </p>
          <div className="hero-cta hero-anim" style={step(2)}>
            <a href="#sumate" className="btn btn-primary btn-lg">
              Empezá ahora
            </a>
          </div>
          <div className="reassure center hero-anim" style={step(3)}>
            <span>
              <IconCheck /> <b>Sin costo de apertura</b>
            </span>
            <span>
              <IconCheck /> <b>Sin permanencia</b>
            </span>
            <span>
              <IconCheck /> <b>Te migramos nosotros</b>
            </span>
          </div>
        </div>
      </section>

      <section className="hero-product">
        <div className="container">
          <div className="product-intro reveal">
            <h2 className="product-title">
              Vos cargás las facturas. <span className="word-shine">Manzax liquida</span>.
            </h2>
            <p className="product-sub">
              Prorratea por coeficiente, te muestra el banco y te avisa si el total no cierra, antes
              de que lo emitas.
            </p>
          </div>
          <figure className="hero-shot reveal" id="demo">
            <img
              src="/product-liquidacion.png"
              alt="Pantalla del producto: la liquidación de abril 2026 del PH Thames 2450 — total de gastos, cobrado, UFs con deuda y el detalle de gastos del período, lista para emitir."
            />
          </figure>
        </div>
      </section>
    </>
  );
}
