import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ClientsCarousel from "./ClientsCarousel";

const Layout = ({ children, showClients = true }: { children: ReactNode; showClients?: boolean }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    {showClients && <ClientsCarousel />}
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
