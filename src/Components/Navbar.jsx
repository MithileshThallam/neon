const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">NeonBox</h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded">Get Started</button>
    </nav>
  );
};

export default Navbar;
