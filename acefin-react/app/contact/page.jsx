import PageHero from '../../components/PageHero';
import DemoForm from '../../components/DemoForm';
import { OFFICES } from '../../lib/site';

export const metadata = {
  title: 'Contact Us',
  description:
    'Let our specialists help you determine if ACE is the right solution for you — offices in Dubai, Chennai, and Tampa.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lede="Learn how ACE Financials can help you run your entire hotel business better. An ACE product specialist will contact you within 24 hours."
      />

      <section className="block">
        <div className="wrap">
          <div className="offices" style={{ marginBottom: '64px' }}>
            {OFFICES.map((o) => (
              <div className="office" key={o.region}>
                <p className="region">{o.region}</p>
                <h3>{o.name}</h3>
                {o.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
                {o.phones.map((p) => (
                  <p key={p.href}>
                    <a href={p.href}>{p.label}</a>
                  </p>
                ))}
                <p>
                  <a href={`mailto:${o.email}`}>{o.email}</a>
                </p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <DemoForm heading="Request a demo or consultation" />
          </div>
        </div>
      </section>
    </>
  );
}
