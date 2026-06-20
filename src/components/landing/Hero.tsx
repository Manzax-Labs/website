import type { CSSProperties } from 'react';
import { IconCheck } from './Icons';

// `--i` controla el delay escalonado de la animación de entrada del hero (heroIn).
const step = (i: number) => ({ '--i': i }) as CSSProperties;

export default function Hero() {
  return (
    <>
      {/* Hero estilo Calm: banda de imagen (duotono) que TERMINA arriba, el copy va debajo. */}
      <section className="hero" id="producto" aria-labelledby="hero-h">
        <div className="hero-media" aria-hidden="true">
          <img src="/hero-ba.webp" alt="" fetchPriority="high" />
        </div>
        <div className="container hero-copy">
          <h1 id="hero-h" className="hero-anim" style={step(0)}>
            Liquidá las expensas en <span className="word-shine">horas</span>, no en{' '}
            <span className="word-dim">días</span>.
          </h1>
          <p className="sub hero-anim" style={step(1)}>
            Cobranzas, comprobantes y rendición de cuentas en un solo lugar. La migración de tus
            edificios la hacemos nosotros.
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
          <figure className="hero-shot reveal" id="demo">
            <img
              src="/product-liquidacion.png"
              alt="Pantalla del producto: la liquidación de abril 2026 del PH Thames 2450 — total de gastos, cobrado, UFs con deuda y el detalle de gastos del período, lista para emitir."
            />
            <figcaption className="shot-cap">
              Una liquidación de verdad, lista para emitir y mandar a cada vecino.
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
