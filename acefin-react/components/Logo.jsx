import Link from 'next/link';

export default function Logo({ id = 'lg' }) {
  return (
    <Link className="logo" href="/" aria-label="ACE Financials home">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#D97757" />
            <stop offset="1" stopColor="#A84F30" />
          </linearGradient>
        </defs>
        <rect width="34" height="34" rx="9" fill={`url(#${id})`} />
        <path
          d="M8.5 24.5 L17 8.5 L25.5 24.5"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="12.8" y1="19" x2="21.2" y2="19" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="logo-word">
        ACE Financials
        <small>Technology LLC</small>
      </span>
    </Link>
  );
}
