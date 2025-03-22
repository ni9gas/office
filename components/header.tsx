"use client"

import Link from "next/link"
import Image from "next/image"
import { Wallet, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-primary/10 bg-black/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2 relative z-10">
          {/* Replace with your custom logo */}
          <div className="w-8 h-8 relative">
            {/* Replace the src with your actual logo path when you have it */}
            <Image
              src="/headerlogo.svg?height=30&width=30"
              alt="AMLYZE LOGO"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>
          <span className="text-base font-bold text-white">
            AM<span className="text-primary">LYZE</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Platform", href: "#platform" },
            { name: "Features", href: "#features" },
            { name: "Security", href: "#security" },
            { name: "Pricing", href: "#pricing" },
            { name: "Documentation", href: "#docs" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-primary text-sm md:text-base font-medium transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-primary/20 text-primary hover:bg-primary/10 hover:text-primary-foreground"
          >
            <span className="text-sm md:text-base">Log In</span>
          </Button>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center text-sm md:text-base">
              Connect Wallet{" "}
              <Wallet
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>

          <button className="md:hidden text-white p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu strokeWidth={2} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-primary/10 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {[
              { name: "Platform", href: "#platform" },
              { name: "Features", href: "#features" },
              { name: "Security", href: "#security" },
              { name: "Pricing", href: "#pricing" },
              { name: "Documentation", href: "#docs" },
              { name: "Log In", href: "#login" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

