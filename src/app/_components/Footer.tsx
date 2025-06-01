export default function Footer() {
  return (
    <footer className="bg-[#23272f] pt-12 pb-6 px-5 text-zinc-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 mb-10">
        {/* About CI */}
        <div>
          <div className="font-extrabold text-lg mb-2 text-white">CI</div>
          <div className="text-zinc-400 text-sm mb-3">
            Coaching institude of Language
            <br />
            Learn. Grow. Succeed.
          </div>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="facebook">
              <svg className="w-6 h-6" fill="#B8925B" viewBox="0 0 24 24">
                <path d="M17.525 9h-3.028v-1.595c0-.669.441-.826.75-.826h2.256V3.647L14.15 3.637C10.865 3.637 10.25 5.575 10.25 7.54V9H7.75v3.857h2.5v8.506h3.247V12.857h2.318l.356-3.857z" />
              </svg>
            </a>
            <a href="#" aria-label="twitter">
              <svg className="w-6 h-6" fill="#B8925B" viewBox="0 0 24 24">
                <path d="M24 4.556a9.88 9.88 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.737 0-4.952 2.215-4.952 4.955 0 .388.045.765.13 1.126C7.728 8.934 4.1 6.993 1.67 4.149c-.427.734-.669 1.584-.669 2.491 0 1.718.874 3.236 2.21 4.124A4.903 4.903 0 0 1 .96 9.096c-.024.021-.024.042-.024.065a4.941 4.941 0 0 0 3.965 4.841c-.215.059-.442.09-.678.09-.166 0-.324-.017-.482-.046.324 1.026 1.267 1.773 2.383 1.794A9.867 9.867 0 0 1 0 21.543c-.22 0-.436-.012-.653-.037A13.933 13.933 0 0 0 7.548 24c9.057 0 14.011-7.514 14.011-14.012 0-.21-.004-.424-.016-.635A10.01 10.01 0 0 0 24 4.556" />
              </svg>
            </a>
            <a href="#" aria-label="instagram">
              <svg className="w-6 h-6" fill="#B8925B" viewBox="0 0 24 24">
                <path d="M12 7.09a4.91 4.91 0 1 0 0 9.819 4.91 4.91 0 0 0 0-9.819zm0 8.045a3.135 3.135 0 1 1 0-6.271 3.135 3.135 0 0 1 0 6.271zm6.406-8.418a1.195 1.195 0 1 1-2.39 0 1.195 1.195 0 0 1 2.39 0zm3.408 1.215c-.077-1.643-.451-3.094-1.651-4.293C19.51 2.129 18.059 1.755 16.416 1.678 14.339 1.567 9.661 1.567 7.584 1.678 5.941 1.755 4.49 2.129 3.283 3.326c-1.2 1.199-1.574 2.65-1.651 4.293C1.567 9.661 1.567 14.339 1.678 16.416c.077 1.643.451 3.094 1.651 4.293 1.207 1.197 2.658 1.571 4.301 1.648 2.077.111 6.755.111 8.832 0 1.643-.077 3.094-.451 4.301-1.648 1.2-1.199 1.574-2.65 1.651-4.293.111-2.077.111-6.755 0-8.832zm-2.157 10.826c-.286.676-.838 1.227-1.514 1.513-1.048.417-3.533.322-4.735.322s-3.687.095-4.735-.322a2.676 2.676 0 0 1-1.514-1.513c-.417-1.048-.323-3.533-.323-4.735s-.096-3.687.323-4.735c.286-.676.838-1.227 1.514-1.513 1.048-.417 3.533-.323 4.735-.323s3.687-.094 4.735.323a2.676 2.676 0 0 1 1.514 1.513c.418 1.048.323 3.533.323 4.735s.094 3.687-.323 4.735z"/>
              </svg>
            </a>
          </div>
        </div>
        {/* Courses */}
        <div>
          <div className="font-bold mb-2">Courses</div>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/courses/ielts" className="hover:text-[#B8925B]">
                IELTS
              </a>
            </li>
            <li>
              <a href="/courses/english" className="hover:text-[#B8925B]">
                Spoken English
              </a>
            </li>
            <li>
              <a href="/courses/foreign-languages" className="hover:text-[#B8925B]">
                Foreign Languages
              </a>
            </li>
            <li>
              <a href="/courses/kids" className="hover:text-[#B8925B]">
                Kids Courses
              </a>
            </li>
          </ul>
        </div>
        {/* Study Abroad */}
        <div>
          <div className="font-bold mb-2">Study Abroad</div>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/abroad/uk" className="hover:text-[#B8925B]">
                Study in UK
              </a>
            </li>
            <li>
              <a href="/abroad/canada" className="hover:text-[#B8925B]">
                Study in Canada
              </a>
            </li>
            <li>
              <a href="/abroad/australia" className="hover:text-[#B8925B]">
                Study in Australia
              </a>
            </li>
            <li>
              <a href="/abroad/consultation" className="hover:text-[#B8925B]">
                Free Consultation
              </a>
            </li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <div className="font-bold mb-2">Quick Links</div>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/about" className="hover:text-[#B8925B]">
                About us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#B8925B]">
                Contact us
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-[#B8925B]">
                Careers
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-[#B8925B]">
                Blog
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-[#B8925B]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-[#B8925B]">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <div className="font-bold mb-2">Contact</div>
          <div className="text-sm text-zinc-400 mb-1">+91 12345 67890</div>
          <div className="text-sm text-zinc-400 mb-1">contact@instituteoflanguage.in</div>
          <div className="text-sm text-zinc-400">123, address India</div>
        </div>
      </div>
      <div className="border-t border-zinc-700 pt-4 text-center text-zinc-500 text-xs">
        © {new Date().getFullYear()} Coaching Institute of Language. All rights reserved.
      </div>
    </footer>
  );
}
