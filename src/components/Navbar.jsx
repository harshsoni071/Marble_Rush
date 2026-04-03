import { useState, useEffect } from "react";

export default function Navbar({ searchQuery, setSearchQuery }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-200/50 border-b border-gray-200"
          : "bg-white/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("hero")}>
            <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            <div>
              <div className="text-slate-900 font-black text-xl tracking-tight">Marble</div>
              <div className="text-amber-600 font-black text-xl tracking-tight">Rush</div>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:border-amber-600 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {/* {["products", "why-us", "testimonials"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors capitalize"
              >
                {id === "why-us" ? "Why Us" : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))} */}
            <button
              onClick={() => scrollTo("products")}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold text-sm rounded-xl hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all"
            >
              Shop Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-gray-900 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-gray-900 transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-gray-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2 pt-4 space-y-3 bg-gray-50">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 text-sm focus:outline-none"
              />
            </div>
            {/* {["products", "why-us", "testimonials"].map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left text-gray-700 py-2 text-sm font-medium capitalize">
                {id === "why-us" ? "Why Us" : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))} */}
          </div>
        )}
      </div>
    </nav>
  );
}
