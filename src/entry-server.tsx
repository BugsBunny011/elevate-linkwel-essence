import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
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
  const helmetContext: { helmet?: any } = {};

  const appHtml = renderToString(
    <App
      helmetContext={helmetContext}
      router={(children) => <StaticRouter location={url}>{children}</StaticRouter>}
    />
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
