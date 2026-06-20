import { IconShieldCheck } from './Icons';

const steps = [
  'Nos pasás tu última liquidación (PDF o Excel).',
  'Cargamos unidades, coeficientes y saldos por vos.',
  'Revisamos que cada número cuadre con tu cierre.',
  'Liquidás el próximo período con todo listo.',
];

export default function Migration() {
  return (
    <section className="block migrate" id="migracion" aria-labelledby="mig-h">
      <div className="container">
        <div className="migrate-card reveal">
          <div>
            <div className="eyebrow">Migración</div>
            <h2 id="mig-h">La migración no la hacés vos</h2>
            <p>
              Sabemos que lo que te frena no es el precio: es tener que mover años de saldos sin que
              se rompa nada. Por eso la migración la hacemos nosotros — antes de que muevas un solo
              dato.
            </p>
            <div className="guarantee">
              <IconShieldCheck />
              <div>
                <b>Empezás cuando vos das los números por buenos.</b> Cargamos tus edificios, los
                revisamos juntos contra tu último cierre, y recién ahí arrancás.
              </div>
            </div>
          </div>
          <div className="migrate-steps">
            {steps.map((text, i) => (
              <div className="ms" key={i}>
                <span className="n">{i + 1}</span> {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
