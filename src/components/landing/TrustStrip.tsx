import type { ReactNode } from 'react';

const iconProps = {
  className: 'promise-ico',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const promises: { icon: ReactNode; text: string }[] = [
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    text: 'Migración fácil',
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 9.9-1" />
      </svg>
    ),
    text: 'Sin contrato anual',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    text: 'Datos exportables siempre',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    text: 'Soporte humano por WhatsApp',
  },
];

export default function TrustStrip() {
  return (
    <div className="trust-strip dark-zone">
      <div className="container trust-row">
        {promises.map((p) => (
          <div className="trust-cell" key={p.text}>
            {p.icon}
            <div className="promise-text">{p.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
