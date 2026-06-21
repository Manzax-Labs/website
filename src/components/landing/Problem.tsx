// Situaciones cotidianas que sufre el administrador, ilustradas (estilo cómic editorial,
// sobre el fondo del panel con un semi-fondo suave detrás). Muestran el problema, no lo explican.
// Cada escena: un título (el dolor con nombre) + una "voz" identificable, fiel a la ilustración.
const situations = [
  {
    img: '/illus-comic-whatsapp.webp',
    cap: 'El WhatsApp que no para',
    sub: '«¿Por qué subió la expensa?» — otra vez, 11 de la noche.',
  },
  {
    img: '/illus-comic-conciliacion.webp',
    cap: 'Cuadrar el banco a mano',
    sub: 'Toda la tarde, de a dos, por un peso que no aparece.',
  },
  {
    img: '/illus-comic-libros.webp',
    cap: 'Papeles por todos lados',
    sub: '¿En qué carpeta había quedado el recibo de mayo?',
  },
  {
    img: '/illus-comic-sistema.webp',
    cap: 'Un sistema que nadie entiende',
    sub: 'Mil botones para hacer una cosa simple.',
  },
  {
    img: '/illus-comic-vecinos.webp',
    cap: 'Vecinos peleados con la app',
    sub: 'Si para ellos es un quilombo, te llaman a vos.',
  },
];

export default function Problem() {
  return (
    <section className="block problem" aria-labelledby="prob-h">
      <div className="container">
        <div className="sec-head center">
          <h2 id="prob-h">
            Esto lo conocés <span className="hl dark">de memoria</span>
          </h2>
          <p>No te lo vamos a explicar a vos. Lo armamos para que deje de pasarte.</p>
        </div>
        <div className="illus-bar stagger">
          {situations.map((s, i) => (
            <figure className="illus-item reveal" key={s.cap}>
              <img src={s.img} alt={s.cap} loading="lazy" decoding="async" />
              <figcaption>
                <span className="illus-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="illus-cap">{s.cap}</span>
                <span className="illus-sub">{s.sub}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
