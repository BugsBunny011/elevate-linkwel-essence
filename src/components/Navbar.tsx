import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/linkwel-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Products",
    path: "/products",
    children: [
      { name: "All Products", path: "/products" },
      { name: "Lifts / Elevators", path: "/products/lifts" },
      { name: "Cranes", path: "/products/cranes" },
    ],
  },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileProductsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-dark/95 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between section-padding">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Linkwel Engineers - Elevator & Crane Manufacturers" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.path} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`text-sm font-body font-medium tracking-wide uppercase transition-colors duration-300 inline-flex items-center gap-1 ${
                    location.pathname.startsWith("/products")
                      ? "text-gold"
                      : "text-gold-light/70 hover:text-gold"
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 bg-navy-dark/95 backdrop-blur-xl border border-gold/10 rounded-lg shadow-xl min-w-[200px] overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-5 py-3 text-sm font-body text-gold-light/70 hover:text-gold hover:bg-gold/5 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-body font-medium tracking-wide uppercase transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-gold-light/70 hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="gold-gradient text-white font-body font-semibold text-sm px-6 py-2.5 rounded-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gold"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-dark/98 backdrop-blur-xl border-t border-gold/10"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.path} className="flex flex-col items-center gap-3">
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className={`text-sm font-body font-medium tracking-wide uppercase inline-flex items-center gap-1 ${
                        location.pathname.startsWith("/products")
                          ? "text-gold"
                          : "text-gold-light/70"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col items-center gap-3"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="text-xs font-body text-gold-light/50 hover:text-gold transition-colors uppercase tracking-wide"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-body font-medium tracking-wide uppercase ${
                      location.pathname === link.path
                        ? "text-gold"
                        : "text-gold-light/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="gold-gradient text-white font-semibold text-sm px-6 py-2.5 rounded-sm uppercase tracking-wider"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
