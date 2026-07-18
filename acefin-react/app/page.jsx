import Link from 'next/link';
import CtaBanner from '../components/CtaBanner';
import { LIVE_DEMO_URL } from '../lib/site';

export const metadata = {
  title: 'Hospitality ERP with Daily P&L Clarity | ACE Financials Technology',
  description:
    'The web-based hotel ERP trusted by 40+ properties — daily P&L with drill-down, faster close, and ROI within a year across finance, procurement, payroll & HR, and fixed assets.',
};

const MODULES = [
  {
    title: 'Financials & GL',
    text: 'Online P&L with drill-down to source documents. Budgets vs. actuals reviewed daily by every HOD.',
    icon: <path d="M3 17V9M8 17V3M13 17v-6M18 17V7" />,
    href: '/industries/hotels/',
  },
  {
    title: 'Procurement & Materials',
    text: 'Purchase-to-pay with inventory control, recipe costing, and supplier management across properties.',
    icon: (
      <path d="M3 5h14l-1.5 8h-11zM6 17a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
    ),
    href: '/industries/hotels/',
  },
  {
    title: 'Payroll & HR',
    text: 'Employee records, attendance, and multi-country payroll in one flow — onboarding to final settlement.',
    icon: (
      <>
        <circle cx="10" cy="6.5" r="3.5" />
        <path d="M3 17c.8-3.2 3.6-5 7-5s6.2 1.8 7 5" />
      </>
    ),
    href: '/platform/payroll-hr/',
  },
  {
    title: 'Fixed Assets',
    text: 'Full asset lifecycle — capitalization, depreciation, RFID tracking, and disposal — reconciled to the GL.',
    icon: (
      <>
        <rect x="3" y="7" width="14" height="10" rx="1.5" />
        <path d="M7 7V4.5A1.5 1.5 0 018.5 3h3A1.5 1.5 0 0113 4.5V7" />
      </>
    ),
    href: '/platform/fixed-assets/',
  },
  {
    title: 'Loyalty',
    text: 'Loyalty plans, point accrual and redemption, and engagement analytics in one integrated solution.',
    icon: (
      <>
        <circle cx="10" cy="10" r="7.5" />
        <path d="M10 6v4l3 2" />
      </>
    ),
    href: '/platform/loyalty/',
  },
  {
    title: 'Business Analytics',
    text: 'Power BI dashboards over live operational data — real-time insight without exports or spreadsheets.',
    icon: (
      <>
        <path d="M3 15l4.5-5 3.5 3 6-7" />
        <path d="M13 6h4v4" />
      </>
    ),
    href: '/platform/analytics/',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Hospitality ERP · Cloud-native</p>
            <h1>
              Daily P&amp;L clarity across <em>every property</em>
            </h1>
            <p className="lede">
              ACE Financials unifies finance, procurement, payroll &amp; HR, and fixed assets in
              one web-based ERP — so department heads see their numbers every morning, finance
              closes faster, and the platform pays for itself within a year.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-solid" href="/contact/">
                Request a demo
              </Link>
              <a className="btn btn-ghost" href={LIVE_DEMO_URL} target="_blank" rel="noopener noreferrer">
                Try the live demo
              </a>
            </div>
            <div className="hero-proof">
              <div>
                <b>40+</b>hotels worldwide
              </div>
              <div>
                <b>100+</b>certified interfaces
              </div>
              <div>
                <b>Since 2002</b>in hospitality tech
              </div>
            </div>
          </div>

          <div className="shot" aria-hidden="true">
            <div className="shot-bar">
              <i></i>
              <i></i>
              <i></i>
              <span>aceapp.acefinancials.com — P&amp;L Overview</span>
            </div>
            <div className="shot-body">
              <div className="shot-side">
                <span className="on">Dashboard</span>
                <span>Financials</span>
                <span>Procurement</span>
                <span>Payroll &amp; HR</span>
                <span>Fixed Assets</span>
                <span>Reports</span>
              </div>
              <div className="shot-main">
                <div className="kpis">
                  <div className="kpi">
                    <small>Revenue MTD</small>
                    <b>$1.24M</b> <span className="up">▲ 8.2%</span>
                  </div>
                  <div className="kpi">
                    <small>F&amp;B Cost</small>
                    <b>27.4%</b> <span className="up">▼ 1.1pt</span>
                  </div>
                  <div className="kpi">
                    <small>GOP Margin</small>
                    <b>38.6%</b> <span className="up">▲ 2.4pt</span>
                  </div>
                </div>
                <div className="chart-card">
                  <small>Daily P&amp;L — drill-down to source documents</small>
                  <svg
                    className="spark"
                    viewBox="0 0 320 96"
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="Rising profit and loss trend line"
                  >
                    <line x1="0" y1="24" x2="320" y2="24" stroke="var(--hairline)" strokeWidth="1" />
                    <line x1="0" y1="48" x2="320" y2="48" stroke="var(--hairline)" strokeWidth="1" />
                    <line x1="0" y1="72" x2="320" y2="72" stroke="var(--hairline)" strokeWidth="1" />
                    <path
                      d="M0,78 L30,72 L60,74 L90,62 L120,58 L150,50 L180,54 L210,40 L240,34 L270,28 L300,20 L320,16 L320,96 L0,96 Z"
                      fill="var(--accent)"
                      opacity="0.14"
                    />
                    <path
                      d="M0,78 L30,72 L60,74 L90,62 L120,58 L150,50 L180,54 L210,40 L240,34 L270,28 L300,20 L320,16"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="320" cy="16" r="4" fill="var(--accent)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="logos">
        <div className="wrap">
          <p>Trusted by leading hospitality brands</p>
          <div className="logo-row">
            <span className="brand b-serif b-westin">WESTIN</span>
            <span className="brand b-serif b-hilton">Hilton</span>
            <span className="brand b-serif b-meridien">LE MÉRIDIEN</span>
            <span className="brand b-aloft">aloft</span>
            <span className="brand b-serif b-sheraton">Sheraton</span>
            <span className="brand b-serif b-kempinski">KEMPINSKI</span>
            <span className="brand b-paul">
              <i>P</i>THE PAUL
            </span>
          </div>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <div className="block-head">
            <div>
              <p className="eyebrow">Industries</p>
              <h2>Built for the way your operation actually runs</h2>
            </div>
            <Link className="btn btn-ghost" href="/contact/">
              Talk to a specialist
            </Link>
          </div>
          <div className="ind-grid">
            <Link className="ind-card" href="/industries/hotels/">
              <div className="ind-visual hotels">
                <svg viewBox="0 0 400 150" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M0,150 L0,90 L60,90 L60,55 L120,55 L120,80 L180,80 L180,30 L250,30 L250,70 L320,70 L320,45 L400,45 L400,150 Z"
                    fill="rgba(255,255,255,.25)"
                  />
                </svg>
              </div>
              <div className="ind-body">
                <h3>Hotels</h3>
                <p>
                  Property and central solutions for single boutiques to multi-branded chains — back
                  office, materials, spa &amp; health club, and online F&amp;B costing.
                </p>
                <span className="ind-link">Explore Hotel ERP</span>
              </div>
            </Link>
            <Link className="ind-card" href="/industries/restaurants/">
              <div className="ind-visual rest">
                <svg viewBox="0 0 400 150" preserveAspectRatio="none" aria-hidden="true">
                  <circle cx="90" cy="110" r="55" fill="rgba(255,255,255,.2)" />
                  <circle cx="230" cy="60" r="38" fill="rgba(255,255,255,.18)" />
                  <circle cx="340" cy="120" r="48" fill="rgba(255,255,255,.22)" />
                </svg>
              </div>
              <div className="ind-body">
                <h3>Restaurants</h3>
                <p>
                  Multi-outlet chains share one database across AP, AR, GL, and CRM — with
                  recipe-level costing and POS integration across every location.
                </p>
                <span className="ind-link">Explore Restaurant ERP</span>
              </div>
            </Link>
            <Link className="ind-card" href="/industries/manufacturing/">
              <div className="ind-visual mfg">
                <svg viewBox="0 0 400 150" preserveAspectRatio="none" aria-hidden="true">
                  <rect x="30" y="60" width="70" height="90" fill="rgba(255,255,255,.2)" />
                  <rect x="130" y="30" width="70" height="120" fill="rgba(255,255,255,.16)" />
                  <rect x="230" y="75" width="70" height="75" fill="rgba(255,255,255,.22)" />
                  <rect x="330" y="45" width="70" height="105" fill="rgba(255,255,255,.18)" />
                </svg>
              </div>
              <div className="ind-body">
                <h3>Manufacturing</h3>
                <p>
                  End-to-end automation for growing enterprises — streamline processes, cut
                  operating cost, and bring every workflow into one system.
                </p>
                <span className="ind-link">Explore Manufacturing</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="block tinted">
        <div className="wrap">
          <div className="block-head">
            <div>
              <p className="eyebrow">Platform</p>
              <h2>Every module your back office needs. One login.</h2>
              <p className="lede">
                Each module works alone and works better together — sharing one database, one
                workflow engine, and one reporting layer.
              </p>
            </div>
          </div>
          <div className="card-grid">
            {MODULES.map((m) => (
              <Link key={m.title} className="card" href={m.href} style={{ textDecoration: 'none' }}>
                <div className="card-ico">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {m.icon}
                  </svg>
                </div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap band-grid">
          <div>
            <p className="eyebrow">Analytics</p>
            <h2>Decisions made on live data, not last month&rsquo;s export</h2>
            <p className="lede">
              Direct database connectivity powers real-time dashboards, drill-down reporting, and
              interactive visualizations across every property.
            </p>
            <ul className="checks">
              <li>Seamless integration with existing PMS, POS, and ERP systems</li>
              <li>Daily P&amp;L reviewed by every department head</li>
              <li>Consolidated multi-property reporting in one view</li>
            </ul>
          </div>
          <div className="band-chart" aria-hidden="true">
            <div className="row">
              <small>Revenue by outlet — live</small>
              <b>
                $4.82M<i>▲ 12% YoY</i>
              </b>
            </div>
            <div className="bars">
              <i style={{ height: '38%' }}></i>
              <i style={{ height: '52%' }}></i>
              <i style={{ height: '46%' }}></i>
              <i style={{ height: '64%' }}></i>
              <i className="hi" style={{ height: '88%' }}></i>
              <i style={{ height: '71%' }}></i>
              <i style={{ height: '58%' }}></i>
              <i style={{ height: '77%' }}></i>
            </div>
            <div className="bars-x">
              <span>Rooms</span>
              <span>F&amp;B</span>
              <span>Spa</span>
              <span>Events</span>
              <span>Q1</span>
              <span>Q2</span>
              <span>Q3</span>
              <span>Q4</span>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="stats">
            <div className="stat">
              <b>40+</b>
              <span>hotels run their business on ACE</span>
            </div>
            <div className="stat">
              <b>100+</b>
              <span>certified system interfaces</span>
            </div>
            <div className="stat">
              <b>3</b>
              <span>global offices — Dubai, Chennai, Tampa</span>
            </div>
            <div className="stat">
              <b>&lt;1 yr</b>
              <span>typical return on investment</span>
            </div>
          </div>
        </div>
      </section>

      <section className="block tinted">
        <div className="wrap">
          <figure className="quote">
            <blockquote>
              ACE gave our department heads a daily P&amp;L they actually open. Manual consolidation
              across properties went from days to minutes.
            </blockquote>
            <figcaption>
              <b>Director of Finance</b> · Multi-property hotel group, UAE
            </figcaption>
          </figure>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
