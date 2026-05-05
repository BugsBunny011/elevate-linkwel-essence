import { renderToString } from "react-dom/server";
import { Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";

// Eagerly import all page modules for SSR so React.lazy's Suspense fallback
// (null) doesn't get serialized into the prerendered HTML.
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Products from "./pages/Products";
import ProductsLifts from "./pages/ProductsLifts";
import ProductsCranes from "./pages/ProductsCranes";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

export interface RenderResult {
  html: string;
  helmet: {
    title: string;
    meta: string;
    link: string;
    script: string;
  };
}

const SsrRoutes = () => (
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
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export function render(url: string): RenderResult {
  const helmetContext: { helmet?: any } = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <ScrollToTop />
        <SsrRoutes />
      </StaticRouter>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;

  return {
    html: appHtml,
    helmet: {
      title: helmet?.title?.toString() ?? "",
      meta: helmet?.meta?.toString() ?? "",
      link: helmet?.link?.toString() ?? "",
      script: helmet?.script?.toString() ?? "",
    },
  };
}
