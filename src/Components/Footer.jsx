const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        
        {/* Left: Logo and company info */}
        <div>
          <h1 className="text-3xl font-semibold">YourCompany</h1>
          <p className="mt-2 text-sm">© 2025 YourCompany. All rights reserved.</p>
        </div>

        {/* Right: Links to Privacy, Terms, and Socials */}
        <div className="space-x-6">
          <a href="#privacy" className="text-gray-400 hover:text-white">Privacy</a>
          <a href="#terms" className="text-gray-400 hover:text-white">Terms</a>
          <a href="#facebook" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#twitter" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#linkedin" className="text-gray-400 hover:text-white">LinkedIn</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
