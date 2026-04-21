import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;

// If the page was prerendered, hydrate. Otherwise, do a normal client render.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, <App />);
} else {
  createRoot(rootEl).render(<App />);
}
