import PageHero from '../../../components/PageHero';
import CtaBanner from '../../../components/CtaBanner';

export const metadata = {
  title: 'Restaurant ERP Software',
  description:
    'Scalable, modular solutions for restaurant management — inventory, procurement, payroll & HR, financial reporting, and general ledger across single outlets and chains.',
};

export default function RestaurantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries · Restaurants"
        title="ACE Financials for Restaurants"
        lede="From a single outlet to a multi-outlet chain, ACE provides scalable and modular solutions for effective restaurant management — one platform across every location."
      />

      <section className="block">
        <div className="wrap split">
          <div className="prose">
            <p className="eyebrow">Restaurant operations</p>
            <h2 style={{ marginBottom: '18px' }}>Every outlet, one system</h2>
            <p>
              ACE offers a complete suite for restaurant management: inventory and materials
              management, procurement, payroll &amp; HR, financial reporting, and general ledger
              operations. The integrated platform streamlines daily workflows, reduces manual work,
              and provides real-time insight into all restaurant outlets.
            </p>
            <h3>Individual restaurants</h3>
            <p>
              Responding to the ever-growing specialisation in the restaurant industry, ACE offers
              the flexibility to fulfil the requirements of your individual market. The
              easy-to-install system combines user-friendly modules for Backoffice, Payroll &amp;
              HR, Fixed Assets, materials control, online booking and more into one comprehensive,
              integrated solution.
            </p>
            <h3>Chains of restaurants</h3>
            <p>
              The ACE Enterprise Solution is designed for the demanding environments of chain
              restaurants — sharing information across multiple applications and properties on a
              single database, with central modules and a CRM package built specifically for the
              restaurant industry.
            </p>
          </div>
          <div>
            <div className="card">
              <h3>What you get</h3>
              <ul className="checks">
                <li>Process automation across outlets</li>
                <li>100+ reports out of the box</li>
                <li>Recipe-level costing and materials control</li>
                <li>Highly scalable with a variety of deployment options</li>
                <li>Central systems for corporate management</li>
                <li>More than 100 certified interfaces, including POS</li>
                <li>Greater customer satisfaction and loyalty</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Run every outlet from one back office" />
    </>
  );
}
