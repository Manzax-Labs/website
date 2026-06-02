import Section from './Section';

export default function Testimonial() {
  return (
    <Section className="block" style={{ padding: '64px 0' }}>
      <div className="container">
        <div className="testi">
          <p className="quote">
            El 90% de la carga de información sería imposible hacerla sin un sistema. Hoy entre Excel y WhatsApp
            se pierden tres días por mes que no vuelven más.
          </p>
          <div className="testi-meta">
            <div className="testi-avatar">AL</div>
            <div>
              <div className="who">Administradora matriculada · CABA</div>
              <div className="where">
                Una de las 65 entrevistas de discovery que hicimos antes de empezar a construir.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
