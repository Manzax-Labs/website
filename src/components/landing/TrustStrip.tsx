import type { ReactNode } from 'react';
import { IconGlobe, IconShield, IconMigrate, IconChat, IconRefresh } from './Icons';

const items: { icon: ReactNode; text: ReactNode }[] = [
  { icon: <IconGlobe />, text: <b>Hecho en Argentina</b> },
  {
    icon: <IconShield />,
    text: (
      <>
        Pensado para la <b>Ley 941</b>
      </>
    ),
  },
  { icon: <IconMigrate />, text: <b>Migración incluida</b> },
  {
    icon: <IconChat />,
    text: (
      <>
        Soporte <b>humano</b>
      </>
    ),
  },
  { icon: <IconRefresh />, text: <b>Sin permanencia</b> },
];

export default function TrustStrip() {
  return (
    <div className="trust">
      <div className="container">
        <div className="row">
          {items.map((it, i) => (
            <span key={i}>
              {it.icon} {it.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
