const steps = [
  {
    title: 'Configurás',
    desc: 'Tus edificios quedan cargados una vez: unidades, coeficientes, proveedores y encargados. Esto lo hacemos con vos en el alta.',
  },
  {
    title: 'Liquidás',
    desc: 'Cargás las facturas del mes. Manzax prorratea, te muestra el banco y te avisa si el total no cuadra antes de cerrar.',
  },
  {
    title: 'Mandás',
    desc: 'Un click y cada vecino recibe su expensa con su comprobante. Vos seguís con lo importante.',
  },
];

export default function Steps() {
  return (
    <section className="block" aria-labelledby="how-h">
      <div className="container">
        <div className="sec-head center">
          <div className="eyebrow center">Cómo funciona</div>
          <h2 id="how-h">Tres pasos, todos los meses</h2>
        </div>
        <div className="steps stagger">
          {steps.map((s) => (
            <div className="step reveal" key={s.title}>
              <span className="num" aria-hidden="true" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
