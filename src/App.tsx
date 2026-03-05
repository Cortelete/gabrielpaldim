import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { User, Instagram, Globe, MessageCircle, MapPin, Star } from "lucide-react";

import Background from "./components/Background";
import LinkButton from "./components/LinkButton";
import BioModal from "./components/modals/BioModal";
import ContactModal from "./components/modals/ContactModal";
import LocationModal from "./components/modals/LocationModal";
import ReviewModal from "./components/modals/ReviewModal";
import CreditsModal from "./components/modals/CreditsModal";

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [logoRotation, setLogoRotation] = useState(0);
  const [logoScale, setLogoScale] = useState(1);

  // Favicon alternation
  useEffect(() => {
    const interval = setInterval(() => {
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (link) {
        link.href = link.href.includes("favicon.png") ? "/favicon2.png" : "/favicon.png";
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Automatic logo rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoRotation((prev) => prev + 360);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleLogoClick = () => {
    setLogoRotation((prev) => prev + 360 * 5); // Spin 5 times
    setLogoScale(1.2); // Zoom in
    
    // Open modal during the spin
    setTimeout(() => {
      setActiveModal("bio");
    }, 800);
  };

  const closeModal = () => {
    setActiveModal(null);
    setLogoScale(1); // Reset scale
  };

  const links = [
    {
      id: "bio",
      label: "Quem sou Eu?",
      icon: User,
      action: () => setActiveModal("bio"),
    },
    {
      id: "instagram",
      label: "Instagram",
      icon: Instagram,
      action: () => window.open("https://www.instagram.com/gabrielpaldim", "_blank"),
    },
    {
      id: "site",
      label: "Site Oficial",
      icon: Globe,
      action: () => window.open("https://www.gabrielpaldim.com/", "_blank"),
    },
    {
      id: "contact",
      label: "Contato",
      icon: MessageCircle,
      action: () => setActiveModal("contact"),
    },
    {
      id: "location",
      label: "Localização",
      icon: MapPin,
      action: () => setActiveModal("location"),
    },
    {
      id: "review",
      label: "Avalie-nos",
      icon: Star,
      action: () => setActiveModal("review"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-2 relative overflow-hidden">
      <Background />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-sm bg-white/60 backdrop-blur-xl border border-white/40 rounded-sm p-6 shadow-xl relative z-10"
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6 text-center">
          <motion.div
            className="relative w-48 h-48 mb-3 cursor-pointer perspective-1000"
            onClick={handleLogoClick}
            animate={{ rotateY: logoRotation, scale: logoScale }}
            transition={{ duration: 2, ease: "circOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front Side */}
            <div 
              className="absolute inset-0 w-full h-full flex items-center justify-center backface-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img
                src="/logo.png"
                alt="Gabriel Paldim Logo Front"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x400/transparent/d4af37?text=GP";
                }}
              />
            </div>

            {/* Back Side */}
            <div 
              className="absolute inset-0 w-full h-full flex items-center justify-center backface-hidden"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <img
                src="/logo2.png"
                alt="Gabriel Paldim Logo Back"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x400/transparent/d4af37?text=GP2";
                }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-sans font-bold text-gray-900 mb-1 tracking-wide"
          >
            Studio Hair
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs text-gray-600 font-light"
          >
            O cabelo que se encaixa com a sua melhor versão.
          </motion.p>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          {links.map((link, index) => (
            <LinkButton
              key={link.id}
              icon={link.icon}
              label={link.label}
              onClick={link.action}
              delay={0.4 + index * 0.1}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center"
        >
          <button
            onClick={() => setActiveModal("credits")}
            className="text-xs text-gray-500 hover:text-brand-gold transition-colors duration-300 flex items-center justify-center gap-1 mx-auto"
          >
            <span>Desenvolvido por InteligenciArte.IA</span>
            <span>✨</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Modals */}
      <BioModal isOpen={activeModal === "bio"} onClose={closeModal} />
      <ContactModal isOpen={activeModal === "contact"} onClose={closeModal} />
      <LocationModal isOpen={activeModal === "location"} onClose={closeModal} />
      <ReviewModal isOpen={activeModal === "review"} onClose={closeModal} />
      <CreditsModal isOpen={activeModal === "credits"} onClose={closeModal} />
    </div>
  );
}
