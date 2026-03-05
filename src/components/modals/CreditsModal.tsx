import { useState } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import BaseModal from "./BaseModal";

interface CreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreditsModal({ isOpen, onClose }: CreditsModalProps) {
  const [name, setName] = useState("");

  const handleContactDev = () => {
    if (!name.trim()) {
      alert("Por favor, digite seu nome.");
      return;
    }
    const message = `Olá, vi o link da Gabriel Paldim e quero um site igual! Meu nome é ${name}.`;
    const url = `https://wa.me/5541988710303?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Créditos">
      <div className="space-y-6 text-center font-sans">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-black uppercase tracking-wide">InteligenciArte.IA</h3>
          <p className="text-gray-500 text-xs">Transformando ideias em realidade digital.</p>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://instagram.com/inteligenciarte.ia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#B68C7B] hover:bg-[#A07A6B] rounded-sm transition-colors text-white shadow-md"
          >
            <Instagram size={16} />
            <span className="text-xs font-medium">@inteligenciarte.ia</span>
          </a>
        </div>

        <div className="border-t border-gray-200 pt-6 space-y-4">
          <p className="text-gray-900 font-medium text-sm">Quer um site incrível como esse?</p>
          
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full bg-white border border-gray-200 rounded-sm p-3 text-sm text-gray-900 focus:outline-none focus:border-black transition-colors text-center"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            onClick={handleContactDev}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-green-500/20"
          >
            <MessageCircle size={18} />
            <span className="uppercase text-xs tracking-widest">WhatsApp</span>
          </button>
        </div>
      </div>
    </BaseModal>
  );
}
