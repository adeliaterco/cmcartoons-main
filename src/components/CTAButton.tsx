import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  onClick?: () => void;
}

const CTAButton = ({
  text,
  variant = "primary",
  className = "",
  onClick,
}: CTAButtonProps) => {
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 font-bold py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto";

  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-cta hover:bg-primary-hover",
    secondary:
      "bg-gradient-to-r from-primary to-primary-hover text-primary-foreground shadow-cta",
    dark: "bg-foreground text-background hover:bg-foreground/90 shadow-lg",
  };

  const handleClick = () => {
    /* Se o componente recebeu uma função externa, respeita-a */
    if (onClick) {
      onClick();
      return;
    }

    /* URL base do checkout */
    const baseUrl =
      "https://pay.hotmart.com/Y103259745G?off=scobwn0k";

    /* 1. Tenta pegar UTMs da URL atual (página onde o visitante está) */
    const currentUtms = window.location.search.slice(1); // sem '?'

    /* 2. Se não tiver, usa o que guardamos na sessionStorage */
    const storedUtms = sessionStorage.getItem("utmParams") ?? "";

    const utmsToSend = currentUtms || storedUtms;

    /* 3. Monta URL final */
    const finalUrl =
      utmsToSend ? `${baseUrl}&${utmsToSend}` : baseUrl;

    window.location.href = finalUrl;
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