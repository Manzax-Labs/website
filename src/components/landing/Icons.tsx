/**
 * Íconos de línea (stroke) del diseño nuevo. Todos heredan color vía `currentColor`
 * y comparten la clase `.icn` (definida en index.css). aria-hidden por defecto:
 * son decorativos, el significado lo da el texto que acompañan.
 */
type IconProps = { className?: string };

const base = (className = 'icn') => ({
  viewBox: '0 0 24 24',
  className,
  'aria-hidden': true as const,
});

export const IconCheck = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const IconArrow = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const IconGlobe = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);

export const IconShield = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 3 4 6v6c0 4 3.5 7 8 9 4.5-2 8-5 8-9V6z" />
  </svg>
);

export const IconShieldCheck = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 3 4 6v6c0 4 3.5 7 8 9 4.5-2 8-5 8-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconMigrate = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M3 7h13l-3-3M21 17H8l3 3" />
  </svg>
);

export const IconChat = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.3L3 21l1.2-3.6A8.4 8.4 0 1 1 21 11.5z" />
  </svg>
);

export const IconWhatsapp = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.3L3 21l1.2-3.6A8.4 8.4 0 1 1 21 11.5z" />
    <path d="M8.5 9.5c.5 2 2 3.5 4 4l1.2-1.2 2 .8v2c-3.5.5-7-3-6.5-6.5z" />
  </svg>
);

export const IconRefresh = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M9 11l3 3 8-8" />
    <path d="M21 12a9 9 0 1 1-6.2-8.5" />
  </svg>
);

export const IconClock = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 8v4l3 2" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);
