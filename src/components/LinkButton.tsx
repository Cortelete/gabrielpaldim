import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { FC } from "react";

interface LinkButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  delay?: number;
}

const LinkButton: FC<LinkButtonProps> = ({ icon: Icon, label, onClick, delay = 0 }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(182,140,123,0.4)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative w-full flex items-center p-3 mb-2 bg-[#B68C7B] border border-white/20 rounded-sm overflow-hidden backdrop-blur-md hover:bg-[#A07A6B] transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors text-white">
        <Icon size={16} />
      </div>
      
      <span className="flex-grow text-center text-sm font-medium text-white tracking-wide">
        {label}
      </span>
      
      {/* Spacer to balance the icon on the left */}
      <div className="w-8" />
    </motion.button>
  );
}

export default LinkButton;
