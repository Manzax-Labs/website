import type { ReactNode } from 'react';
import Section from './Section';

const reasons: { num: string; title: string; desc: ReactNode }[] = [
  {
    num: '01',
    title: 'Construido agent-first',
    desc: 'Los modelos de IA son infraestructura, no adorno. Por eso 4 personas hacen lo que a otros les requiere 20+. Más velocidad, mejor precio.',
  },
  {
    num: '02',
    title: 'No hay un "plan de salida"',
    desc: 'Sin inversores, sin pivot al SaaS de moda en 18 meses. Manzax existe para hacer software bueno y vivir de eso. El producto que usás hoy va a estar el año que viene.',
  },
  {
    num: '03',
    title: 'Pocas cosas, hechas bien',
    desc: 'Hicimos 65 entrevistas con administradores antes de escribir una línea de código. Sólo entran las funciones que el 80% usa de verdad. Si entra, anda.',
  },
  {
    num: '04',
    title: 'Hablamos como vos',
    desc: (
      <>
        Soporte por WhatsApp, en castellano, escrito por humanos. <em>"Listo, expensa enviada a 12 vecinos"</em>,
        no <em>"Operation completed successfully"</em>.
      </>
    ),
  },
];

export default function WhyManzax() {
  return (
    <Section className="block" id="nosotros">
      <div className="container why-grid">
        <div>
          <div className="eyebrow">Por qué Manzax es distinto</div>
          <h2 className="section-title">
            Cuatro socios,
            <br />
            sin VCs, sin apuro.
          </h2>
          <p className="section-lede" style={{ marginTop: '14px' }}>
            No estamos quemando capital de fondo a 5x para "capturar mercado". La amistad va primero — está en el
            estatuto, sección 0. Hacemos software bueno y vivimos de eso.
          </p>
        </div>
        <div className="why-list">
          {reasons.map((r) => (
            <div className="why-item" key={r.num}>
              <span className="num">{r.num}</span>
              <div>
                <h5>{r.title}</h5>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
