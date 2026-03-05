import { MapPin } from "lucide-react";
import BaseModal from "./BaseModal";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LocationModal({ isOpen, onClose }: LocationModalProps) {
  const mapUrl = "https://www.google.com/maps/dir//Sal%C3%A3o+de+beleza+-+Gabriel+Paldim/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce42c4d8cbce17:0x75bab9462e125260!2m2!1d-46.5393286!2d-23.6700097";

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Localização">
      <div className="space-y-6 font-sans">
        <div className="rounded-sm overflow-hidden border border-gray-200 shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.1663133728734!2d-46.53932862466648!3d-23.670009678725386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42c4d8cbce17%3A0x75bab9462e125260!2sSal%C3%A3o%20de%20beleza%20-%20Gabriel%20Paldim!5e0!3m2!1spt-BR!2sbr!4v1772730578471!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="250" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[250px] bg-zinc-100"
          ></iframe>
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            Venha viver uma experiência única.
          </p>
          
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B68C7B] hover:bg-[#A07A6B] text-white px-6 py-3 rounded-sm transition-all shadow-lg"
          >
            <MapPin size={16} />
            <span className="uppercase text-xs tracking-widest">Abrir no Maps</span>
          </a>
        </div>
      </div>
    </BaseModal>
  );
}
