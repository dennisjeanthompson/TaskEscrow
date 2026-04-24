import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 glass-card p-12 sm:p-16 border-white/10">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Ready to Secure Your <span className="text-gradient">Freelance Work?</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Join the future of freelance payments with blockchain-powered escrow. 
          Start transacting with absolute confidence today.
        </p>
        <Link href="/connect">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:scale-105">
            Launch App
          </Button>
        </Link>
      </div>
    </section>
  )
}
