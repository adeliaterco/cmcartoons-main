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
    // 🎯 EVENTOS DE CONVERSÃO NOS PIXELS
    // ========================================
    
    // Facebook Pixel - InitiateCheckout
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Cartelas Mágicas de Matemática',
        content_category: 'Produto Digital',
        content_type: 'product',
        value: 10.00,
        currency: 'BRL'
      });
      console.log('✅ Facebook Pixel: InitiateCheckout disparado');
    }

    // Google Analytics 4 - begin_checkout
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'begin_checkout', {
        currency: 'BRL',
        value: 10.00,
        items: [{
          item_id: 'cartelas_magicas_matematica',
          item_name: 'Cartelas Mágicas de Matemática',
          item_category: 'Produto Digital',
          price: 10.00,
          quantity: 1
        }]
      });
      console.log('✅ Google Analytics: begin_checkout disparado');
    }

    // TikTok Pixel - InitiateCheckout
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('InitiateCheckout', {
        content_name: 'Cartelas Mágicas de Matemática',
        content_type: 'product',
        content_id: 'cartelas_magicas_matematica',
        value: 10.00,
        currency: 'BRL',
        quantity: 1
      });
      console.log('✅ TikTok Pixel: InitiateCheckout disparado');
    }

    // Google Tag Manager - Evento customizado
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cta_click',
        button_text: text,
        button_variant: variant,
        product_name: 'Cartelas Mágicas de Matemática',
        product_value: 10.00,
        currency: 'BRL'
      });
      console.log('✅ GTM: cta_click disparado');
    }

    // ========================================
    // 🔗 AÇÃO ORIGINAL DO BOTÃO
    // ========================================
    // Mantém a funcionalidade original do botão
    if (onClick) {
      onClick();
    } else {
      window.open("#comprar", "_self");
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