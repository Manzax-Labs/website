import Section from './Section';

export default function CtaFinal() {
  return (
    <Section className="cta-final">
      <div className="container">
        <h2>
          Hacés lo tuyo,
          <br />
          nosotros el resto.
        </h2>
        <p>
          Sumate a la beta privada. Te avisamos cuando esté lista la versión que vas a usar todos los días.
        </p>
        <div className="actions">
          <a href="#precios" className="btn btn-primary">
            Pedir acceso →
          </a>
          <a href="#" className="btn btn-ghost">
            Hablar con un fundador
          </a>
        </div>
      </div>
    </Section>
  );
}
