import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.3, rotate: 5 }}
      whileTap={{ scale: 0.8, rotate: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="absolute top-15 right-30 z-[9999] bg-white text-black p-2 rounded-full border border-green-900 shadow-lg"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </motion.button>
  );
}
