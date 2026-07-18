import Link from 'next/link';
import { LIVE_DEMO_URL } from '../lib/site';

export default function CtaBanner({
  title = 'See your numbers in ACE — this week',
  text = 'Book a walkthrough with a product specialist, or open the live demo environment right now. Implementation measured in weeks, not quarters.',
}) {
  return (
    <section className="block">
      <div className="wrap">
        <div className="cta">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="hero-ctas">
            <Link className="btn btn-solid" href="/contact/">
              Request a demo
            </Link>
            <a className="btn btn-ghost" href={LIVE_DEMO_URL} target="_blank" rel="noopener noreferrer">
              Open live demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
