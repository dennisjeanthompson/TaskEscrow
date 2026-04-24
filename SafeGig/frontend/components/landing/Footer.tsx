import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">SafeGig</h3>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Blockchain-powered escrow for secure freelance transactions. Built with trust, transparency, and fairness in mind.
            </p>
            <Link href="/connect">
              <Button variant="outline" className="border-white/10 text-muted-foreground hover:text-white hover:bg-white/5 bg-transparent rounded-full px-6">
                Launch App
              </Button>
            </Link>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Smart Contracts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Community</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SafeGig. Built on blockchain for a trustless future.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
