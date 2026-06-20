import type { CSSProperties } from 'react';
import { IconArrow, IconCheck } from './Icons';

// `--i` controla el delay escalonado de la animación de entrada del hero (heroIn).
const step = (i: number) => ({ '--i': i }) as CSSProperties;

export default function Hero() {
  return (
    <section className="hero" id="producto" aria-labelledby="hero-h">
      <div className="container hero-copy">
        <div className="eyebrow center hero-anim" style={step(0)}>
          <span
            style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--teal)' }}
            aria-hidden="true"
          />
          Para administradores de consorcios · CABA y GBA
        </div>
        <h1 id="hero-h" className="hero-anim" style={step(1)}>
          Liquidá las expensas en <span className="hl">horas</span>, no en días.
        </h1>
        <p className="lead hero-anim" style={step(2)}>
          Y administrás tus consorcios sin vivir pegado al WhatsApp.
        </p>
        <p className="sub hero-anim" style={step(3)}>
          Cobranzas, comprobantes y rendición de cuentas en un solo lugar. La migración de tus
          edificios la hacemos nosotros.
        </p>
        <div className="hero-cta hero-anim" style={step(4)}>
          <a href="#sumate" className="btn btn-primary btn-lg">
            Empezá ahora
          </a>
          <a href="#hoy" className="btn btn-ghost btn-lg">
            Ver funciones
            <IconArrow />
          </a>
        </div>
        <div className="reassure center hero-anim" style={step(5)}>
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
      <div className="container hero-anim" style={step(6)}>
        <figure className="hero-shot" id="demo">
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
  );
}
