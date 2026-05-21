import { useState, useCallback, lazy, Suspense, type ReactNode } from "react";
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

// Code-split secondary routes — keeps initial JS bundle small for LCP/SEO.
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const AMC = lazy(() => import("./pages/AMC"));
const Projects = lazy(() => import("./pages/Projects"));
const Products = lazy(() => import("./pages/Products"));
const ProductsLifts = lazy(() => import("./pages/ProductsLifts"));
const ProductsCranes = lazy(() => import("./pages/ProductsCranes"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Delhi = lazy(() => import("./pages/Delhi"));
const Noida = lazy(() => import("./pages/Noida"));
const Gurgaon = lazy(() => import("./pages/Gurgaon"));
const Locations = lazy(() => import("./pages/Locations"));
const ElevatorStudio = lazy(() => import("./pages/ElevatorStudio"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Skip preloader for prerender crawler & search bots so HTML snapshot has real content
const isPrerender =
  typeof navigator !== "undefined" &&
  /Prerender|HeadlessChrome|Googlebot|bingbot|Bingbot|DuckDuckBot|Baiduspider|YandexBot/i.test(
    navigator.userAgent
  );

// Detect SSR (no window) — skip preloader & BrowserRouter during static generation
const isSSR = typeof window === "undefined";

export const AppRoutes = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/amc" element={<AMC />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/lifts" element={<ProductsLifts />} />
      <Route path="/products/cranes" element={<ProductsCranes />} />
      <Route path="/products/:slug" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/delhi" element={<Delhi />} />
      <Route path="/noida" element={<Noida />} />
      <Route path="/gurgaon" element={<Gurgaon />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/elevator-studio" element={<ElevatorStudio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

interface AppProps {
  /** Optional router wrapper used during SSR (e.g. StaticRouter). */
  router?: (children: ReactNode) => ReactNode;
  /** Optional Helmet context used during SSR to collect head tags. */
  helmetContext?: Record<string, unknown>;
}

const App = ({ router, helmetContext }: AppProps = {}) => {
  const [loading, setLoading] = useState(!isPrerender && !isSSR);
  const handleComplete = useCallback(() => setLoading(false), []);

  const routedApp = router ? (
    router(
      <>
        <ScrollToTop />
        <AppRoutes />
      </>
    )
  ) : (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );

  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatePresence mode="wait">
            {loading && <Preloader key="preloader" onComplete={handleComplete} />}
          </AnimatePresence>
          {!loading && routedApp}
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
