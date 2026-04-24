import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-400 mb-8 glass shadow-sm backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
          Next-Gen Escrow Platform
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
          Escrow for Freelance Gigs,<br />
          <span className="text-gradient">Powered by Blockchain</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Secure your freelance payments with smart contract escrow. No
          intermediaries, just transparent blockchain technology ensuring fair
          transactions for everyone.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/connect">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:scale-105"
            >
              Launch App
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg rounded-full border-white/10 bg-white/5 hover:bg-white/10 transition-all glass"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
