import { useState } from 'react';

const faqs: [string, string][] = [
  [
    '¿Tengo que migrar todo mi Excel?',
    'No. La migración la hacemos nosotros: nos pasás tu última liquidación y cargamos unidades, coeficientes y saldos por vos. Empezás cuando los números cuadran con tu último cierre. No perdés data ni dependés de importar planillas a mano.',
  ],
  [
    '¿Calculan los sueldos del encargado (SUTERH)?',
    'El recibo lo seguís liquidando con tu sistema de sueldos de siempre. Vos lo subís a Manzax y lo incorporamos a la liquidación del mes — sin recargar los importes a mano. Así el sueldo y las cargas sociales quedan prorrateados junto al resto de los gastos.',
  ],
  [
    '¿Qué tareas de AFIP/ARCA cubren?',
    'Emitimos los comprobantes electrónicos de las expensas del consorcio y las cargas sociales del encargado (F.931), que entran junto con el módulo de sueldos. Si necesitás algo puntual de AFIP, escribinos y te lo resolvemos.',
  ],
  [
    '¿Está pensado para la Ley 941 de CABA?',
    'Sí. Lo diseñamos siguiendo el Modelo Único de liquidación y la lógica de la Ley 941, con la documentación del Registro Público de Administradores. También trabajamos con consorcios de Provincia.',
  ],
  [
    '¿Mis propietarios mayores van a tener que usar una app?',
    'No es obligatorio. El vecino recibe su expensa y su comprobante por mail o WhatsApp, sin instalar nada. La app es opcional, para quien la quiera. No perdés a nadie por el camino.',
  ],
  [
    '¿Qué pasa si algo falla con una liquidación ya enviada?',
    'Toda tu información tiene copias de seguridad y la podés exportar cuando quieras. Si algo no sale como esperabas, lo resolvemos con vos — te acompaña una persona, no un ticket.',
  ],
  [
    '¿Cómo es el precio?',
    '$1.425 por unidad funcional por mes, todo incluido, y te respetamos ese precio los primeros 12 meses. Sin costo de apertura y sin permanencia: cancelás cuando quieras.',
  ],
  [
    '¿Sirve para edificios chicos?',
    'Sí. Pagás por unidad funcional, así que un edificio de 12 UF paga acorde. Sin mínimos abusivos.',
  ],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="block" id="faq" aria-labelledby="faq-h">
      <div className="container">
        <div className="sec-head center">
          <div className="eyebrow center">Preguntas</div>
          <h2 id="faq-h">Lo que seguro te estás preguntando</h2>
        </div>
        <div className="faq stagger">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            // El .reveal va en un wrapper de className FIJO: el scroll-reveal le agrega `.in` por
            // DOM (fuera de React). Si lo pusiéramos en el mismo nodo que cambia `open`, React
            // reescribiría el className al re-renderizar y borraría `.in` → la pregunta volvería a
            // opacity:0 y "desaparecería" al tocar el +. Con className constante, React no lo pisa.
            return (
              <div className="reveal" key={i}>
                <div className={isOpen ? 'qa open' : 'qa'}>
                  <button
                    type="button"
                    id={`q${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`a${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {q}
                    <svg viewBox="0 0 24 24" className="icn pm" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                  <div
                    className="ans"
                    id={`a${i}`}
                    role="region"
                    aria-labelledby={`q${i}`}
                    aria-hidden={!isOpen}
                  >
                    <p>{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
