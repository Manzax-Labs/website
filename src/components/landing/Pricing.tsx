import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { IconCheck } from './Icons';

const MIN = 10;
const MAX = 800;
const PRICE = 1425; // $ por unidad funcional / mes
const THUMB = 26; // ancho del thumb del slider (px), para anclar la burbuja

const fmt = (n: number) => '$' + n.toLocaleString('es-AR');

const included = [
  'Liquidación, portal del vecino y comprobantes — todo en el mismo plan.',
  'Soporte humano que entiende de consorcios, sin costo extra.',
  'Se prorratea en las expensas de cada unidad: no sale de tu bolsillo.',
  'Te mantenemos el precio los primeros 12 meses.',
];

export default function Pricing() {
  const [uf, setUf] = useState(180);
  const [bubbleLeft, setBubbleLeft] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const frac = (uf - MIN) / (MAX - MIN);
  const total = uf * PRICE;

  // posiciona la burbuja sobre el thumb; lee el valor del DOM para no depender de closures
  const reposition = useCallback(() => {
    const el = inputRef.current;
    if (!el) return;
    const w = el.clientWidth || 300;
    const f = (Number(el.value) - MIN) / (MAX - MIN);
    setBubbleLeft(f * (w - THUMB) + THUMB / 2);
  }, []);

  // recoloca cuando cambia el valor (el ancho no cambia, así que ResizeObserver no dispara acá)
  useLayoutEffect(() => {
    reposition();
  }, [uf, reposition]);

  // recoloca ante cualquier cambio de ancho real del input: primer layout, inyección
  // tardía de CSS (Vite dev), font-swap, resize de viewport. Evita que la burbuja quede
  // clavada en una posición medida antes de que el layout se asiente.
  useEffect(() => {
    const el = inputRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => reposition());
    ro.observe(el);
    document.fonts?.ready?.then(reposition).catch(() => {});
    return () => ro.disconnect();
  }, [reposition]);

  return (
    <section className="block alt" id="precio" aria-labelledby="price-h">
      <div className="container">
        <div className="price-layout">
          <div className="price-intro">
            <div className="eyebrow">Precios</div>
            <h2 id="price-h">
              Un precio, <span className="hl dark">todo incluido</span>
            </h2>
            <p>
              Por unidad funcional. Sin costo de apertura, sin permanencia, sin sorpresas. Lo que ves
              es lo que pagás.
            </p>
            <ul className="price-list">
              {included.map((item) => (
                <li key={item}>
                  <span className="ck" aria-hidden="true">
                    <IconCheck />
                  </span>{' '}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="price-wrap reveal">
            <div className="price-banner">
              <IconCheck />
              Todo incluido. Sin costo de apertura ni permanencia.
            </div>
            <div className="price-card">
              <div className="price-top">
                <div className="plan">Plan único</div>
                <div className="price-amt">
                  $1.425 <span className="unit">/ unidad funcional · mes</span>
                </div>
                <div className="price-note">
                  Todo incluido. Se prorratea en las expensas de cada unidad.
                </div>
              </div>

              <div className="calc">
                <label className="lab" id="uf-lab" htmlFor="uf">
                  ¿Cuántas unidades funcionales administrás?
                </label>
                <div className="slider-wrap">
                  <span className="uf-bubble" style={{ left: bubbleLeft }} aria-hidden="true">
                    {uf} UF
                  </span>
                  <input
                    ref={inputRef}
                    type="range"
                    id="uf"
                    min={MIN}
                    max={MAX}
                    step={10}
                    value={uf}
                    onChange={(e) => setUf(Number(e.target.value))}
                    style={{ '--fill': `${frac * 100}%` } as CSSProperties}
                    aria-labelledby="uf-lab"
                    aria-describedby="calc-out"
                    aria-valuetext={`${uf} unidades funcionales, ${fmt(total)} por mes`}
                  />
                  <div className="slider-ends" aria-hidden="true">
                    <span>10 UF</span>
                    <span>800 UF</span>
                  </div>
                </div>
                <div className="calc-result" id="calc-out">
                  <span className="lbl">
                    Costo mensual estimado<small>$1.425 por UF</small>
                  </span>
                  <span className="val">{fmt(total)}</span>
                </div>
              </div>

              <div className="price-cta">
                <a href="#sumate" className="btn btn-primary btn-lg btn-block">
                  Empezá ahora
                </a>
                <div className="fine">Sin costo de apertura · Sin permanencia · Soporte humano</div>
                <div className="vol">¿Traés varios edificios? Lo hablamos.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
