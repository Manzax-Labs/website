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
        <div className="pgrid stagger">
          <article className="pcard pcard-lead reveal">
            <span className="ci ci-time" aria-hidden="true" />
            <div className="pc-eyebrow">Recuperás tu tiempo</div>
            <div className="pc-bars" aria-hidden="true">
              <div className="pc-bar antes">
                <span className="bl">Antes</span>
                <span className="track">
                  <span className="fill" />
                </span>
                <span className="val">3 días</span>
              </div>
              <div className="pc-bar ahora">
                <span className="bl">Ahora</span>
                <span className="track">
                  <span className="fill" />
                </span>
                <span className="val">una tarde</span>
              </div>
            </div>
            <p className="pc-body">
              Los comprobantes entran sin tipear, Manzax prorratea por coeficiente y arma las
              liquidaciones. Vos revisás y mandás.
            </p>
          </article>

          <article className="pcard reveal">
            <span className="ci ci-eye" aria-hidden="true" />
            <div className="pc-eyebrow">Que nadie dude de tu trabajo</div>
            <s className="pc-was">El WhatsApp a las 11 de la noche</s>
            <div className="pc-reach" aria-hidden="true">
              <span className="rd">Propietarios</span>
              <span className="rd">Inquilinos</span>
            </div>
            <p className="pc-body">
              Cada uno ve sus expensas y comprobantes cuando quiere, por mail o WhatsApp. Sin
              instalar nada.
            </p>
          </article>

          <article className="pcard reveal">
            <span className="ci ci-calendar" aria-hidden="true" />
            <div className="pc-eyebrow">Empezás sin trauma</div>
            <s className="pc-was">«Mejor lo dejo para más adelante»</s>
            <div className="pc-steps" aria-hidden="true">
              <span className="ps">
                <b>Este mes</b> lo dejamos listo nosotros
              </span>
              <span className="ps">
                <b>El que viene</b> ya liquidás vos
              </span>
            </div>
            <p className="pc-body">
              Cargamos tus edificios nosotros —<b>personas, no un bot</b>— y arrancás el mes que
              viene. Sin arrastrar el Excel, sin frenar tu operación.
            </p>
            <a href="#migracion" className="micro">
              Cómo es la migración
              <IconArrow />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
