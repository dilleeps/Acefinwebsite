import { FORMSPREE_URL } from '../lib/site';

export default function DemoForm({ heading = 'Have a product specialist contact you' }) {
  return (
    <div className="form-card">
      <h3 style={{ fontSize: '22px', fontWeight: 720, marginBottom: '8px' }}>{heading}</h3>
      <p style={{ color: 'var(--ink-soft)', fontSize: '15px', margin: '0 0 26px' }}>
        Fill out the form below and our team will contact you within 24 hours.
      </p>
      <form action={FORMSPREE_URL} method="POST">
        <label htmlFor="df-name">Full name</label>
        <input id="df-name" type="text" name="name" required autoComplete="name" />

        <label htmlFor="df-email">Email address</label>
        <input id="df-email" type="email" name="email" required autoComplete="email" />

        <label htmlFor="df-phone">Phone number</label>
        <input id="df-phone" type="tel" name="phone" autoComplete="tel" />

        <label htmlFor="df-company">Company name</label>
        <input id="df-company" type="text" name="company" autoComplete="organization" />

        <label htmlFor="df-message">Message</label>
        <textarea id="df-message" name="message" rows={4} placeholder="Tell us about your requirements" />

        <div className="hp-field" aria-hidden="true">
          <label htmlFor="df-gotcha">Leave this field empty</label>
          <input id="df-gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>

        <button className="btn btn-solid" type="submit">
          Submit request
        </button>
        <p className="note">Your information is kept strictly confidential.</p>
      </form>
    </div>
  );
}
