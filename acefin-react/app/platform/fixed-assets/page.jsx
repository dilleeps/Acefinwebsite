import PageHero from '../../../components/PageHero';
import CtaBanner from '../../../components/CtaBanner';

export const metadata = {
  title: 'Fixed Asset Management Software',
  description:
    'Track and control assets electronically — multiple depreciation methods, RFID and barcode tracking, automated audits, and GL-integrated asset accounting.',
};

export default function FixedAssetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Fixed Assets"
        title="ACE Fixed Assets"
        lede="An efficient, accurate solution to track and control your assets electronically — location, quantity, condition, maintenance, and depreciation across the full lifecycle."
      />

      <section className="block">
        <div className="wrap split">
          <div className="prose">
            <h2 style={{ marginBottom: '18px' }}>Full lifecycle asset management</h2>
            <p>
              Companies face significant challenges tracking the location, quantity, condition,
              maintenance, and depreciation status of their assets. ACE Fixed Assets provides a
              systematic process for maintaining, upgrading, and managing physical assets — with
              comprehensive, cost-effective physical audits and efficient inventory management.
            </p>
            <h3>RFID-based asset management &amp; auditing</h3>
            <p>
              ACE Fixed Assets supports comprehensive RFID tracking, compatible with passive and
              active tags, and integrates with handheld readers, fixed readers, and mobile devices.
              Track asset movement in real time, automate audits, and maintain historical usage
              logs — with updates synced to depreciation, maintenance schedules, and reporting.
            </p>
            <ul className="checks">
              <li>Supports passive &amp; active RFID tags</li>
              <li>Works with handheld, fixed, and mobile readers</li>
              <li>Real-time asset location and movement tracking</li>
              <li>Automated physical audits with historical logs</li>
            </ul>
          </div>
          <div>
            <div className="card">
              <h3>Key features</h3>
              <ul className="checks">
                <li>Multiple depreciation methods — straight-line, WDV, custom</li>
                <li>Real-time tracking with RFID and barcodes</li>
                <li>Automated audit trails and physical verification logs</li>
                <li>Asset register, movement, maintenance, and disposal reports</li>
                <li>Integration with financial modules for GL postings</li>
                <li>Maintenance scheduling and alerts for asset upkeep</li>
                <li>Customizable asset categories and tagging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Get a demo with the Fixed Asset team" />
    </>
  );
}
