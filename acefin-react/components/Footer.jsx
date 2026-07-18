import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Logo id="lg-foot" />
            <p style={{ margin: '16px 0 0', fontSize: '13.5px', maxWidth: '30ch' }}>
              Web-based ERP for hotels, restaurants, and enterprises. Dubai · Chennai · Tampa.
            </p>
          </div>
          <div>
            <h4>Industries</h4>
            <Link href="/industries/hotels/">Hotels</Link>
            <Link href="/industries/restaurants/">Restaurants</Link>
            <Link href="/industries/manufacturing/">Manufacturing</Link>
          </div>
          <div>
            <h4>Platform</h4>
            <Link href="/platform/analytics/">Business Analytics</Link>
            <Link href="/platform/payroll-hr/">Payroll &amp; HR</Link>
            <Link href="/platform/fixed-assets/">Fixed Assets</Link>
            <Link href="/platform/loyalty/">Loyalty</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/company/">About &amp; Careers</Link>
            <Link href="/customers/">Customers</Link>
            <Link href="/partners/">Partners</Link>
            <Link href="/contact/">Contact</Link>
          </div>
        </div>
        <div className="foot-note">
          <span>© {new Date().getFullYear()} ACE Financials Technology LLC</span>
          <span>Hospitality ERP since 2002</span>
        </div>
      </div>
    </footer>
  );
}
