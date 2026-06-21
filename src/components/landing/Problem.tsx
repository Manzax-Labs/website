// Sección "problema" como collage estilo Calm: grilla inclinada de 44 foto-cards distintas que se
// funde con el fondo crema. TODAS tienen caption (título + una línea) que aparece SOLO al hover.
// Copy investigado para que sorprenda, empatice y dé ganas de verlas todas. Mezcladas por categoría
// (personas / edificios / amenities / encargado) para que quede diverso y colorido. Sin título
// visible (queda como h2 sr-only para accesibilidad).

const CAP: Record<string, { cap: string; sub: string }> = {
  whatsapp: { cap: 'Las 11 de la noche', sub: 'Cuarenta mensajes nuevos y nadie pregunta si dormiste' },
  conciliacion: { cap: 'El banco contra la calculadora', sub: 'Dos cabezas, mil recibos y un café que ya se enfrió' },
  libros: { cap: 'El monumento al papel', sub: 'Años de expensas apiladas esperando una búsqueda imposible' },
  sistema: { cap: 'Mil botones, cero respuestas', sub: 'Un software que pide manual para apretar enviar' },
  vecinos: { cap: 'El comité de la app', sub: 'Tres vecinos, una pantalla y muchas opiniones fuertes' },
  reclamos: { cap: 'La reunión del palier', sub: 'El reclamo te encuentra entre el ascensor y la puerta' },
  cierre: { cap: 'Contra el vencimiento', sub: 'Otra noche cerrando expensas y el mate ya lavado' },
  'liquidacion-cerrada': { cap: 'Listo, por fin cerró', sub: 'Ese suspiro que solo entiende otro administrador' },
  'expensas-enviadas': { cap: 'Enviar y respirar', sub: 'Las expensas salieron y todavía es de día' },
  'reunion-consorcio': { cap: 'Asamblea sin gritos', sub: 'Por primera vez todos se fueron contentos' },
  'todo-cuadra': { cap: 'El mate de la calma', sub: 'Los números cierran y por fin podés frenar' },
  'trato-cerrado': { cap: 'Un edificio más', sub: 'El apretón de manos que suma cartera sin sumar caos' },
  'encargado-orgulloso': { cap: 'El que cuida la casa', sub: 'Un encargado orgulloso vale más que diez reuniones' },
  'vecinos-contentos': { cap: 'Lo aprobaron sin chistar', sub: 'Cuando la expensa se entiende, no hay discusión' },
  edificio: { cap: 'Detrás de cada balcón', sub: 'Familias que confían en que todo funcione puertas adentro' },
  'art-deco': { cap: 'Cien años de pie', sub: 'Y vos sos quien lo mantiene en pie hoy' },
  'ph-reciclado': { cap: 'El PH con alma', sub: 'Pocas unidades, pero cada vecino te conoce el nombre' },
  'torre-vidrio': { cap: 'Mucho vidrio, muchos gastos', sub: 'Cuanto más linda la torre, más detalle en la liquidación' },
  skyline: { cap: 'Cada luz, un consorcio', sub: 'Detrás de cada ventana hay expensas que alguien cierra' },
  'calle-palermo': { cap: 'Tu recorrido de siempre', sub: 'De edificio en edificio, café en mano' },
  'hall-entrada': { cap: 'La primera impresión', sub: 'Un hall lustrado dice más que cualquier cartel' },
  ascensor: { cap: 'La reja que vio de todo', sub: 'Cruje, pero funciona, como buen vecino de toda la vida' },
  contrapicado: { cap: 'Mirando para arriba', sub: 'Cada piso suma una expensa que tenés que ordenar' },
  'barrio-aereo': { cap: 'Tantos techos, tantas cuentas', sub: 'Desde arriba se ve simple, abajo es otra cosa' },
  'balcones-plantas': { cap: 'El que riega de más', sub: 'Plantas hermosas hasta que el agua cae al de abajo' },
  'edificio-noche': { cap: 'Ventanas tibias', sub: 'Adentro descansan porque vos pusiste todo en orden' },
  pileta: { cap: 'El lujo que alguien mantiene', sub: 'Verano feliz arriba, cloro y planilla por detrás' },
  sum: { cap: 'Reservado para el sábado', sub: 'El salón del cumpleaños que hay que coordinar bien' },
  gimnasio: { cap: 'Las promesas de enero', sub: 'Cintas prolijas esperando a los que arrancan en marzo' },
  terraza: { cap: 'El mejor atardecer del edificio', sub: 'Una terraza que une vecinos en vez de pelearlos' },
  quincho: { cap: 'Parrilla lista, lista de espera', sub: 'El quincho más peleado del edificio' },
  cochera: { cap: 'Cada lugar, su dueño', sub: 'Espacios marcados para que nadie discuta el número' },
  'patio-interno': { cap: 'El secreto verde', sub: 'El rincón que nadie ve hasta que falta' },
  laundry: { cap: 'El club del lavarropas', sub: 'Donde se cruzan vecinos, medias perdidas y charlas' },
  country: { cap: 'Más casas, más detalle', sub: 'Un barrio entero confiando en tu administración' },
  paddle: { cap: 'Cancha libre, planilla llena', sub: 'Reservas, mantenimiento y el del cuarto que no paga' },
  coworking: { cap: 'La oficina que baja un piso', sub: 'El amenity nuevo que ya nadie quiere resignar' },
  rooftop: { cap: 'Arriba de todo, en calma', sub: 'El deck donde el edificio respira al atardecer' },
  'encargado-limpiando': { cap: 'El primero en llegar', sub: 'Un palier brillante empieza antes de que abras el mail' },
  'encargado-basura': { cap: 'Las 6 de la mañana', sub: 'Cuando el edificio duerme, alguien ya está laburando' },
  'encargado-bronces': { cap: 'Brillan los detalles', sub: 'El cuidado que nadie pide pero todos notan' },
  'encargado-jardin': { cap: 'El jardinero de la entrada', sub: 'El verde de la puerta lo cuida una persona, no la app' },
  mantenimiento: { cap: 'La bomba que nadie ve', sub: 'Hasta que un sábado se corta el agua de todos' },
  'encargado-paquete': { cap: 'Firma por todos', sub: 'Recibe el paquete que vos no llegaste a buscar' },
};

// 4 categorías → se intercalan (round-robin) para que el collage quede diverso y colorido
const people = ['whatsapp', 'conciliacion', 'libros', 'sistema', 'vecinos', 'reclamos', 'cierre', 'liquidacion-cerrada', 'expensas-enviadas', 'reunion-consorcio', 'todo-cuadra', 'trato-cerrado', 'encargado-orgulloso', 'vecinos-contentos'];
const buildings = ['edificio', 'art-deco', 'ph-reciclado', 'torre-vidrio', 'skyline', 'calle-palermo', 'hall-entrada', 'ascensor', 'contrapicado', 'barrio-aereo', 'balcones-plantas', 'edificio-noche'];
const amenities = ['pileta', 'sum', 'gimnasio', 'terraza', 'quincho', 'cochera', 'patio-interno', 'laundry', 'country', 'paddle', 'coworking', 'rooftop'];
const encargado = ['encargado-limpiando', 'encargado-basura', 'encargado-bronces', 'encargado-jardin', 'mantenimiento', 'encargado-paquete'];

const cats = [people, buildings, amenities, encargado];
const order: string[] = [];
for (let i = 0; order.length < 44; i++) {
  for (const cat of cats) if (cat[i]) order.push(cat[i]);
}

const COLS = 11;
const ROWS = 4;
const grid = Array.from({ length: COLS }, (_, c) =>
  Array.from({ length: ROWS }, (_, r) => order[c * ROWS + r])
);

export default function Problem() {
  return (
    <section className="block problem problem-collage" aria-labelledby="prob-h">
      <h2 id="prob-h" className="sr-only">
        Esto lo conocés de memoria
      </h2>
      <div className="collage" aria-hidden="true">
        <div className="collage-plane">
          {grid.map((col, ci) => (
            <div className="collage-col" key={ci}>
              {col.map((slug, ri) => (
                <figure className="cg-card has-cap" key={`${ci}-${ri}`}>
                  <img src={`/photo-${slug}.webp`} alt={CAP[slug].cap} loading="lazy" decoding="async" />
                  <div className="cg-scrim" />
                  <figcaption>
                    <span className="cg-cap">{CAP[slug].cap}</span>
                    <span className="cg-sub">{CAP[slug].sub}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
