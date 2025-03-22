"use client"

import { AlertTriangle, Bitcoin, Hexagon, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroCard() {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
      <div className="relative bg-gradient-to-r from-gray-900 to-black border border-primary/20 rounded-3xl p-6 shadow-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(12,254,246,0.2)]">
        <div className="absolute -top-3 -right-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          LIVE
        </div>
        <div className="bg-black/60 rounded-2xl p-4 mb-6 border border-white/5">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-xs text-gray-400">Transaction Risk Score</p>
              <h3 className="text-xl font-bold text-white">
                87<span className="text-primary">/100</span>
              </h3>
            </div>
            <div className="bg-secondary/20 border border-secondary/30 rounded-full p-2 animate-pulse">
              <AlertTriangle className="h-4 w-4 text-secondary" strokeWidth={2} />
            </div>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-secondary to-primary h-2 rounded-full animate-[pulse_2s_ease-in-out_infinite]"
              style={{ width: "87%" }}
            ></div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-black/60 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="bg-black/80 p-1.5 rounded-full group-hover:bg-primary/10 transition-all duration-300">
                <Bitcoin className="h-4 w-4 text-primary" strokeWidth={2} />
              </div>
              <div>
                <p className="font-medium text-xs">Bitcoin</p>
                <p className="text-[10px] text-gray-400">0x7ef9...a3b2</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-medium text-sm">High Risk</span>
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-black/60 rounded-xl border border-white/5 hover:border-secondary/30 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="bg-black/80 p-1.5 rounded-full group-hover:bg-secondary/10 transition-all duration-300">
                <Hexagon className="h-4 w-4 text-secondary" strokeWidth={2} />
              </div>
              <div>
                <p className="font-medium text-xs">Ethereum</p>
                <p className="text-[10px] text-gray-400">0x3af1...c4d9</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 font-medium text-sm">Medium Risk</span>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-black/60 rounded-xl border border-white/5 hover:border-secondary/30 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="bg-black/80 p-1.5 rounded-full group-hover:bg-secondary/10 transition-all duration-300">
                <Shield className="h-4 w-4 text-secondary" strokeWidth={2} />
              </div>
              <div>
                <p className="font-medium text-xs">USDC</p>
                <p className="text-[10px] text-gray-400">0x8bc2...f7e5</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 font-medium text-sm">Low Risk</span>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>

        <Button className="w-full mt-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-medium py-2.5 rounded-xl transition-all duration-300 shadow-[0_4px_14px_rgba(12,254,246,0.3)] hover:shadow-[0_6px_20px_rgba(12,254,246,0.5)] text-lg">
          <Shield className="mr-px h-4 w-4" strokeWidth={3} />
          Scan Your Wallet
        </Button>
      </div>
    </div>
  )
}

