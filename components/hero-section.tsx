"use client"

import { motion } from "framer-motion"
import { Wallet, Shield, NotebookTabs } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroCard from "./hero-card"

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

export default function HeroSection() {
  return (
    <section className="relative z-10 overflow-hidden py-20 md:py-32 border-b border-primary/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5"
            >
              <Shield className="h-4 w-4 text-primary" strokeWidth={2} />
              <span className="text-xl font-medium">Enterprise-Grade Security</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Blockchain</span>{" "}
              <span className="text-primary relative">
                Security
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
              </span>{" "}
              <span className="text-white">Platform</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed">
              Advanced AML compliance and security for crypto transactions. Protect your assets with real-time
              monitoring and stay compliant with global regulatory requirements.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semi px-4 py-3 rounded-md relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center text-base md:text-lg">
                  Connect Wallet{" "}
                  <Wallet
                    className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 text-primary hover:bg-primary/10 hover:text-primary-foreground font-semi px-4 py-2 rounded-md group"
              >
                <span className="flex items-center text-base md:text-lg">
                  <NotebookTabs className="mr-1 h-3 w-3" strokeWidth={2} />
                  Get Demo
                </span>
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="flex items-center gap-4 text-base text-gray-400">
              <div className="flex -space-x-2">
                {[
                  "https://index-flax-eight.vercel.app/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png",
                  "https://index-flax-eight.vercel.app/coinbase-wallet-logo.png",
                  "https://index-flax-eight.vercel.app/unnamed.png",
                  "https://crypto-central.io/library/uploads/Trezor-Logo.png",
                ].map((src, index) => (
                  <div key={index} className="w-6 h-6 rounded-full overflow-hidden border-2 border-black relative">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Partner logo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p>
                Trusted by <span className="text-primary font-medium">2,000+</span> Crypto Companies
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-3 pt-2">
              {["SOC 2 Certified", "GDPR Compliant", "ISO 27001", "AML Verified"].map((badge, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-base font-medium flex items-center gap-1"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="flex justify-center md:justify-end">
            <HeroCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

