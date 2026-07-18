import PageHero from '../../../components/PageHero';
import CtaBanner from '../../../components/CtaBanner';

export const metadata = {
  title: 'Business Analytics & Power BI Reporting',
  description:
    'Real-time insights for smarter business decisions — direct MS SQL Server connectivity, Power BI dashboards, and configurable reporting for finance, operations, and sales.',
};

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Analytics"
        title="Real-time insights for smarter business decisions"
        lede="Integrate all your financial data with ACE Financials and visualize actionable insights instantly — no exports, no manual consolidation."
      />

      <section className="block">
        <div className="wrap split">
          <div className="prose">
            <h2 style={{ marginBottom: '18px' }}>Financial reporting without the hassle</h2>
            <p>
              Financial reporting is the most important activity in any business — gathering,
              calculating, and arranging data across actuals, budgeting, forecasting, last-year
              variance, and best/worst indicators. Done by hand, it takes serious time and
              expertise.
            </p>
            <p>
              ACE Financials delivers business analytics software with extensive data science and a
              very low learning curve — end-to-end analytics from reports and visualization to
              sophisticated predictive analysis.
            </p>
            <h3>Direct database connectivity &amp; reporting</h3>
            <p>
              ACE Analytics integrates directly with your back office software, built on
              ASP.NET/C# and MS SQL Server. That enables real-time data access without intermediate
              imports or manual consolidation — your analytics are always current, automated, and
              actionable.
            </p>
          </div>
          <div>
            <div className="card">
              <h3>What&rsquo;s included</h3>
              <ul className="checks">
                <li>Direct connection to MS SQL Server for accurate, up-to-date data</li>
                <li>Power BI integration for dashboards, visualizations, and ad-hoc reporting</li>
                <li>Configurable reporting templates for finance, operations, and sales</li>
                <li>Seamless integration with existing PMS, POS, and ERP systems</li>
                <li>Drill-down analysis across financial and operational data</li>
                <li>Optimized data models and fast query performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Put a live dashboard in front of your team" />
    </>
  );
}
