import type { CSSProperties, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

/** Sección estática de la landing (fiel al original, sin animación de scroll). */
export default function Section({ children, className, id, style }: SectionProps) {
  return (
    <section className={className} id={id} style={style}>
      {children}
    </section>
  );
}
