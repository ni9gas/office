"use client"

import type React from "react"
import { motion } from "framer-motion"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(10,132,255,0.15)] group"
    >
      <div className="bg-black/60 rounded-xl p-3 inline-block mb-4 group-hover:bg-primary/10 transition-all duration-300 border border-white/5">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-all duration-300">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

