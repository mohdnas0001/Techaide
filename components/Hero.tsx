"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glow pulse */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[900px] h-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 60%)",
            animation: "pulse-glow 6s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#00d4ff] text-sm font-medium tracking-[0.3em] uppercase mb-6 font-grotesk">
            Premium Electronics & Accessories
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-grotesk leading-tight mb-6">
            <span className="text-white">Power Your World</span>
            <br />
            <span
              style={{
                color: "#00d4ff",
                textShadow:
                  "0 0 30px rgba(0,212,255,0.6), 0 0 60px rgba(0,212,255,0.3)",
              }}
            >
              with Premium
            </span>
            <br />
            <span className="text-white">Technology</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-gray-400 text-lg sm:text-xl mb-3 font-light tracking-wide">
            Smartphones. Laptops. Electronics. Accessories.
          </p>
          <p className="text-gray-500 text-sm sm:text-base mb-10 tracking-wide">
            Visit us at{" "}
            <span className="text-[#00d4ff]">BANEX Plaza, WUSE 2</span> — Abuja
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => handleScroll("products")}
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #0099cc)",
              color: "#0a0a0a",
              boxShadow: "0 0 20px rgba(0,212,255,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(0,212,255,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(0,212,255,0.4)";
            }}
          >
            Explore Products
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide border transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(0,212,255,0.5)",
              color: "#00d4ff",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,212,255,0.1)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(0,212,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Find Us
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
