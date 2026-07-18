import PageHero from '../../../components/PageHero';
import CtaBanner from '../../../components/CtaBanner';

export const metadata = {
  title: 'Loyalty Program Software',
  description:
    'Engage customers, boost repeat business, and reward loyalty — plan management, engagement tracking, and analytics in one integrated solution.',
};

export default function LoyaltyPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Loyalty"
        title="ACE Loyalty"
        lede="Engage your customers, boost repeat business, and reward loyalty with an integrated solution combining loyalty management and customer engagement."
      />

      <section className="block">
        <div className="wrap">
          <div className="prose" style={{ marginBottom: '46px' }}>
            <p>
              ACE Loyalty empowers businesses to retain customers, increase repeat sales, and
              deliver personalized rewards. Whether you operate a single location or multiple
              properties, ACE Loyalty ensures your customers feel valued at every touchpoint.
            </p>
          </div>
          <div className="card-grid">
            <div className="card">
              <h3>Loyalty plan management</h3>
              <ul className="checks">
                <li>Configure multiple plans for different customer segments</li>
                <li>Create point accrual rules and redemption thresholds</li>
                <li>Set expiration dates and bonus point promotions</li>
              </ul>
            </div>
            <div className="card">
              <h3>Customer engagement</h3>
              <ul className="checks">
                <li>Track customer activity and reward points</li>
                <li>Monitor behavior and participation in real time</li>
                <li>Send personalized offers and promotions automatically</li>
              </ul>
            </div>
            <div className="card">
              <h3>Reporting &amp; analytics</h3>
              <ul className="checks">
                <li>Monitor program effectiveness with detailed analytics</li>
                <li>Track redemption rates and customer retention metrics</li>
                <li>Generate reports for marketing and operational insight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Turn first-time guests into regulars" />
    </>
  );
}
