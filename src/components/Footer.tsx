import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Download } from "lucide-react";
import logo from "@/assets/linkwel-logo.png";

const Footer = () => {
  return (
    <footer className="navy-gradient text-gold-light/80">
      <div className="container mx-auto section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Linkwel Engineers" className="h-14 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed opacity-70">
              Elevating standards and engineering trust since 1989. A premier elevator and crane solutions provider committed to safety, quality, and innovation.
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
                <div>
                  <span>62, DSIDC Complex, Okhla<br />Okhla Phase I, ND-20<br />New Delhi, Delhi 110020</span>
                  <a href="https://maps.app.goo.gl/CQTwV2ASCZBMGX6W6" target="_blank" rel="noopener noreferrer" className="block text-gold text-xs mt-1 hover:underline">View on Google Maps →</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919818511177" className="hover:text-gold transition-colors">+91 9818511177</a>
                  <a href="tel:+919810371220" className="hover:text-gold transition-colors">+91 9810371220</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:linkwelengineers@gmail.com" className="hover:text-gold transition-colors">linkwelengineers@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Linkwel Engineers. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/linkwel-engineers-le/" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-gold transition-colors">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/linkwelengineers?igsh=MTl0M2drbmdlZmVieg==" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-gold transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
