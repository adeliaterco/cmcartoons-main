import { useEffect, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // ========================================
    // 🎯 PIXEL DA UTMIFY (RASTREAMENTO DE UTMs)
    // ========================================
    if (typeof window !== 'undefined') {
      (window as any).pixelId = "6958552db15cc93a035a8d66";
      const utmifyScript = document.createElement("script");
      utmifyScript.setAttribute("async", "");
      utmifyScript.setAttribute("defer", "");
      utmifyScript.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
      document.head.appendChild(utmifyScript);
      console.log('✅ Pixel Utmify carregado');
    }
  }, []);

  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
};

export default Layout;
