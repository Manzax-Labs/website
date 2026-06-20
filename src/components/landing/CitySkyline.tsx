/**
 * Horizonte de ciudad en SVG, full-width, anclado al piso del panel de signup.
 * Reemplaza la ilustración PNG (que flotaba centrada y desconectada) por una
 * línea de horizonte que es la base sobre la que se apoya el contenido.
 *
 * Un edificio queda destacado (relleno teal + ventanas encendidas + glow): conecta
 * con el copy "Empezá con un edificio". El resto son contornos tenues de fondo.
 * Es decorativo (aria-hidden) y vectorial (nítido a cualquier ancho).
 */

type Building = {
  x: number;
  w: number;
  h: number;
  cols: number;
  floors: number;
  highlight?: boolean;
};

const FLOOR = 186; // línea de piso en el viewBox (0 0 1200 200)

// Skyline fijo (sin azar): alturas/anchos variados, el destacado más alto, a la izq-centro.
const BUILDINGS: Building[] = [
  { x: 24, w: 80, h: 98, cols: 2, floors: 4 },
  { x: 112, w: 98, h: 134, cols: 3, floors: 5 },
  { x: 218, w: 60, h: 76, cols: 2, floors: 3 },
  { x: 286, w: 72, h: 112, cols: 2, floors: 4 },
  { x: 366, w: 108, h: 158, cols: 3, floors: 6, highlight: true },
  { x: 482, w: 76, h: 96, cols: 2, floors: 4 },
  { x: 566, w: 92, h: 130, cols: 3, floors: 5 },
  { x: 666, w: 58, h: 80, cols: 2, floors: 3 },
  { x: 732, w: 100, h: 148, cols: 3, floors: 6 },
  { x: 840, w: 72, h: 104, cols: 2, floors: 4 },
  { x: 920, w: 90, h: 126, cols: 3, floors: 5 },
  { x: 1018, w: 60, h: 84, cols: 2, floors: 3 },
  { x: 1086, w: 90, h: 118, cols: 3, floors: 5 },
];

type Win = { x: number; y: number; w: number; h: number; on: boolean };

function windowsFor(b: Building): Win[] {
  const top = FLOOR - b.h;
  const pad = 9;
  const ax = b.x + pad;
  const aw = b.w - pad * 2;
  const ay = top + pad;
  const ah = b.h - pad * 2 - (b.highlight ? 18 : 6); // deja lugar a la puerta en el destacado
  const gx = 6;
  const gy = 7;
  const ww = (aw - (b.cols - 1) * gx) / b.cols;
  const rh = (ah - (b.floors - 1) * gy) / b.floors;
  const wh = Math.min(rh, 13);
  const wins: Win[] = [];
  for (let r = 0; r < b.floors; r++) {
    for (let c = 0; c < b.cols; c++) {
      // patrón de luces encendidas determinístico (sin azar): la mayoría on, algunas off
      const on = (r * b.cols + c + (b.highlight ? 0 : 1)) % 3 !== 0;
      wins.push({ x: ax + c * (ww + gx), y: ay + r * (rh + gy), w: ww, h: wh, on });
    }
  }
  return wins;
}

const hi = BUILDINGS.find((b) => b.highlight)!;
const hiCx = hi.x + hi.w / 2;
const hiTop = FLOOR - hi.h;

// índice de la ventana cálida en el edificio destacado (fila baja, columna central → bien visible)
const WARM_WINDOW = 13;

export default function CitySkyline() {
  return (
    <svg
      className="skyline-svg"
      viewBox="0 0 1200 200"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="sky-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7ad8b4" stopOpacity="0.7" />
          <stop offset="40%" stopColor="#5dcaa5" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#5dcaa5" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* glow detrás del edificio destacado — le da foco y lo despega del fondo */}
      <ellipse
        cx={hiCx}
        cy={hiTop + hi.h * 0.5}
        rx={hi.w * 2.1}
        ry={hi.h * 0.95}
        fill="url(#sky-glow)"
      />
      {/* reflejo de la luz del edificio sobre el piso (toque premium) */}
      <ellipse cx={hiCx} cy={FLOOR + 1} rx={hi.w * 1.15} ry="10" fill="url(#sky-glow)" />

      {/* línea de horizonte / piso, full-width */}
      <line
        x1="0"
        y1={FLOOR + 0.5}
        x2="1200"
        y2={FLOOR + 0.5}
        stroke="#9fe1cb"
        strokeOpacity="0.32"
        strokeWidth="1.5"
      />

      {BUILDINGS.map((b, i) => {
        const top = FLOOR - b.h;
        const wins = windowsFor(b);
        if (b.highlight) {
          const doorW = 16;
          return (
            <g key={i}>
              <rect
                x={b.x}
                y={top}
                width={b.w}
                height={b.h}
                rx="3"
                fill="#5dcaa5"
                fillOpacity="0.2"
                stroke="#d4f1e3"
                strokeOpacity="1"
                strokeWidth="1.7"
              />
              {/* antena en la azotea */}
              <line
                x1={hiCx}
                y1={top}
                x2={hiCx}
                y2={top - 12}
                stroke="#bdeeda"
                strokeOpacity="0.8"
                strokeWidth="1.5"
              />
              {wins.map((w, j) => {
                // una sola ventana cálida (ámbar): "acá hay alguien — este es tu edificio"
                const warm = j === WARM_WINDOW;
                return (
                  <rect
                    key={j}
                    x={w.x}
                    y={w.y}
                    width={w.w}
                    height={w.h}
                    rx="1"
                    fill={warm ? '#f7d08a' : '#cdf3e2'}
                    fillOpacity={warm ? 0.98 : w.on ? 0.92 : 0.4}
                  />
                );
              })}
              {/* puerta */}
              <rect
                x={hiCx - doorW / 2}
                y={FLOOR - 16}
                width={doorW}
                height={16}
                rx="1.5"
                fill="#cdf3e2"
                fillOpacity="0.85"
              />
            </g>
          );
        }
        // edificios de fondo: contorno tenue + ventanas apenas insinuadas (las "off" no se dibujan)
        // → el destacado es el único que "vive", el resto es horizonte lejano.
        return (
          <g key={i}>
            <rect
              x={b.x}
              y={top}
              width={b.w}
              height={b.h}
              rx="2.5"
              fill="none"
              stroke="#9fe1cb"
              strokeOpacity="0.24"
              strokeWidth="1.2"
            />
            {wins
              .filter((w) => w.on)
              .map((w, j) => (
                <rect
                  key={j}
                  x={w.x}
                  y={w.y}
                  width={w.w}
                  height={w.h}
                  rx="1"
                  fill="#9fe1cb"
                  fillOpacity="0.1"
                />
              ))}
          </g>
        );
      })}
    </svg>
  );
}
