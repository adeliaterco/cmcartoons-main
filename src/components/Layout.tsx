import { useEffect, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      /* 1. Captura UTMs da primeira visita e guarda na sessionStorage */
      const qs = window.location.search.slice(1);         // remove o "?"
      if (qs) sessionStorage.setItem("utmParams", qs);

      /* 2. Pixel Utmify (mantido) */
      (window as any).pixelId = "6958552db15cc93a035a8d66";
      const utmifyPixel = document.createElement("script");
      utmifyPixel.async = true;
      utmifyPixel.defer = true;
      utmifyPixel.src =
        "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
      document.head.appendChild(utmifyPixel);

      /* 3. Script de propagação de UTMs (mantido) */
      const utmifyUtms = document.createElement("script");
      utmifyUtms.async = true;
      utmifyUtms.defer = true;
      utmifyUtms.src =
        "https://cdn.utmify.com.br/scripts/utms/latest.js";
      utmifyUtms.setAttribute("data-utmify-prevent-subids", "");
      document.head.appendChild(utmifyUtms);
    }
  }, []);

  return <main className="min-h-screen">{children}</main>;
};

export default Layout;