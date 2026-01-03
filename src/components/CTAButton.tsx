import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  onClick?: () => void;
}

const CTAButton = ({ text, variant = "primary", className = "", onClick }: CTAButtonProps) => {
  const baseStyles = "group relative inline-flex items-center justify-center gap-2 font-bold py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto";
  
  const variants = {
    primary: "bg-primary text-primary-foreground shadow-cta hover:bg-primary-hover",
    secondary: "bg-gradient-to-r from-primary to-primary-hover text-primary-foreground shadow-cta",
    dark: "bg-foreground text-background hover:bg-foreground/90 shadow-lg"
  };

  const handleClick = () => {
    // ========================================
    // 🔗 REDIRECIONAMENTO PARA CHECKOUT COM UTMs
    // ========================================
    if (onClick) {
      onClick();
    } else {
      // Link base da Hotmart
      const baseUrl = 'https://pay.hotmart.com/Y103259745G?off=scobwn0k';
      
      // Captura as UTMs da URL atual (capturadas pelo Pixel Utmify)
      const urlParams = new URLSearchParams(window.location.search);
      const currentUtms = urlParams.toString();
      
      // UTMs do Facebook Ads (configuradas no Layout)
      const fbAdsUtms = (window as any).fbAdsUtms || '';
      
      // Monta a URL final com as UTMs
      let checkoutUrl = baseUrl;
      
      // Prioriza as UTMs da URL atual (se existirem)
      if (currentUtms) {
        checkoutUrl += '&' + currentUtms;
        console.log('✅ UTMs capturadas da URL:', currentUtms);
      } 
      // Se não houver UTMs na URL, usa as UTMs do Facebook Ads
      else if (fbAdsUtms) {
        checkoutUrl += '&' + fbAdsUtms;
        console.log('✅ UTMs do Facebook Ads aplicadas:', fbAdsUtms);
      }
      
      console.log('🔗 Redirecionando para:', checkoutUrl);
      window.location.href = checkoutUrl;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span>{text}</span>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
};

export default CTAButton;