import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="block" style={{ textAlign: 'center', padding: '140px 0' }}>
      <div className="wrap">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>
          404
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 780, letterSpacing: '-0.03em' }}>
          Page not found
        </h1>
        <p className="lede" style={{ margin: '18px auto 30px' }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link className="btn btn-solid" href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
