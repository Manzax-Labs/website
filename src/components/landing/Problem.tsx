import { useEffect, useRef } from 'react';

// Sección "problema" como collage: grilla DERECHA (sin inclinar) de 44 foto-cards distintas que se
// funde con el fondo crema. Caption por card SIEMPRE visible (título + una línea). Las fotos de
// administradores (personas) van al CENTRO; las de ciudad/edificios/amenities sin personas, hacia
// los bordes. Sin título visible (queda como h2 sr-only para accesibilidad).

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

// Orden de prioridad (Gonzi): las primeras van al centro (siempre visibles, con texto), las
// últimas a la periferia (recortadas arriba/abajo, sin texto). Las primeras 17 las eligió él;
// el resto, ordenadas por importancia (gente/positivas antes, textura de fondo al final).
const ordered = [
  'whatsapp', 'liquidacion-cerrada', 'todo-cuadra', 'conciliacion', 'libros', 'trato-cerrado',
  'quincho', 'sistema', 'balcones-plantas', 'vecinos-contentos', 'vecinos', 'cierre',
  'expensas-enviadas', 'reclamos', 'encargado-jardin', 'ph-reciclado', 'sum',
  // el resto (mi criterio): gente/positivas → edificios/amenities lindos → textura de fondo
  'reunion-consorcio', 'encargado-orgulloso', 'edificio', 'encargado-limpiando', 'pileta',
  'skyline', 'terraza', 'hall-entrada', 'encargado-paquete', 'art-deco', 'gimnasio',
  'encargado-basura', 'calle-palermo', 'mantenimiento', 'ascensor', 'edificio-noche',
  'encargado-bronces', 'patio-interno', 'torre-vidrio', 'coworking', 'contrapicado',
  'country', 'laundry', 'barrio-aereo', 'cochera', 'paddle', 'rooftop',
]; // 44, de más central a más periférica

const COLS = 11;
const ROWS = 4;

// ordeno las 44 celdas por cercanía al centro y les asigno los slugs en orden de prioridad
const cells: { c: number; r: number; d: number }[] = [];
for (let c = 0; c < COLS; c++) {
  for (let r = 0; r < ROWS; r++) {
    const d = Math.abs(c - (COLS - 1) / 2) / ((COLS - 1) / 2) + Math.abs(r - (ROWS - 1) / 2) / ((ROWS - 1) / 2);
    cells.push({ c, r, d });
  }
}
const byCenter = [...cells].sort((a, b) => a.d - b.d);
const at: Record<string, string> = {};
byCenter.forEach((cell, i) => {
  at[`${cell.c}-${cell.r}`] = ordered[i];
});
const grid = Array.from({ length: COLS }, (_, c) =>
  Array.from({ length: ROWS }, (_, r) => at[`${c}-${r}`])
);

export default function Problem() {
  const collageRef = useRef<HTMLDivElement>(null);

  // Solo las cards que entran COMPLETAS en el viewport (ni cortadas a los costados ni en la
  // franja difuminada de arriba/abajo) hacen el "breath" de opacidad. El resto (periferia)
  // queda siempre en baja opacidad. Se recalcula en cada resize.
  useEffect(() => {
    const collage = collageRef.current;
    if (!collage) return;
    const update = () => {
      const cr = collage.getBoundingClientRect();
      const clearTop = cr.top + cr.height * 0.05;
      const clearBottom = cr.top + cr.height * 0.95;
      collage.querySelectorAll<HTMLElement>('.cg-card').forEach((card) => {
        const r = card.getBoundingClientRect();
        // fracción del ÁREA de la card que está casi-toda visible (ni cortada al costado ni difuminada)
        const hVis = Math.max(0, Math.min(r.right, cr.right) - Math.max(r.left, cr.left));
        const vVis = Math.max(0, Math.min(r.bottom, clearBottom) - Math.max(r.top, clearTop));
        const frac = (hVis * vVis) / (r.width * r.height);
        card.classList.toggle('cg-complete', frac >= 0.6);
        // el texto solo si la card está ≥70% visible en ALTO (las cortadas arriba/abajo no llevan texto)
        card.classList.toggle('cg-cap', vVis / r.height >= 0.7);
      });
    };
    update();
    const raf = requestAnimationFrame(update);
    window.addEventListener('resize', update);

    // --- solo mobile: arrancar centrado + un empujoncito sutil al entrar en vista (sin texto) ---
    const isMobile = window.matchMedia('(max-width: 900px)').matches;
    let io: IntersectionObserver | null = null;
    let nudgeT = 0;
    let interacted = false;
    const center = () => {
      collage.scrollLeft = (collage.scrollWidth - collage.clientWidth) / 2;
    };
    const onTouch = () => {
      interacted = true;
    };
    if (isMobile) {
      requestAnimationFrame(center);
      collage.addEventListener('touchstart', onTouch, { passive: true });
      io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !interacted) {
            center();
            const base = collage.scrollLeft;
            collage.scrollTo({ left: base + 38, behavior: 'smooth' }); // empujoncito → "se mueve"
            nudgeT = window.setTimeout(
              () => collage.scrollTo({ left: base, behavior: 'smooth' }),
              620
            );
            io?.disconnect();
          }
        },
        { threshold: 0.55 }
      );
      io.observe(collage);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', update);
      io?.disconnect();
      collage.removeEventListener('touchstart', onTouch);
      if (nudgeT) clearTimeout(nudgeT);
    };
  }, []);

  return (
    <section className="block problem problem-collage" aria-labelledby="prob-h">
      <div className="container collage-head">
        <div className="sec-head center">
          <h2 id="prob-h">Lo conocemos de memoria</h2>
          <p>Lo bueno, lo tedioso y lo de las 11 de la noche. Manzax está hecho para todo esto.</p>
        </div>
      </div>
      <div className="collage-wrap">
        <div className="collage" aria-hidden="true" ref={collageRef}>
          <div className="collage-plane">
          {grid.map((col, ci) => (
            <div className="collage-col" key={ci}>
              {col.map((slug, ri) => (
                <figure
                  className="cg-card has-cap"
                  key={`${ci}-${ri}`}
                  // --i barajado (índice * 17 mod 44) → las que se iluminan a la vez quedan dispersas
                  style={{ ['--i' as string]: ((ci * ROWS + ri) * 17) % (COLS * ROWS) }}
                >
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
    </div>
    </section>
  );
}
