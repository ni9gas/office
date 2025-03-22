"use client"

import { motion } from "framer-motion"
import { ChevronRight, Shield, AlarmClockCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function CTASection() {
  return (
    <section className="py-20 relative z-10 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Secure your crypto transactions <span className="text-primary">today</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Join thousands of businesses and individuals who trust AMLYZE for their blockchain security and compliance
              needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-2 rounded-md relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center text-base md:text-lg">
                  <Shield className="mr-1 h-3 w-3" strokeWidth={2} />
                  Connect Walllet
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 text-primary hover:bg-primary/10 hover:text-primary-foreground font-medium px-4 py-2 rounded-md group"
              >
                <span className="flex items-center text-base md:text-lg">
                  <AlarmClockCheck className="mr-1 h-3 w-3" strokeWidth={2} />
                  Schedule Demo{" "}
                  <ChevronRight
                    className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

