interface BrandLogoProps {
  /** Lado del cuadro en px (el viewBox es cuadrado). Por defecto 12. */
  size?: number;
}

/**
 * Isotipo Manzax: cuatro cuadrados rotados 45°.
 * No define `fill` propio — el color lo hereda del contexto vía CSS
 * (`.brand svg rect`, `.lockup-md svg rect`, `.next-card.turnos svg rect`, etc.).
 */
export default function BrandLogo({ size = 12 }: BrandLogoProps) {
  return (
    <svg viewBox="-25 -25 150 150" width={size} height={size} aria-hidden="true" focusable="false">
      <g transform="rotate(45 50 50)">
        <rect x="8" y="8" width="36" height="36" rx="4" />
        <rect x="56" y="8" width="36" height="36" rx="4" />
        <rect x="8" y="56" width="36" height="36" rx="4" />
        <rect x="56" y="56" width="36" height="36" rx="4" />
      </g>
    </svg>
  );
}
