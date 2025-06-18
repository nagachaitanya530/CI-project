import Navigation from "../_components/Navigation";
import Footer from "../_components/Footer";
export default function PrivecyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Privacy Policy for CI Edutech (P) Limited
        </h1>

        <p className="mb-4">
          At  CI Institute of Language, accessible from{" "}
          <a
            href="https://aalionsinfotech.com/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://aalionsinfotech.com/
          </a>
          , one of our main priorities is the privacy of our visitors. This Privacy Policy document
          contains types of information that is collected and recorded by CI Institute of
          Language and how we use it.
        </p>

        <p className="mb-4">
          If you have additional questions or require more information about our Privacy Policy, do
          not hesitate to contact us.
        </p>

        <p className="mb-4">
          This Privacy Policy applies only to our online activities and is valid for visitors to our
          website with regards to the information that they shared and/or collect in CI
          Institute of Language. This policy is not applicable to any information collected offline
          or via channels other than this website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Consent</h2>
        <p className="mb-4">
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
        <p className="mb-4">
          The personal information that you are asked to provide, and the reasons why you are asked
          to provide it, will be made clear at the point we ask you to provide it.
        </p>
        <p className="mb-4">
          If you contact us directly, we may receive additional information about you such as your
          name, email, phone number, message content, and any attachments.
        </p>
        <p className="mb-4">
          When registering for an account, we may ask for your name, company name, address, email,
          and phone number.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, and features</li>
          <li>Communicate with you directly or through partners</li>
          <li>Send you emails</li>
          <li>Prevent fraud</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Log Files</h2>
        <p className="mb-4">
          We follow a standard log file procedure. These logs include IP address, browser type,
          ISP, date/time, referring/exit pages, and clicks, used to analyze trends and track
          activity. This data is not linked to personally identifiable information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Cookies and Web Beacons</h2>
        <p className="mb-4">
          Like many websites, we use cookies to store visitors’ preferences and page activity, in
          order to optimize content based on browser types.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Advertising Partners</h2>
        <p className="mb-4">
          Third-party advertisers may use cookies, JavaScript, or web beacons for ads appearing on
          our site. These tools help measure ad performance and personalize content. We do not have
          control over third-party cookies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Third Party Policies</h2>
        <p className="mb-4">
          Our Privacy Policy does not apply to other advertisers or websites. We advise you to
          consult their respective policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">CCPA Privacy Rights</h2>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Right to know what data we collect</li>
          <li>Right to request data deletion</li>
          <li>Right to opt-out of personal data sales</li>
        </ul>
        <p className="mb-4">
          Requests will be responded to within one month. Please contact us to make a request.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">GDPR Data Protection Rights</h2>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>The right to access, rectify, or delete your data</li>
          <li>The right to restrict or object to processing</li>
          <li>The right to data portability</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Children’s Information</h2>
        <p className="mb-4">
          We do not knowingly collect personal information from children under 13. If a child has
          provided such information, we encourage parents/guardians to contact us immediately so we
          can remove it.
        </p>

        <p className="text-sm text-gray-600 mt-8">Last updated: June 2025</p>
      </main>
      <Footer />
        
    </>
    
  );
}