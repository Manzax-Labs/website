const pains = [
  {
    ci: 'ci-grid',
    title: 'Tres días con el Excel',
    desc: 'Cada mes, la misma rutina: prorratear a mano, cuadrar el banco, rezar para que el total cierre. Una fórmula mal copiada y empezás de nuevo.',
  },
  {
    ci: 'ci-chat',
    title: 'El WhatsApp que no para',
    desc: 'Consultas a la madrugada, los domingos, por cosas que ya están en la liquidación. Vivís contestando lo mismo una y otra vez.',
  },
  {
    ci: 'ci-trust',
    title: 'Vecinos que desconfían',
    desc: '"No entiendo en qué se va la plata." Sin transparencia, hasta el trabajo bien hecho se pone en duda en cada asamblea.',
  },
];

export default function Problem() {
  return (
    <section className="block problem" aria-labelledby="prob-h">
      <div className="container">
        <div className="sec-head center">
          <div className="eyebrow center">El día a día</div>
          <h2 id="prob-h">
            Esto lo conocés <span className="hl dark">de memoria</span>
          </h2>
          <p>No te lo vamos a explicar a vos. Lo armamos para que deje de pasarte.</p>
        </div>
        <div className="pain-grid stagger">
          {pains.map((p) => (
            <div className="pain reveal" key={p.title}>
              <span className={`ci ${p.ci}`} aria-hidden="true" />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="stat-line">
          Un número que se cuela y el cierre no cuadra. <b>Pasa más seguido de lo que parece</b> — y
          con tu nombre arriba de la liquidación.
        </p>
      </div>
    </section>
  );
}
