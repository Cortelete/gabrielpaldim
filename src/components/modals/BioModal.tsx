import { motion } from "motion/react";
import BaseModal from "./BaseModal";

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BioModal({ isOpen, onClose }: BioModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Quem sou eu">
      <div className="space-y-6 text-gray-800 font-sans">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-2"
        >
          <span className="text-2xl font-bold text-black uppercase tracking-tighter">Gabriel Paldim</span>
          <p className="text-sm leading-relaxed text-gray-600">
            Especialista em beleza e imagem. Transformo estética em arte com excelência e sofisticação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#B68C7B] text-white p-4 rounded-sm shadow-lg"
        >
          <p className="text-sm font-medium italic text-center">
            "Criar uma identidade que valoriza a essência de cada pessoa."
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-gray-600 leading-relaxed"
        >
          Resultados que unem técnica avançada e sensibilidade. Uma carreira dedicada a elevar a autoestima.
        </motion.p>
      </div>
    </BaseModal>
  );
}
