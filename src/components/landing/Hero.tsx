import { Check } from 'lucide-react';
import BrandLogo from './BrandLogo';
import ProductMockup from './ProductMockup';

export default function Hero() {
  return (
    <section className="hero dark-zone" id="producto">
      <div className="container hero-grid">
        <div>
          <div className="hero-meta">
            <span className="lockup-md">
              <BrandLogo size={11} />
              <span className="word">
                manzax <em>consorcio</em>
              </span>
            </span>
            <span className="status-chip">
              <span className="dot" />
              beta privada
            </span>
          </div>

          <h1>
            Administrá tus consorcios con la <em>cabeza despejada</em>.
          </h1>

          <p className="lede">
            Liquidaciones a tiempo, cobranzas al día y vecinos al tanto. Tu administración profesional, con
            menos tareas mecánicas. Vecinos contentos, vos en paz.
          </p>

          <div className="hero-actions">
            <a href="#precios" className="btn btn-primary">
              Pedir acceso a la beta →
            </a>
            <a href="#features" className="btn btn-ghost">
              Cómo funciona
            </a>
          </div>

          <div className="micro-trust">
            <span>
              <Check size={14} strokeWidth={2.5} /> Acceso anticipado
            </span>
            <span className="dot" />
            <span>3 meses gratis</span>
          </div>
        </div>

        <ProductMockup />
      </div>
    </section>
  );
}
