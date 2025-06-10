import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import HeroSection from "../components/heroSection";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative w-full min-h-screen">
      {/* 🔹 Menu Button - z index very high */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-6 right-6 z-[9999] bg-white text-black p-2 rounded-full border border-yellow-500 shadow-lg"
      >
        <Menu size={28} />
      </button>

      {/* 🔹 Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-64 bg-white text-black z-[100] p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={() => setMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <ul className="space-y-4">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#menu" className="hover:underline">Menu</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 🔹 Hero Section */}
      <HeroSection />
    </main>
  );
}
