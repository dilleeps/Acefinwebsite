import { readdirSync } from 'fs';
import { join } from 'path';

// Brand logo wall. Runs at build time (static export): if a logo image exists in
// public/images/logos/, it is used; otherwise the typographic fallback renders.
// Entries without a `fallback` only appear once their image file is present.
const BRANDS = [
  { file: 'westin.png', alt: 'Westin Hotels & Resorts', fallback: <span className="brand b-serif b-westin">WESTIN</span> },
  { file: 'hilton.png', alt: 'Hilton', fallback: <span className="brand b-serif b-hilton">Hilton</span> },
  { file: 'le-meridien.png', alt: 'Le Méridien', fallback: <span className="brand b-serif b-meridien">LE MÉRIDIEN</span> },
  { file: 'aloft.png', alt: 'Aloft Hotels', fallback: <span className="brand b-aloft">aloft</span> },
  { file: 'sheraton.png', alt: 'Sheraton', fallback: <span className="brand b-serif b-sheraton">Sheraton</span> },
  { file: 'kempinski.png', alt: 'Kempinski', fallback: <span className="brand b-serif b-kempinski">KEMPINSKI</span> },
  {
    file: 'the-paul.png',
    alt: 'The Paul, Bangalore',
    fallback: (
      <span className="brand b-paul">
        <i>P</i>THE PAUL
      </span>
    ),
  },
  { file: 'kumarakom.png', alt: 'Kumarakom Lake Resort', fallback: null },
];

function availableLogos() {
  try {
    return new Set(readdirSync(join(process.cwd(), 'public', 'images', 'logos')));
  } catch {
    return new Set();
  }
}

export default function LogoStrip() {
  const files = availableLogos();
  return (
    <div className="logos">
      <div className="wrap">
        <p>Trusted by leading hospitality brands</p>
        <div className="logo-row">
          {BRANDS.map((b) => {
            if (files.has(b.file)) {
              return (
                <span className="brand" key={b.file}>
                  <img className="brand-img" src={`/images/logos/${b.file}`} alt={b.alt} />
                </span>
              );
            }
            return b.fallback ? <span key={b.file} style={{ display: 'contents' }}>{b.fallback}</span> : null;
          })}
        </div>
      </div>
    </div>
  );
}
