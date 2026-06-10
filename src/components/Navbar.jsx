function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Amanda Sherman</h1>

        <div className="space-x-8">
          <a href="#home" className="hover:text-cyan-400">
            Home
          </a>

          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;