"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Download } from "lucide-react";

const QR_URL = "https://techaide.vercel.app";

export default function QRCodeSection() {
  const qrContainerRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const svgEl = qrContainerRef.current?.querySelector("svg");
    if (!svgEl) return;

    const svgData = new XMLSerializer().serializeToString(svgEl);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    const canvas = document.createElement("canvas");
    const size = 440;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);

      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "techaide-qr.png";
      link.href = pngUrl;
      link.click();

      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <section id="qr" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.3)] to-transparent" />

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="text-[#00d4ff] text-xs font-medium tracking-[0.3em] uppercase mb-4 font-grotesk">
            Share Techaide
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-grotesk text-white mb-4">
            Scan to Visit Us
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Share Techaide with anyone — scan to open this page
          </p>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col items-center"
        >
          <div
            ref={qrContainerRef}
            className="inline-flex p-6 rounded-2xl glow-border"
            style={{
              background: "rgba(17, 17, 17, 0.9)",
              border: "1px solid rgba(0, 212, 255, 0.4)",
              boxShadow:
                "0 0 30px rgba(0,212,255,0.25), inset 0 0 30px rgba(0,212,255,0.05)",
            }}
          >
            <QRCodeSVG
              value={QR_URL}
              size={220}
              bgColor="#0a0a0a"
              fgColor="#00d4ff"
              level="H"
            />
          </div>

          <p className="text-gray-600 text-xs mt-4 font-mono tracking-wide">
            {QR_URL}
          </p>

          <button
            onClick={handleDownload}
            className="mt-6 flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(0,212,255,0.4)",
              color: "#00d4ff",
              background: "rgba(0,212,255,0.05)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,212,255,0.12)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(0,212,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,212,255,0.05)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Download size={16} />
            Download QR Code
          </button>
        </motion.div>
      </div>
    </section>
  );
}
