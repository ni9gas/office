"use client"

import { motion } from "framer-motion"
import { Shield, Bitcoin, BarChart3, CheckCircle } from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 border-b border-primary/10 relative z-10 bg-black">
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
            <span className="text-xs font-medium">Simple Process</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            How <span className="text-primary">It Works</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Our platform makes AML compliance simple and effective
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 transform -translate-y-1/2 hidden md:block"></div>

          {[
            {
              step: 1,
              title: "Connect Your Wallet",
              description: "Securely connect your crypto wallet or exchange account to our platform",
              icon: <Bitcoin className="h-5 w-5 text-primary" strokeWidth={2} />,
            },
            {
              step: 2,
              title: "Analyze Transactions",
              description: "Our AI-powered system analyzes transactions for suspicious patterns",
              icon: <BarChart3 className="h-5 w-5 text-primary" strokeWidth={2} />,
            },
            {
              step: 3,
              title: "Get Detailed Reports",
              description: "Receive comprehensive reports with risk scores and compliance recommendations",
              icon: <CheckCircle className="h-5 w-5 text-primary" strokeWidth={2} />,
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.2,
                  },
                },
              }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(12,254,246,0.15)] h-full flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground font-bold rounded-full w-8 h-8 flex items-center justify-center mb-6 relative text-xs">
                  {step.step}
                  <div className="absolute -inset-1 rounded-full border border-primary/50 animate-ping"></div>
                </div>
                <div className="bg-black/60 rounded-lg p-2 mb-3 flex items-center justify-center border border-white/5">
                  {step.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

