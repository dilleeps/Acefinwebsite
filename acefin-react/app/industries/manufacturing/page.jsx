import PageHero from '../../../components/PageHero';
import CtaBanner from '../../../components/CtaBanner';

export const metadata = {
  title: 'Manufacturing ERP Software',
  description:
    'Tailored solutions to optimize production, inventory, and supply chain operations — MRP, production scheduling, procurement, quality control, and financial management.',
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries · Manufacturing"
        title="ACE Financials for Manufacturing"
        lede="From raw material management to shop floor tracking — reduce downtime, improve efficiency, and make data-driven decisions across all manufacturing sites."
      />

      <section className="block">
        <div className="wrap">
          <div className="prose" style={{ marginBottom: '46px' }}>
            <p>
              ACE Financials for Manufacturing provides tailored solutions to optimize production,
              inventory, and supply chain operations. With scalable modules for procurement,
              production planning, quality control, and financial management, ACE ensures smooth
              operations across all manufacturing sites.
            </p>
            <p>
              Highly user-friendly screens with online help and single-point data entry for all
              corporate data ensure ease of operation and transition — and the platform&rsquo;s
              flexible business rules and workflow engineering mean it keeps supporting you as your
              business evolves, with minimal IT intervention.
            </p>
          </div>
          <div className="card-grid">
            <div className="card">
              <h3>Production</h3>
              <ul className="checks">
                <li>Real-time production monitoring</li>
                <li>Material Requirements Planning (MRP)</li>
                <li>Costing per product / batch</li>
                <li>Production scheduling optimization</li>
              </ul>
            </div>
            <div className="card">
              <h3>Inventory &amp; procurement</h3>
              <ul className="checks">
                <li>Supplier &amp; purchase order management</li>
                <li>Raw material inventory tracking</li>
                <li>Supply chain visibility across sites</li>
              </ul>
            </div>
            <div className="card">
              <h3>Finance</h3>
              <ul className="checks">
                <li>Automatic GL distribution for AR, AP, and materials transactions</li>
                <li>Unlimited user license</li>
                <li>Online costing with drill-down</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Boost operations with ACE — fast results" />
    </>
  );
}
