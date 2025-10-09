const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-border-color p-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-8">
        {/* Branding / About */}
        <aside className="flex-1">
          <p className="text-lg mb-2">Iqoqacola</p>
          <p className="text-sm text-gray-600">Software Engineer</p>
        </aside>

        {/* Services */}
        <nav className="flex-1">
          <h6 className="font-semibold mb-4">Services</h6>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer">Branding</li>
            <li className="cursor-pointer">Design</li>
            <li className="cursor-pointer">Marketing</li>
            <li className="cursor-pointer">Advertisement</li>
          </ul>
        </nav>

        {/* Company */}
        <nav className="flex-1">
          <h6 className="font-semibold mb-4">Company</h6>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Jobs</li>
            <li className="cursor-pointer">Press kit</li>
          </ul>
        </nav>

        {/* Legal */}
        <nav className="flex-1">
          <h6 className="font-semibold mb-4">Legal</h6>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer">Terms of use</li>
            <li className="cursor-pointer">Privacy policy</li>
            <li className="cursor-pointer">Cookie policy</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
