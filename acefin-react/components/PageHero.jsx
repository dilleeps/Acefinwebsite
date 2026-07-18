import Link from 'next/link';
import { LIVE_DEMO_URL } from '../lib/site';

export default function PageHero({ eyebrow, title, lede, children }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        <div className="hero-ctas">
          <Link className="btn btn-solid" href="/contact/">
            Request a demo
          </Link>
          <a className="btn btn-ghost" href={LIVE_DEMO_URL} target="_blank" rel="noopener noreferrer">
            Try the live demo
          </a>
        </div>
        {children}
      </div>
    </section>
  );
}
