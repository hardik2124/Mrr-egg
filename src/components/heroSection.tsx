import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((e) => console.log("Autoplay error:", e));
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden z-0">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/videos/mrregg2.mp4"
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-10]"
      />

      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          India’s Most Egg-ceptional Franchise
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-2xl max-w-xl mb-6"
        >
          Join the revolution in taste and success with Mrr egg.
        </motion.p>
        <motion.a
          href="#franchise"
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg"
        >
          Start Your Franchise Journey
        </motion.a>
      </div>
    </section>
  );
}
