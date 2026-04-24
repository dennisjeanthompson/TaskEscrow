import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WalletButton } from "../../contexts/wallet-button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-full px-6 py-3 flex justify-between items-center shadow-lg border-white/10">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  SafeGig
                </h1>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              How it Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
              Pricing
            </Link>
            <div className="pl-4 border-l border-white/10">
              <WalletButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
