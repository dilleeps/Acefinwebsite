import PageHero from '../../components/PageHero';
import CtaBanner from '../../components/CtaBanner';
import { CUSTOMERS } from '../../lib/site';

export const metadata = {
  title: 'Our Customers',
  description:
    'Explore our growing list of customers across the Middle East and India — Westin, Le Méridien, Sheraton, Kempinski, Aloft, and many more hospitality leaders.',
};

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Customers"
        title="Trusted by leading properties across the Middle East and India"
        lede="Some of the top hospitality businesses in the world manage their properties and operations with ACE back office software."
      />

      <section className="block">
        <div className="wrap">
          {Object.entries(CUSTOMERS).map(([region, names]) => (
            <div className="cust-region" key={region}>
              <p className="eyebrow">{region}</p>
              <h2 style={{ marginBottom: '26px' }}>
                {names.length} properties in {region === 'India' ? 'India' : 'the Middle East'}
              </h2>
              <div className="cust-grid">
                {names.map((n) => (
                  <div className="cust" key={n}>
                    {n}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner title="Join 40+ properties running on ACE" />
    </>
  );
}
