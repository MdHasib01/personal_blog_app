import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, MapPin, Phone, Send, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Me | Personal Blog & Portfolio",
  description: "Get in touch with me for collaborations, job opportunities, or just to say hello.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight">Contact Me</h1>
        <p className="text-muted-foreground text-lg">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <Card>
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject of your message" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={6}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="font-playfair text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:contact@hasib.dev" className="hover:text-primary transition-colors">
                  contact@hasib.dev
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                <address className="not-italic">
                  123 Web Developer Street<br />
                  San Francisco, CA 94105<br />
                  United States
                </address>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold mb-6">Connect With Me</h2>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold mb-6">Available For</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                Freelance Projects
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                Consulting
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                Full-time Opportunities
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                Speaking Engagements
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}