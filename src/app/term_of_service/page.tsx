import Navigation from "../_components/Navigation";
import Footer from "../_components/footer1";
export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />
      <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Terms of Service for CI Edutech (P) Limited
        </h1>

        <p className="mb-4">
          By accessing or using our website located at{" "}
          <a
            href="https//www.aalionsinfotech.com"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Https//www.aalionsinfotech.com
          </a>, you agree to be bound by these Terms of Service. If you do not agree with any part of the terms, you must not use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Use of Our Services</h2>
        <p className="mb-4">
          You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Intellectual Property</h2>
        <p className="mb-4">
          All content, branding, graphics, and data on our site are the intellectual property of NIL Edutech (P) Limited and are protected by applicable copyright and trademark laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. User Accounts</h2>
        <p className="mb-4">
          If you register for an account, you are responsible for safeguarding your credentials. We reserve the right to suspend or terminate accounts that violate our terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Termination</h2>
        <p className="mb-4">
          We may suspend or terminate your access to the site without notice if you breach these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Disclaimers</h2>
        <p className="mb-4">
          Our website is provided "as is" without warranties of any kind. We do not guarantee the site will be available without interruption or errors.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Limitation of Liability</h2>
        <p className="mb-4">
          CI Edutech (P) Limited shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Governing Law</h2>
        <p className="mb-4">
          These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the courts of Delhi.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to update these terms at any time. Continued use of the site after changes means you accept the new terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">9. Contact Us</h2>
        <p className="mb-4">
          If you have questions about these Terms of Service, please contact us at{" "}
          <a
            href="mailto:support@aalionsinfotech.com"
            className="text-blue-600 underline"
          >
            support@aalionsinfotech.com
          </a>.
        </p>

        <p className="text-sm text-gray-600 mt-8">Last updated: June 2025</p>
      </main>
      <Footer />
    </>

  );
}