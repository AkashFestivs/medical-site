import React from "react";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy & SMS Terms | Galveston Specialty Pharmacy</title>
      </Head>
      <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            Privacy Policy & SMS Terms
          </h1>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Galveston Specialty Pharmacy (“we,” “us,” or “our”) is committed to
            protecting your privacy and ensuring the security of your personal
            information. This policy outlines how we collect, use, and protect
            your data when using our website or SMS/text services.
          </p>

          <Section title="1. Information We Collect">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Name</li>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Prescription information (as permitted by law)</li>
            </ul>
            <p className="mt-2">We may also collect your mobile number and SMS preferences.</p>
          </Section>

          <Section title="2. Use of Information">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Prescription processing and refills</li>
              <li>SMS alerts for:
                <ul className="ml-6 list-disc list-inside space-y-1">
                  <li>Refill reminders</li>
                  <li>Pickup readiness</li>
                  <li>Delivery updates</li>
                  <li>Health service notifications</li>
                </ul>
              </li>
              <li>Customer support</li>
              <li>Legal compliance</li>
            </ul>
          </Section>

          <Section title="3. SMS/Text Messaging Terms">
            <p className="text-gray-700 mb-2">
              By opting in, you agree to receive texts from us, including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Prescription reminders</li>
              <li>Pickup/delivery notifications</li>
              <li>Health updates</li>
            </ul>
            <p className="mt-2">
              Message frequency varies (2–5/month). Msg & data rates may apply.
              Opt out by replying <strong>STOP</strong>. Reply <strong>HELP</strong> for support.
            </p>
            <p className="mt-1">
              SMS opt-in is not a condition for purchase.
            </p>
          </Section>

          <Section title="4. Sharing of Information">
            <p className="text-gray-700">
              We don’t sell or share your data with third parties for promotions.
              We only share:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>With healthcare providers/insurance to process prescriptions</li>
              <li>With legal authorities when required</li>
            </ul>
          </Section>

          <Section title="5. Data Security">
            <p className="text-gray-700">
              We use physical, administrative, and technical safeguards to
              protect your data. Regular audits are conducted for enhanced
              security.
            </p>
          </Section>

          <Section title="6. Your Rights">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Access or update your information</li>
              <li>Withdraw SMS consent</li>
              <li>Request data deletion (where applicable)</li>
            </ul>
            <p className="mt-2">
              Contact us at{" "}
              <a href="mailto:info@galvestonsrx.com" className="text-blue-600 underline">
                info@galvestonsrx.com
              </a>{" "}
              or call{" "}
              <a href="tel:4098777029" className="text-blue-600 underline">
                409-877-7029
              </a>.
            </p>
          </Section>

          <Section title="7. Policy Updates">
            <p className="text-gray-700">
              This policy may change over time. Updated versions will be posted
              here with a new effective date.
            </p>
          </Section>

          <Section title="8. Contact Us">
            <address className="text-gray-700 not-italic leading-relaxed">
              Galveston Specialty Pharmacy<br />
              707 23rd St., Galveston, TX 77550<br />
              Phone:{" "}
              <a href="tel:4098777029" className="text-blue-600 underline">
                409-877-7029
              </a><br />
              Email:{" "}
              <a href="mailto:info@galvestonsrx.com" className="text-blue-600 underline">
                info@galvestonsrx.com
              </a><br />
              Website:{" "}
              <a href="https://www.galvestonsrx.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                galvestonsrx.com
              </a>
            </address>
          </Section>

          <hr className="my-6 border-gray-300" />
          <p className="text-sm text-gray-600 italic">
            By using our services or opting into SMS, you confirm that you’ve read,
            understood, and agreed to this policy.
          </p>
        </div>
      </main>
    </>
  );
}

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-blue-800 mb-3">{title}</h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </section>
);
