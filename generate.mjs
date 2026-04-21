// Static site generator: builds the SPA, then renders each route to a real .html
// file using React's renderToString via a Vite SSR build. No Puppeteer, no
// external services. Runs as `npm run build` postbuild step.

import { build } from "vite";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "dist");
const ssrDir = path.resolve(__dirname, "dist-ssr");

// ---------- Routes to prerender ----------
// Mirrors src/data/products.ts slugs to avoid pulling in TSX/asset imports here.
const productSlugs = [
  "passenger-elevators",
  "home-elevators",
  "goods-elevators",
  "hospital-elevators",
  "capsule-elevators",
  "car-elevators",
  "overhead-cranes",
  "single-girder-cranes",
  "double-girder-cranes",
  "gantry-cranes",
  "goliath-cranes",
  "jib-cranes",
  "electric-hoists",
];

const routes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/products",
  "/products/lifts",
  "/products/cranes",
  "/contact",
  ...productSlugs.map((s) => `/products/${s}`),
];

// ---------- Step 1: Build the SSR bundle ----------
console.log("\n[generate] Building SSR bundle...");
await build({
  build: {
    ssr: "src/entry-server.tsx",
    outDir: "dist-ssr",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "src/entry-server.tsx"),
    },
  },
  ssr: {
    // Bundle these so SSR doesn't try to externalize them and break on ESM/CJS interop.
    noExternal: [
      "react-helmet-async",
      "framer-motion",
      "react-router-dom",
      "@radix-ui/*",
      "lucide-react",
      "sonner",
      "vaul",
      "embla-carousel-react",
      "cmdk",
      "next-themes",
      "react-day-picker",
      "react-resizable-panels",
      "input-otp",
      "recharts",
    ],
  },
  logLevel: "warn",
});

// ---------- Step 2: Load the SSR render() function ----------
const entryPath = path.join(ssrDir, "entry-server.js");
const { render } = await import(pathToFileURL(entryPath).href);

// ---------- Step 3: Read the built index.html template ----------
const templatePath = path.join(distDir, "index.html");
const template = await fs.readFile(templatePath, "utf-8");

if (!template.includes('<div id="root"></div>')) {
  console.warn(
    '[generate] Warning: <div id="root"></div> not found verbatim in index.html template.'
  );
}

// ---------- Step 4: Render each route and write a static .html file ----------
let success = 0;
const failures = [];

for (const url of routes) {
  console.log(`[generate] Rendering: ${url}`);
  try {
    const { html, helmet } = render(url);

    if (!html || html.length < 50) {
      throw new Error(
        `Rendered HTML for ${url} is empty or suspiciously short (length=${html?.length ?? 0}).`
      );
    }

    let page = template.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${html}</div>`
    );

    // Inject Helmet-managed head tags (title/meta/link/script) into <head>.
    const headInjection = [helmet.title, helmet.meta, helmet.link, helmet.script]
      .filter(Boolean)
      .join("\n    ");

    if (headInjection) {
      page = page.replace("</head>", `    ${headInjection}\n  </head>`);
    }

    // Decide output file path:
    //   "/"                       -> dist/index.html
    //   "/about"                  -> dist/about.html
    //   "/products/jib-cranes"    -> dist/products/jib-cranes.html
    let outPath;
    if (url === "/") {
      outPath = path.join(distDir, "index.html");
    } else {
      const trimmed = url.replace(/^\//, "");
      outPath = path.join(distDir, `${trimmed}.html`);
    }

    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, page, "utf-8");
    console.log(
      `[generate] ✓ Rendered: ${url}  ->  ${path.relative(distDir, outPath)} (${html.length} chars)`
    );
    success++;
  } catch (err) {
    console.error(`[generate] ✗ Failed: ${url}`);
    console.error(err);
    failures.push({ url, error: err });
  }
}

// ---------- Step 5: Cleanup ----------
await fs.rm(ssrDir, { recursive: true, force: true });

console.log(
  `\n[generate] Done. ${success}/${routes.length} routes prerendered.` +
    (failures.length ? ` ${failures.length} failed.` : "")
);

console.log('=== PRERENDER COMPLETE ===');
console.log('Files written:', routes.length);

if (failures.length) {
  process.exit(1);
}
