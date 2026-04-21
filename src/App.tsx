import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Products from "./pages/Products";
import ProductsLifts from "./pages/ProductsLifts";
import ProductsCranes from "./pages/ProductsCranes";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Skip preloader for prerender crawler & search bots so HTML snapshot has real content
const isPrerender =
  typeof navigator !== "undefined" &&
  /Prerender|HeadlessChrome|Googlebot|bingbot|Bingbot|DuckDuckBot|Baiduspider|YandexBot/i.test(
    navigator.userAgent
  );

const App = () => {
  const [loading, setLoading] = useState(!isPrerender);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatePresence mode="wait">
            {loading && <Preloader key="preloader" onComplete={handleComplete} />}
          </AnimatePresence>
          {!loading && (
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/lifts" element={<ProductsLifts />} />
                <Route path="/products/cranes" element={<ProductsCranes />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          )}
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
