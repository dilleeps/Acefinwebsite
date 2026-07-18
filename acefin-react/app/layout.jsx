import './globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.acefinancials.com'),
  title: {
    default: 'ACE Financials Technology | Hospitality & ERP Software',
    template: '%s | ACE Financials Technology',
  },
  description:
    'Web-based ERP for hotels, restaurants, and enterprises — finance, procurement, payroll & HR, and fixed assets in one platform. Trusted by 40+ hotels worldwide.',
  authors: [{ name: 'ACE Financials' }],
  openGraph: {
    siteName: 'ACE Financials Technology',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
