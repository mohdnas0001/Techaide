"use client";

import { motion } from "framer-motion";
import { MapPin, Instagram, Music2 } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/techaide_0601?igsh=MWR1YTRlMnluMjY5OQ%3D%3D&utm_source=qr",
    label: "@techaide_0601",
  },
  {
    name: "TikTok",
    icon: Music2,
    href: "https://www.tiktok.com/@techaide0?_r=1&_t=ZS-94hmfypzZ22",
    label: "@techaide0",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.3)] to-transparent" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00d4ff] text-xs font-medium tracking-[0.3em] uppercase mb-4 font-grotesk">
            Visit Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-grotesk text-white">
            Find Us
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Address card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-xl"
            style={{
              background: "rgba(17, 17, 17, 0.8)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
              boxShadow: "0 0 20px rgba(0,212,255,0.05)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(0, 212, 255, 0.1)",
                  border: "1px solid rgba(0, 212, 255, 0.3)",
                }}
              >
                <MapPin size={18} color="#00d4ff" />
              </div>
              <h3 className="text-base font-semibold font-grotesk text-white">
                Location
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Suit BSF 107, BANEX Plaza
              <br />
              WUSE 2 — Abuja
            </p>
          </motion.div>

          {/* Social links card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-xl"
            style={{
              background: "rgba(17, 17, 17, 0.8)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
              boxShadow: "0 0 20px rgba(0,212,255,0.05)",
            }}
          >
            <h3 className="text-base font-semibold font-grotesk text-white mb-4">
              Follow Us
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 group"
                    style={{
                      border: "1px solid rgba(0, 212, 255, 0.15)",
                      background: "rgba(0, 212, 255, 0.03)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(0,212,255,0.1)";
                      e.currentTarget.style.borderColor =
                        "rgba(0,212,255,0.4)";
                      e.currentTarget.style.boxShadow =
                        "0 0 15px rgba(0,212,255,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(0,212,255,0.03)";
                      e.currentTarget.style.borderColor =
                        "rgba(0,212,255,0.15)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Icon
                      size={18}
                      color="#00d4ff"
                      className="flex-shrink-0"
                    />
                    <div>
                      <p className="text-xs text-gray-500 leading-none mb-0.5">
                        {social.name}
                      </p>
                      <p className="text-sm text-gray-300 group-hover:text-[#00d4ff] transition-colors duration-200">
                        {social.label}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
