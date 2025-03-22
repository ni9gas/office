"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, AlertTriangle, CheckCircle, Lock, ExternalLink, Database } from "lucide-react"

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

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-20 border-b border-primary/10 relative z-10 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Shield className="h-4 w-4 text-primary" strokeWidth={2} />
            <span className="text-sm font-medium">Enterprise Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Advanced <span className="text-primary">Security</span> Protection
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Our platform provides comprehensive anti-money laundering checks and security features for all your crypto
            transactions
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <AlertTriangle className="h-6 w-6 text-primary" strokeWidth={2} />,
              title: "Threat Detection",
              description:
                "Real-time alerts for suspicious wallet addresses and potential scam attempts with AI-powered analysis",
            },
            {
              icon: <CheckCircle className="h-6 w-6 text-primary" strokeWidth={2} />,
              title: "Compliance Checks",
              description:
                "Advanced algorithms to detect unusual patterns and high-risk transactions across multiple blockchains",
            },
            {
              icon: <Shield className="h-6 w-6 text-primary" strokeWidth={2} />,
              title: "Regulatory Compliance",
              description: "Stay compliant with global AML regulations including FATF, FinCEN, and EU directives",
            },
            {
              icon: <Database className="h-6 w-6 text-primary" strokeWidth={2} />,
              title: "Transaction Monitoring",
              description:
                "Continuous monitoring of all transactions with instant risk assessment and detailed audit trails",
            },
            {
              icon: <Lock className="h-6 w-6 text-primary" strokeWidth={2} />,
              title: "Secure Verification",
              description: "Multi-layer verification process with zero-knowledge proofs to ensure maximum security",
            },
            {
              icon: <ExternalLink className="h-6 w-6 text-primary" strokeWidth={2} />,
              title: "Web3 Integration",
              description: "Seamless integration with all major wallets, DeFi protocols, and blockchain platforms",
            },
          ].map((feature, index) => (
            <motion.div
              variants={fadeIn}
              className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(12,254,246,0.15)] group"
              key={index}
            >
              <div className="bg-black/60 rounded-xl p-3 inline-block mb-4 group-hover:bg-primary/10 transition-all duration-300 border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

