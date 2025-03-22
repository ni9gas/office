"use client"

import { Shield, AlertTriangle, Users, Globe } from "lucide-react"
import StatCard from "./stat-card"

export default function StatsSection() {
  return (
    <section className="py-16 border-b border-primary/10 relative z-10 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard
            icon={<Shield className="h-5 w-5 text-primary" strokeWidth={2} />}
            value={15000}
            label="Transactions Secured"
          />
          <StatCard
            icon={<AlertTriangle className="h-5 w-5 text-primary" strokeWidth={2} />}
            value={800}
            label="Threats Detected"
          />
          <StatCard
            icon={<Users className="h-5 w-5 text-primary" strokeWidth={2} />}
            value={10000}
            label="Active Users"
          />
          <StatCard
            icon={<Globe className="h-5 w-5 text-primary" strokeWidth={2} />}
            value={140}
            label="Countries Covered"
          />
        </div>
      </div>
    </section>
  )
}

