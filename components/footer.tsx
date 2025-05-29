import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <h3 className="font-playfair text-xl font-bold">Hasib.dev</h3>
          <p className="text-muted-foreground text-sm">
            A personal blog and portfolio showcasing my work and thoughts on technology, design, and development.
          </p>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">Navigation</h4>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </nav>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">Connect</h4>
          <div className="flex space-x-3">
            <Button variant="ghost" size="icon" asChild aria-label="GitHub">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="Twitter">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="Email">
              <Link href="mailto:contact@hasib.dev">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">Subscribe</h4>
          <p className="text-muted-foreground text-sm">Get notified about new posts and projects.</p>
          <div className="flex gap-2">
            <Input placeholder="Your email" type="email" className="h-9" />
            <Button size="sm">Subscribe</Button>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hasib.dev. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}