"use client"

import type React from "react"

import { useEffect, useRef } from "react"
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const ParticleBackgroundComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      const particleCount = Math.min(window.innerWidth / 10, 100)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color:
            i % 3 === 0
              ? "rgba(245, 215, 66, 0.3)"
              : i % 3 === 1
                ? "rgba(229, 57, 53, 0.2)"
                : "rgba(255, 255, 255, 0.1)",
        })
      }
    }

    createParticles()

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(245, 215, 66, ${0.1 - distance / 1000})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].x += particles[i].speedX
        particles[i].y += particles[i].speedY

        if (particles[i].x > canvas.width || particles[i].x < 0) {
          particles[i].speedX = -particles[i].speedX
        }

        if (particles[i].y > canvas.height || particles[i].y < 0) {
          particles[i].speedY = -particles[i].speedY
        }

        ctx.beginPath()
        ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2)
        ctx.fillStyle = particles[i].color
        ctx.fill()
      }

      connectParticles()
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-70" />
}

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) => {
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
      className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,215,66,0.3)] group"
    >
      <div className="bg-black/50 rounded-xl p-3 inline-block mb-4 group-hover:bg-yellow-500/20 transition-all duration-300">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-1 flex items-end">
        {inView ? <CountUp end={value} duration={2.5} separator="," /> : 0}
        <span className="text-yellow-500 ml-1">+</span>
      </div>
      <p className="text-gray-400">{label}</p>
    </motion.div>
  )
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,215,66,0.3)] group"
    >
      <div className="bg-black/50 rounded-xl p-3 inline-block mb-4 group-hover:bg-yellow-500/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-all duration-300">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

const testimonials = [
  {
    quote: "ETERFY.XYZ has transformed how we handle compliance. Their platform is intuitive and powerful.",
    author: "Sarah Johnson",
    position: "Compliance Officer, CryptoTrade Inc.",
    rating: 5,
  },
  {
    quote:
      "The risk assessment tools are incredibly accurate. We've caught several suspicious transactions that would have slipped through.",
    author: "Michael Chen",
    position: "Security Director, BlockFin",
    rating: 5,
  },
  {
    quote:
      "Implementation was seamless and the support team is always responsive. Highly recommended for any crypto business.",
    author: "Elena Rodriguez",
    position: "CEO, DeFi Solutions",
    rating: 4,
  },
]

import Header from "@/components/header"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlockchainsSection from "@/components/blockchains-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 z-[-1]">
        <ParticleBackground />
      </div>

      <Header />

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Blockchains Section */}
        <BlockchainsSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

