import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="navy-gradient text-gold-light/80">
      <div className="container mx-auto section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-heading font-bold text-gold">Linkwel</span>
              <span className="text-lg font-body font-light tracking-widest text-gold-light uppercase ml-2">Engineers</span>
            </Link>
            <p className="text-sm leading-relaxed opacity-70">
              Elevating standards and engineering trust since inception. A premier elevator solutions provider committed to safety, quality, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-heading text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm hover:text-gold transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold font-heading text-lg mb-4">Our Services</h4>
            <div className="flex flex-col gap-3 text-sm">
              <span>Elevator Installation</span>
              <span>Elevator Maintenance</span>
              <span>Elevator Modernization</span>
              <span>Repair Services</span>
              <span>AMC Contracts</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-heading text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>123 Engineering Drive, Business District, City 400001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <span>info@linkwelengineers.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Linkwel Engineers. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["LinkedIn", "Facebook", "Instagram"].map((social) => (
              <a key={social} href="#" className="text-xs hover:text-gold transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
