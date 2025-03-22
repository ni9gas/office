"use client"

import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Github, Mail, Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-primary/10 py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="rounded-md p-1.5 bg-transparent flex items-center justify-center">
                <Image
                  src="/logofooter.svg?height=24&width=24"
                  alt="AMLYZE-FOOTER Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">
                AM<span className="text-primary">LYZE</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Enterprise-grade blockchain security and AML compliance solution for cryptocurrency transactions
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={18} strokeWidth={2} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={18} strokeWidth={2} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github size={18} strokeWidth={2} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Mail size={18} strokeWidth={2} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {[
            {
              title: "Platform",
              links: ["Features", "Security", "Pricing", "API", "Documentation"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Blog", "Press", "Contact"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Compliance"],
            },
          ].map((column, index) => (
            <div key={index}>
              <h3 className="font-bold text-base mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Shield size={16} className="text-primary" strokeWidth={2} />
            <p className="text-gray-400 text-xs">SOC 2 Type II Certified | ISO 27001 | GDPR Compliant</p>
          </div>
          <p className="text-gray-400 text-xs">© {new Date().getFullYear()} AMLYZE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

