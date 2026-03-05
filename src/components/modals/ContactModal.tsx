import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import BaseModal from "./BaseModal";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    date: "",
    observation: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Olá! Me chamo *${formData.name}*, tenho *${formData.age}* anos.\n\nGostaria de agendar um horário, de preferência para o dia: *${formData.date}*.\n\nObservação: ${formData.observation}`;
    const url = `https://wa.me/5511930193890?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Contato">
      <form onSubmit={handleSubmit} className="space-y-4 font-sans">
        <div>
          <label className="block text-xs font-bold text-black uppercase mb-1">Nome</label>
          <input
            required
            type="text"
            className="w-full bg-white border border-gray-200 rounded-sm p-3 text-sm text-gray-900 focus:outline-none focus:border-black transition-colors"
            placeholder="Seu nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-black uppercase mb-1">Idade</label>
            <input
              required
              type="number"
              className="w-full bg-white border border-gray-200 rounded-sm p-3 text-sm text-gray-900 focus:outline-none focus:border-black transition-colors"
              placeholder="Idade"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-black uppercase mb-1">Data</label>
            <input
              required
              type="date"
              className="w-full bg-white border border-gray-200 rounded-sm p-3 text-sm text-gray-900 focus:outline-none focus:border-black transition-colors [color-scheme:light]"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-black uppercase mb-1">Mensagem</label>
          <textarea
            rows={3}
            className="w-full bg-white border border-gray-200 rounded-sm p-3 text-sm text-gray-900 focus:outline-none focus:border-black transition-colors resize-none"
            placeholder="Como podemos ajudar?"
            value={formData.observation}
            onChange={(e) => setFormData({ ...formData, observation: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#B68C7B] hover:bg-[#A07A6B] text-white font-medium py-3 px-4 rounded-sm flex items-center justify-center gap-2 transition-all shadow-lg"
        >
          <span className="uppercase text-xs tracking-widest">Enviar no WhatsApp</span>
          <Send size={16} />
        </button>
      </form>
    </BaseModal>
  );
}
