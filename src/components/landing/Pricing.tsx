import { Check } from 'lucide-react';
import Section from './Section';

const includes = [
  'Todas las funciones',
  'Migración asistida con IA',
  'Soporte por WhatsApp',
  'Sin permanencia',
];

export default function Pricing() {
  return (
    <Section className="block" id="precios">
      <div className="container price-row">
        <div>
          <div className="eyebrow">Precios</div>
          <h2 className="section-title">
            Pagás por unidad,
            <br />
            no por administrador.
          </h2>
          <p className="section-lede" style={{ marginTop: '14px' }}>
            Plan único, sin escalones, sin "llamanos para hablar de enterprise". Pagás por unidad funcional
            administrada — el costo se diluye en la expensa de cada vecino.
          </p>
          <p className="mono" style={{ fontSize: '13px', color: 'var(--ink-3)', marginTop: '18px' }}>
            migración con ia · whatsapp · soporte humano · sin permanencia
          </p>
        </div>
        <div className="price-card">
          <div className="from">precio post-beta</div>
          <div className="amount">
            <span className="big">$ 1.425</span>
            <span className="unit">+ IVA / unidad / mes</span>
          </div>
          <div className="note">
            Durante la beta privada el acceso es sin costo. Cuando lancemos, plan único con todas las funciones.
          </div>
          <ul>
            {includes.map((item) => (
              <li key={item}>
                <Check size={14} strokeWidth={2.5} /> {item}
              </li>
            ))}
          </ul>
          <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Pedir acceso a la beta
          </a>
        </div>
      </div>
    </Section>
  );
}
