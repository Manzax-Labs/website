import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { IconCheck, IconClock, IconWhatsapp } from './Icons';
import CitySkyline from './CitySkyline';

// TODO(deploy): reemplazar por el WhatsApp REAL de Manzax antes de publicar.
// Con el form en modo demo, este link es el único canal de contacto que llega a una persona.
const WHATSAPP_URL = 'https://wa.me/5491100000000';

const ufRanges = ['Menos de 50 UF', '50 a 150 UF', '150 a 400 UF', 'Más de 400 UF'];

export default function Signup() {
  const [sent, setSent] = useState(false);
  const okRef = useRef<HTMLDivElement>(null);

  // demo client-side: el form valida con `required` nativo y solo dispara onSubmit si es válido.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  useEffect(() => {
    if (sent) okRef.current?.focus();
  }, [sent]);

  return (
    <section className="signup" id="sumate" aria-labelledby="su-h">
      <div className="container">
        <div className="signup-card reveal">
          <div className="signup-skyline">
            <CitySkyline />
          </div>
          <div className="signup-grid">
            <div>
              <h2 id="su-h">
                Empezá con <span className="hl dark">un edificio</span>
              </h2>
              <p>
                Te ayudamos a cargar tu primer edificio y a hacer tu primera liquidación. Si te
                sirve, sumás el resto a tu ritmo.
              </p>
              <ul className="signup-perks">
                <li>
                  <IconCheck /> Te migramos el primer edificio nosotros
                </li>
                <li>
                  <IconCheck /> Sin costo de apertura, sin permanencia
                </li>
                <li>
                  <IconCheck /> Soporte humano que entiende de consorcios
                </li>
              </ul>
              <p className="scarcity">
                <IconClock /> Te respondemos en el día y coordinamos el alta con vos.
              </p>
              <div className="wa-line">
                <IconWhatsapp />
                ¿Preferís hablar?{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Escribinos por WhatsApp
                </a>
              </div>
            </div>

            {sent ? (
              <div className="form">
                <div className="form-ok" role="status" tabIndex={-1} ref={okRef}>
                  <div className="ok-ic">
                    <IconCheck />
                  </div>
                  <h3>¡Listo! Ya estás anotado.</h3>
                  <p>Te escribimos en el día para coordinar el alta y cargar tu primer edificio.</p>
                </div>
              </div>
            ) : (
              <form
                className="form"
                id="signup-form"
                aria-label="Empezá con Manzax"
                onSubmit={handleSubmit}
              >
                <div className="fg">
                  <label htmlFor="f-nombre">Tu nombre</label>
                  <input
                    id="f-nombre"
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    placeholder="Cómo te llamás"
                    required
                  />
                </div>
                <div className="fg">
                  <label htmlFor="f-contacto">Email o WhatsApp</label>
                  <input
                    id="f-contacto"
                    name="contacto"
                    type="text"
                    autoComplete="email"
                    placeholder="Para escribirte"
                    required
                  />
                </div>
                <div className="fg">
                  <label htmlFor="f-uf">¿Cuántas unidades funcionales administrás?</label>
                  <select id="f-uf" name="uf">
                    {ufRanges.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  Empezá ahora
                </button>
                <p className="formfine">Te escribimos en 24–48 hs. Sin spam, sin compromiso.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
