"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Brain, Headphones } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Only original, premium products from trusted brands.",
  },
  {
    icon: Brain,
    title: "Expert Guidance",
    description:
      "Our team helps you choose the right technology with confidence.",
  },
  {
    icon: Headphones,
    title: "Trusted Support",
    description:
      "Dependable support and guidance at every step of your journey.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.3)] to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00d4ff] text-xs font-medium tracking-[0.3em] uppercase mb-4 font-grotesk">
            Our Promise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-grotesk text-white">
            Why Choose Techaide?
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent" />
        </motion.div>

        <div className="space-y-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex items-start gap-6 p-6 rounded-xl group"
                style={{
                  background: "rgba(17, 17, 17, 0.6)",
                  border: "1px solid rgba(0, 212, 255, 0.15)",
                }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(0, 212, 255, 0.1)",
                    border: "1px solid rgba(0, 212, 255, 0.3)",
                  }}
                >
                  <Icon size={22} color="#00d4ff" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-semibold font-grotesk text-white">
                      {feature.title}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,212,255,0.3)] to-transparent" />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
