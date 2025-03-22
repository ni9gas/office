"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function BlockchainsSection() {
  const blockchains = [
    {
      name: "Bitcoin",
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    },
    {
      name: "Ethereum",
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    },
    {
      name: "Solana",
      icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
    },
    {
      name: "Polygon",
      icon: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    },
    {
      name: "Binance",
      icon: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
    },
    {
      name: "Avalanche",
      icon: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
    },
    {
      name: "Cardano",
      icon: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    },
    {
      name: "Polkadot",
      icon: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    },
  ]

  return (
    <section className="py-20 border-b border-primary/10 relative z-10 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Shield className="h-4 w-4 text-primary" strokeWidth={2} />
            <span className="text-xs font-medium">Wide Coverage</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Supported <span className="text-primary">Blockchains</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            We support all major cryptocurrencies and blockchain networks
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {blockchains.map((chain, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="flex items-center gap-3 bg-gray-900 rounded-full px-6 py-3 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(12,254,246,0.3)] group"
            >
              <div className="bg-black p-2 rounded-full group-hover:bg-primary/10 transition-all duration-300 w-10 h-10 flex items-center justify-center">
                <img
                  src={chain.icon || "/placeholder.svg"}
                  alt={`${chain.name} logo`}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="font-medium text-sm md:text-base">{chain.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

