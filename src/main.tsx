import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// If the page was prerendered (has child nodes), hydrate; otherwise mount fresh.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
