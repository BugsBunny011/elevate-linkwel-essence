import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type FilledContext } from "react-helmet-async";
import App from "./App";

export interface RenderResult {
  html: string;
  helmet: {
    title: string;
    meta: string;
    link: string;
    script: string;
  };
}

export function render(url: string): RenderResult {
  const helmetContext: Partial<FilledContext> = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <App router={(children) => <StaticRouter location={url}>{children}</StaticRouter>} />
    </HelmetProvider>
  );

  const helmet = (helmetContext as FilledContext).helmet;

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
