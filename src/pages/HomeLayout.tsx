
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuButton from "../components/ManuButton";
import { Outlet } from "react-router-dom";
import HeroSection from "../components/heroSection";


const HomeLayout = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (<>
        <div>
            <MenuButton isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Blur Background */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Dropdown full page menu */}
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 left-0 w-full h-full bg-transparent backdrop-blur-md z-50 flex flex-col"
                        >
                            <div className="flex justify-between items-center p-6 border-b border-white/30 text-white">
                                <h2 className="text-lg font-semibold">Menu</h2>
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    aria-label="Close menu"
                                    className="text-white text-2xl font-bold"
                                >
                                    ×
                                </button>
                            </div>
                            <ul className="flex flex-col space-y-8 p-6 text-center text-white text-xl flex-grow justify-center">
                                <li>
                                    <a href="#home" onClick={() => setMenuOpen(false)} className="hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" onClick={() => setMenuOpen(false)} className="hover:underline">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#menu" onClick={() => setMenuOpen(false)} className="hover:underline">
                                        Menu
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:underline">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </div>
        <main>
            <HeroSection />
            <HeroSection />
            <HeroSection />
            <HeroSection />
        </main>
    </>)
}

export default HomeLayout;