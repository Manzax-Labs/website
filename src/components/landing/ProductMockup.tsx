import BrandLogo from './BrandLogo';

function BuildingIco() {
  return (
    <svg className="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="3" width="12" height="11" rx="1" />
      <path d="M5 6h2M9 6h2M5 9h2M9 9h2" />
    </svg>
  );
}

const expenses = [
  { cat: 'Sueldos encargado', uni: 'cat. 4', amt: '$ 1.482.000' },
  { cat: 'Aysa · servicio agua', uni: 'nov', amt: '$ 312.480' },
  { cat: 'Mantenimiento ascensor', uni: 'contrato', amt: '$ 285.000' },
  { cat: 'Limpieza · proveedor', uni: 'B 003-00021', amt: '$ 198.420' },
  { cat: 'Reparación bomba presurizadora', uni: 'extraordinaria', amt: '$ 540.000' },
];

/** Mockup del producto que acompaña al hero. Markup estático, decorativo. */
export default function ProductMockup() {
  return (
    <div className="mockup" aria-hidden="true">
      <div className="mockup-bar">
        <span className="dot" style={{ background: '#E55F4F' }} />
        <span className="dot" style={{ background: '#E5B83F' }} />
        <span className="dot" style={{ background: '#5FAE6A' }} />
        <span className="url">app.manzax.com/consorcio/edificio-cabildo-2400/liquidacion</span>
      </div>
      <div className="mockup-app">
        <aside className="app-side">
          <div className="lockup">
            <BrandLogo size={6} />
            <span className="word">
              manzax <em>consorcio</em>
            </span>
          </div>
          <div className="group-label">edificios</div>
          <div className="nav-item active">
            <BuildingIco />
            Cabildo 2400
          </div>
          <div className="nav-item">
            <BuildingIco />
            Soler 3850
          </div>
          <div className="nav-item">
            <BuildingIco />
            Honduras 4912
          </div>
          <div className="group-label" style={{ marginTop: '10px' }}>
            gestión
          </div>
          <div className="nav-item">Liquidaciones</div>
          <div className="nav-item">Pagos</div>
          <div className="nav-item">Proveedores</div>
          <div className="nav-item">Reportes</div>
        </aside>
        <main className="app-main">
          <div className="app-crumbs">CABILDO 2400 / LIQUIDACIÓN / DICIEMBRE 2026</div>
          <div className="app-h">
            <h3>Liquidación · Diciembre 2026</h3>
            <span className="btn-mini">generar expensas →</span>
          </div>
          <div className="stat-grid">
            <div className="stat">
              <div className="label">Total</div>
              <div className="val">$ 4.812.350</div>
            </div>
            <div className="stat">
              <div className="label">Unidades</div>
              <div className="val">42</div>
            </div>
            <div className="stat">
              <div className="label">Vs. nov</div>
              <div className="val pos">+2,1%</div>
            </div>
          </div>
          <div className="table">
            {expenses.map((row) => (
              <div className="table-row" key={row.cat}>
                <span className="cat">{row.cat}</span>
                <span className="uni">{row.uni}</span>
                <span className="amt">{row.amt}</span>
              </div>
            ))}
            <div className="table-row">
              <span className="cat" style={{ fontWeight: 600 }}>
                Liquidación
              </span>
              <span className="uni">42 propietarios</span>
              <span className="badge-status">enviada</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
