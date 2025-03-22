"use client"

import type React from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function StatCard({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className="bg-gradient-to-br from-black to-gray-900 p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(10,132,255,0.15)] group"
    >
      <div className="bg-transparent/100 rounded-lg p-2 inline-block mb-3 group-hover:bg-primary/10 transition-all duration-300 border border-white/5">
        {icon}
      </div>
      <div className="text-xl font-bold mb-1 flex items-end">
        {inView ? <CountUp end={value} duration={2.5} separator="," /> : 0}
        <span className="text-primary ml-1 text-sm">+</span>
      </div>
      <p className="text-gray-400 text-sm">{label}</p>
    </motion.div>
  )
}

