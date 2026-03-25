"use client";

import { motion } from "framer-motion";

const products = [
  {
    emoji: "📱",
    title: "Smartphones",
    description: "Latest models, original devices from top brands",
  },
  {
    emoji: "💻",
    title: "Laptops",
    description: "Powerful machines built for work and creativity",
  },
  {
    emoji: "🔌",
    title: "Electronics",
    description: "Reliable devices for every need and budget",
  },
  {
    emoji: "🎧",
    title: "Accessories",
    description: "Everything to keep you connected and productive",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Products() {
  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.3)] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00d4ff] text-xs font-medium tracking-[0.3em] uppercase mb-4 font-grotesk">
            Our Catalogue
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-grotesk text-white">
            What We Offer
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={cardVariants}
              className="glass glow-border-hover group p-8 rounded-xl cursor-default transition-all duration-300"
              style={{
                background: "rgba(17, 17, 17, 0.8)",
                border: "1px solid rgba(0, 212, 255, 0.2)",
              }}
            >
              <div className="text-4xl mb-4">{product.emoji}</div>
              <h3 className="text-xl font-bold font-grotesk text-white mb-2 group-hover:text-[#00d4ff] transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
