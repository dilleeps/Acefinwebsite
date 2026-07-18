import Link from 'next/link';

// Vector recreation of the ACE Financials Technology LLC logo:
// a fan of gray arcs opening left, with an orange gradient sphere.
export default function Logo({ id = 'lg' }) {
  return (
    <Link className="logo" href="/" aria-label="ACE Financials home">
      <svg width="42" height="36" viewBox="0 0 42 36" aria-hidden="true">
        <defs>
          <radialGradient id={`${id}-ball`} cx="35%" cy="30%" r="80%">
            <stop offset="0" stopColor="#FFDCAB" />
            <stop offset="0.55" stopColor="#F59A4B" />
            <stop offset="1" stopColor="#DE7325" />
          </radialGradient>
          <clipPath id={`${id}-fan`}>
            <rect x="0" y="0" width="29" height="36" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${id}-fan)`} fill="none" strokeLinecap="round">
          <circle cx="29" cy="18" r="16.5" stroke="#C9C5BC" strokeWidth="2.4" opacity="0.45" />
          <circle cx="29" cy="18" r="13" stroke="#B5B1A6" strokeWidth="2.4" opacity="0.6" />
          <circle cx="29" cy="18" r="9.5" stroke="#A19C90" strokeWidth="2.4" opacity="0.8" />
        </g>
        <circle cx="29" cy="18" r="6.5" fill={`url(#${id}-ball)`} />
      </svg>
      <span className="logo-word">
        ACE Financials
        <small>Technology LLC</small>
      </span>
    </Link>
  );
}
