import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/linkwel-logo.png";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center navy-gradient"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8"
      >
        <img src={logo} alt="Linkwel Engineers" className="w-24 h-24 object-contain" />
      </motion.div>

      {/* Company Name */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-gold-light font-heading text-2xl md:text-3xl font-bold tracking-wider mb-2"
      >
        LINKWEL
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-12"
      >
        Engineers
      </motion.p>

      {/* Progress Bar */}
      <div className="w-48 h-[1px] bg-gold/10 relative overflow-hidden rounded-full">
        <motion.div
          className="absolute inset-y-0 left-0 gold-gradient"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.2, ease: "linear" }}
        />
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-gold-light font-heading text-sm italic mt-8 tracking-wide"
      >
        Sky Is the Limit.
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
