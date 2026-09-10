import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import MarqueeStrip from "./MarqueeStrip";

const Layout = ({ children, showMarquee = true }: { children: ReactNode; showMarquee?: boolean }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    {showMarquee && <MarqueeStrip />}
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
