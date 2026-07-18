import PageHero from '../../../components/PageHero';
import CtaBanner from '../../../components/CtaBanner';

export const metadata = {
  title: 'Hotel ERP Software',
  description:
    "ACE's modular, scalable software meets unique hotel business needs — online F&B costing, online P&L with drill-down, payroll, fixed assets, and spa management.",
};

export default function HotelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries · Hotels"
        title="ACE Financials for Hotels"
        lede="Streamline F&B costing, Profit & Loss, and financial management across your properties — from a single boutique hotel to an international, multi-branded chain."
      />

      <section className="block">
        <div className="wrap split">
          <div className="prose">
            <p className="eyebrow">Property &amp; central solutions</p>
            <h2 style={{ marginBottom: '18px' }}>One solution, fitted to your property</h2>
            <p>
              ACE offers a wide range of scalable and modular property and central solutions for
              effective hotel management, including online F&amp;B costing and online Profit &amp;
              Loss with drill-down. The portfolio encompasses Backoffice, Payroll &amp; HR, Fixed
              Assets, and Spa &amp; Health Club.
            </p>
            <p>
              With more than 100 certified interfaces to other systems, we ensure the best
              connectivity and smooth-running business processes.
            </p>
            <h3>Individual hotels</h3>
            <p>
              Just as every property has its own flair, every business has its own specific needs.
              Whether you run a resort or city hotel, a family-run boarding house, a luxurious spa,
              a deluxe or a budget hotel — ACE adapts to your needs with process automation, 100+
              reports, and greater guest satisfaction and loyalty.
            </p>
            <h3>Chains of hotels</h3>
            <p>
              The ACE Enterprise Solution lets hotel operators share information across multiple
              applications and properties on a single database — highly scalable, with a variety of
              deployment options and central systems for corporate management, plus a CRM package
              designed specifically for the hotel industry.
            </p>
            <h3>Wellness &amp; spa</h3>
            <p>
              ACE combines spa management technology, visitor management, and POS systems into one
              comprehensive, integrated solution for wellness and spa businesses.
            </p>
          </div>
          <div>
            <div className="card">
              <h3>Why hotels choose ACE Financials</h3>
              <ul className="checks">
                <li>In the market since 2002 — proven across major international hotels</li>
                <li>100% web-based software, nothing to install</li>
                <li>Document management — achieve a paperless office</li>
                <li>Workflow management with online/email approval, showing budget, actual &amp; committed</li>
                <li>Automatic GL distribution for AR, AP, and materials transactions</li>
                <li>Unlimited user license</li>
                <li>Online costing with drill-down</li>
                <li>Balance sheet, supplier statement, and bank reconciliation</li>
                <li>Built-in General Cashier and working replacement modules</li>
                <li>Single server for all back office needs — saving OS, database, and maintenance cost</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="See ACE running in a hotel like yours" />
    </>
  );
}
