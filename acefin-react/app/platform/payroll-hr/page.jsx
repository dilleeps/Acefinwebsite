import PageHero from '../../../components/PageHero';
import CtaBanner from '../../../components/CtaBanner';

export const metadata = {
  title: 'Payroll & HR Management Software',
  description:
    'Time & attendance, territory-aware payroll with statutory reporting, and secure HR records with document expiry alerts — in one integrated module.',
};

export default function PayrollHrPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Payroll & HR"
        title="ACE Payroll & HR Management"
        lede="Track attendance from punch-in to payslip, run territory-aware payroll with statutory reports, and keep every employee record secure — in one flow."
      />

      <section className="block">
        <div className="wrap card-grid">
          <div className="card">
            <h3>Time &amp; attendance</h3>
            <p>
              Tracking starts at staff punch-in and punch-out. Based on each employee&rsquo;s
              roster, the software calculates week/day off and overtime, and lets each head of
              department submit their team&rsquo;s attendance online.
            </p>
          </div>
          <div className="card">
            <h3>Payroll</h3>
            <p>
              Payroll calculation for your territory&rsquo;s requirements is built in — the most
              comprehensive taxes and statutory reports, salary allocation across multiple
              departments, customized bank upload files per bank format, and automatic payroll and
              accrual journal vouchers.
            </p>
          </div>
          <div className="card">
            <h3>HR activities</h3>
            <p>
              All employee data captured with high security controls and user rights by grade.
              Alerts for expiring documents — probation, contracts, visa, passport, driving license
              — plus online leave forms, status changes, employee loans, and full &amp; final
              settlement.
            </p>
          </div>
        </div>
      </section>

      <section className="block tinted">
        <div className="wrap">
          <div className="block-head">
            <div>
              <p className="eyebrow">Advanced features</p>
              <h2>Built for hospitality workforces</h2>
            </div>
          </div>
          <ul className="checks" style={{ maxWidth: '640px' }}>
            <li>Built-in recruitment module</li>
            <li>Payroll budget module</li>
            <li>Staff accommodation module</li>
            <li>Automated service charge and tips distribution</li>
          </ul>
        </div>
      </section>

      <CtaBanner title="Save big with Payroll & HR software" />
    </>
  );
}
