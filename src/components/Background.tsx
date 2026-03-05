import { motion } from "motion/react";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F5F5F5]">
      {/* Base Gradient - Subtle Shift */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #F5F5F5 0%, transparent 70%)",
            "radial-gradient(circle at 100% 0%, #FFFFFF 0%, transparent 70%)",
            "radial-gradient(circle at 100% 100%, #F5F5F5 0%, transparent 70%)",
            "radial-gradient(circle at 0% 100%, #FFFFFF 0%, transparent 70%)",
            "radial-gradient(circle at 0% 0%, #F5F5F5 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Golden Orb - Top Left */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#d4af37] opacity-[0.03] blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Golden Orb - Bottom Right */}
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#d4af37] opacity-[0.04] blur-[100px]"
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating White Light - Center */}
      <motion.div
        className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-white opacity-20 blur-[80px]"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Texture Overlay for Grain/Elegance */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-multiply"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#D4AF37]/5 pointer-events-none" />
    </div>
  );
}
