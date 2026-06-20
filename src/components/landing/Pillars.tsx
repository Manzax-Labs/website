import { IconArrow } from './Icons';

export default function Pillars() {
  return (
    <section className="block" aria-labelledby="pil-h">
      <div className="container">
        <div className="sec-head">
          <div className="eyebrow">Lo que cambia</div>
          <h2 id="pil-h">
            Tres cosas que <span className="hl">cambian</span> de entrada
          </h2>
          <p>Menos horas, más confianza, y un arranque sin trauma.</p>
        </div>
        <div className="pillars stagger">
          <div className="pillar reveal">
            <span className="ci ci-time" aria-hidden="true" />
            <h3>Recuperás tu tiempo</h3>
            <div className="big">De días a horas</div>
            <p>
              Con <b>Importación de comprobantes™</b> los gastos se cargan solos, Manzax prorratea
              por coeficiente y arma los PDF. Hasta <b>5 horas menos por edificio</b> cada mes.
            </p>
          </div>
          <div className="pillar reveal">
            <span className="ci ci-eye" aria-hidden="true" />
            <h3>Que nadie dude de tu trabajo</h3>
            <div className="big">Transparencia</div>
            <p>
              Cada vecino ve sus expensas y comprobantes. No solo el propietario: <b>el inquilino
              también</b>. Les llega por mail o WhatsApp, sin instalar nada.
            </p>
          </div>
          <div className="pillar reveal">
            <span className="ci ci-calendar" aria-hidden="true" />
            <h3>Empezás sin trauma</h3>
            <div className="big">El mes que viene</div>
            <p>
              No migrás nada de golpe. Nosotros cargamos tus edificios y vos arrancás a liquidar el
              período siguiente. Sin perder data, sin parar tu operación.
            </p>
            <a href="#migracion" className="micro">
              Cómo es la migración
              <IconArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
