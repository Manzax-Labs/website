import { IconCheck } from './Icons';

const principles = [
  {
    title: 'Que abra a la primera',
    desc: 'Sin "queda cargando", sin pantallas que se tildan. Entrás y está todo.',
  },
  {
    title: 'Que pagar funcione',
    desc: 'El vecino paga y el comprobante queda guardado. No se borra solo.',
  },
  {
    title: 'Soporte humano',
    desc: 'Te atiende una persona que entiende de consorcios. No un bot que te da vueltas.',
  },
  {
    title: 'Sin cargos escondidos',
    desc: 'Nada de extras por reabrir una expensa o por cada llamada al soporte.',
  },
];

export default function Principles() {
  return (
    <section className="block principles" aria-labelledby="pr-h">
      <div className="container">
        <div className="sec-head center">
          <div className="eyebrow center">Nuestras reglas</div>
          <h2 id="pr-h">Con qué nos comprometemos</h2>
          <p>Lo que más se critica de los sistemas de hoy es lo que más nos cuidamos.</p>
        </div>
        <div className="pr-grid stagger">
          {principles.map((p) => (
            <div className="pr reveal" key={p.title}>
              <span className="ck" aria-hidden="true">
                <IconCheck />
              </span>
              <div>
                <b>{p.title}</b>
                <span>{p.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
