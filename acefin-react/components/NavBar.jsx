'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { NAV_LINKS, LIVE_DEMO_URL } from '../lib/site';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site">
      <div className="wrap nav">
        <Logo id="lg-nav" />
        <nav className="links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={pathname === l.href ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-quiet" href={LIVE_DEMO_URL} target="_blank" rel="noopener noreferrer">
            Live demo
          </a>
          <Link className="btn btn-solid" href="/contact/">
            Request a demo
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 5h14M3 10h14M3 15h14" />}
            </svg>
          </button>
        </div>
      </div>
      <nav className={`mobile-menu${open ? ' open' : ''}`} aria-label="Mobile">
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact/" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
