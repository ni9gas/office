"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Star } from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const testimonials = [
  {
    quote: "AMLYZE has transformed how we handle compliance. Their platform is intuitive and powerful.",
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

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

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
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1 mb-4">
            <Shield className="h-4 w-4 text-primary" strokeWidth={2} />
            <span className="text-xs font-medium">Client Testimonials</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Trusted by leading crypto businesses around the world
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-gray-900 to-black border border-primary/20 rounded-3xl p-8 shadow-2xl">
            <div className="absolute -top-5 -left-5 text-primary text-6xl opacity-30">"</div>
            <div className="absolute -bottom-5 -right-5 text-primary text-6xl opacity-30">"</div>

            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${activeTestimonial === index ? "opacity-100" : "opacity-0 absolute inset-0"}`}
                >
                  <p className="text-base md:text-lg text-gray-300 italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-sm md:text-base">{testimonial.author}</p>
                      <p className="text-gray-400 text-xs md:text-sm">{testimonial.position}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-primary" : "text-gray-600"}`}
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index ? "bg-primary w-6" : "bg-gray-600"}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

