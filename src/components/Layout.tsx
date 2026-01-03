import { useEffect, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    useEffect(() => {
        // ========================================
        // 🎯 PIXEL DE CONVERSÃO (UTMIFY)
        // ========================================
        if (typeof window !== "undefined") {
            // Pixel (mantido)
            (window as any).pixelId = "6958552db15cc93a035a8d66";
            const utmifyPixel = document.createElement("script");
            utmifyPixel.async = true;
            utmifyPixel.defer = true;
            utmifyPixel.src =
                "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
            document.head.appendChild(utmifyPixel);
            console.log("✅ Pixel Utmify carregado");

            // ========================================
            // 🏷️ SCRIPT PARA CAPTURA E PROPAGAÇÃO DE UTMs
            // ========================================
            const utmifyUtms = document.createElement("script");
            utmifyUtms.async = true;
            utmifyUtms.defer = true;
            utmifyUtms.src =
                "https://cdn.utmify.com.br/scripts/utms/latest.js";
            utmifyUtms.setAttribute("data-utmify-prevent-subids", "");
            document.head.appendChild(utmifyUtms);
            console.log("✅ Script de UTMs Utmify carregado");
        }
    }, []);

    return <main className="min-h-screen">{children}</main>;
};

export default Layout;