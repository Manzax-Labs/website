import { IconCheck } from './Icons';

const features: { title: string; desc: string }[] = [
  {
    title: 'Liquidación y prorrateo por coeficiente',
    desc: 'El corazón del sistema. Cargás los gastos, prorratea por coeficiente y arma el PDF de cada unidad.',
  },
  {
    title: 'Portal de propietarios e inquilinos',
    desc: 'Expensas y comprobantes, por mail o WhatsApp. El vecino no instala nada.',
  },
  {
    title: 'Conciliación bancaria en un click',
    desc: 'Cruzás los movimientos del banco con la liquidación al instante. Se acabó el control a mano.',
  },
  {
    title: 'Recibo del encargado, prorrateado',
    desc: 'Subís el recibo del encargado y lo incorporamos a la liquidación del mes, sin recargarlo a mano.',
  },
  {
    title: 'Importación de comprobantes™',
    desc: 'Nuestro sistema propio carga los comprobantes sin tipear: hasta 5 horas menos por edificio al mes.',
  },
  {
    title: 'Facturación electrónica AFIP/ARCA',
    desc: 'Emitís los comprobantes electrónicos de las expensas y las cargas sociales del encargado (F.931).',
  },
];

export default function Features() {
  return (
    <section className="block alt" id="hoy" aria-labelledby="hoy-h">
      <div className="container">
        <div className="sec-head center">
          <div className="eyebrow center">Funciones</div>
          <h2 id="hoy-h">Todo lo que necesitás, en un solo lugar</h2>
          <p>De la liquidación al portal del vecino: una sola herramienta para todo el mes.</p>
        </div>
        <div className="rl stagger">
          {features.map((f) => (
            <div className="ri done reveal" key={f.title}>
              <IconCheck />
              <div>
                <b>{f.title}</b>
                <span>{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
