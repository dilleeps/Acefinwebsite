import Link from 'next/link';
import PageHero from '../../components/PageHero';
import DemoForm from '../../components/DemoForm';

export const metadata = {
  title: 'Partner with ACE Financials',
  description:
    'Become a channel partner or re-seller — attractive discounts, professional services revenue, sales tools, partner training, and joint marketing opportunities.',
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Become a channel partner / re-seller"
        lede="Partner with ACE Financials Technology LLC and build a new revenue stream around an award-winning hospitality ERP."
      />

      <section className="block">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Benefits</p>
            <h2 style={{ marginBottom: '10px' }}>Why partner with ACE</h2>
            <ul className="checks">
              <li>Attractive discounts on ACE Financials products</li>
              <li>Sell your professional services for additional revenue streams and value-add to your customers</li>
              <li>Participate in ACE product special programs</li>
              <li>Flexible purchase options — online or via purchase order</li>
              <li>Minimum program requirements: become a member fast and start earning sooner</li>
              <li>Access to sales tools and partner training</li>
              <li>Joint marketing opportunities</li>
              <li>Listing in the Partner section of the ACE Financials website</li>
            </ul>
            <p style={{ color: 'var(--ink-soft)', marginTop: '26px' }}>
              Questions first? <Link href="/contact/" style={{ color: 'var(--accent)', fontWeight: 600 }}>Get in touch</Link> and
              we&rsquo;ll walk you through the program.
            </p>
          </div>
          <DemoForm heading="Register as a partner" />
        </div>
      </section>
    </>
  );
}
