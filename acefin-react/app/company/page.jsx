import PageHero from '../../components/PageHero';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
  title: 'About ACE Financials',
  description:
    'A leading IT solutions provider since 2002 for hospitality, manufacturing, loyalty, bespoke software development, and data warehousing — with offices in UAE, India, and the US.',
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Global expertise in hospitality software since 2002"
        lede="ACE Financials is a leading IT solutions provider for hospitality, manufacturing, loyalty, bespoke software development, and data warehousing."
      />

      <section className="block">
        <div className="wrap split">
          <div className="prose">
            <h2 style={{ marginBottom: '18px' }}>About us</h2>
            <p>
              Founded in 2002 and headquartered in India, ACE Financials today has global offices in
              the US and UAE. We have built a reputation implementing hospitality solutions across
              major hotels internationally, while also developing and customizing solutions for
              clients in the manufacturing sector.
            </p>
            <h3>Services</h3>
            <p>
              Beyond our product suite, we deliver modern Business Intelligence and Data
              Warehousing using Microsoft SQL Server and Power BI — optimized data models, fast
              query performance, and scalable reporting. We also support and modernize legacy BI
              stacks such as Cognos, Informatica, and Crystal Reports.
            </p>
            <h3>Support commitment</h3>
            <p>
              No solution deploys successfully without the right people behind it. Our consultants
              bring over 200 man-years of combined experience, with structured support via phone,
              email, and remote access — onsite and remote issue resolution to high standards.
            </p>
          </div>
          <div>
            <div className="card">
              <h3>Why choose ACE</h3>
              <ul className="checks">
                <li>20+ years of established expertise in hospitality</li>
                <li>Global presence, local support</li>
                <li>Solutions for hotels, restaurants, retail, stadiums, arenas, theme parks, casinos, and cruise ships</li>
                <li>Strong customer base with an impressive list of references</li>
                <li>Scalable products serving all customer sizes</li>
                <li>Single and multi-site environments</li>
                <li>Fast implementation, low administration complexity</li>
                <li>Proven integration experience</li>
                <li>Company-internal training centre</li>
                <li>Value creation through innovation &amp; consultative selling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="block tinted" id="careers">
        <div className="wrap">
          <div className="block-head">
            <div>
              <p className="eyebrow">Careers</p>
              <h2>Help us disrupt the world of hotel business software</h2>
              <p className="lede">
                ACE Financials is a global player and a playing ground for great people with
                innovative ideas — with a high level of freedom to explore and grow, and the
                customer as the single point of focus.
              </p>
            </div>
          </div>
          <div className="card-grid two">
            <div className="card">
              <h3>Open role: Consultant — Enterprise Solutions</h3>
              <p>
                Drive business growth in the region, enable partners, and provide support in the
                form of proposals, pricing, and demos. Interact with teams globally to fine-tune the
                offering to market needs.
              </p>
              <ul className="checks">
                <li>10+ years in pre-sales &amp; implementation with a proven track record on large enterprise deals</li>
                <li>3+ years of end-to-end ERP or cloud ERP implementation for large corporations</li>
                <li>Excellent rapport with key customer stakeholders</li>
                <li>Exceptional communication and presentation skills</li>
                <li>Self-directed and motivated; willingness for extensive travel</li>
              </ul>
            </div>
            <div className="card">
              <h3>How to apply</h3>
              <p>
                Send your resume to{' '}
                <a href="mailto:hr@acefinancials.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                  hr@acefinancials.com
                </a>{' '}
                with the role in the subject line. The best of you will get the better of
                competitive compensation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
