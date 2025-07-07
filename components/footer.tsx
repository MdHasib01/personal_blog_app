"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  async function SubscribeToNewsletter(email: string) {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/newsletter/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        setLoading(false);
        toast.error("Error subscribing to newsletter");
        throw new Error(`Failed to subscribe: ${response.status}`);
      }
      setEmail("");
      toast.success("Subscribed to newsletter successfully");
      localStorage.setItem("subscribed", "true");

      setLoading(false);
    } catch (error) {
      console.error("Error subscribing:", error);

      setLoading(false);

      return [];
    }
  }
  return (
    <footer className="w-full border-t border-border/40 bg-background py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <h3 className="font-playfair text-xl font-bold">Chris Gray</h3>
          <p className="text-muted-foreground text-sm text-justify">
            The founder and leader of the{" "}
            <Link
              href="https://earncorecommunity.com/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              EARN CORE COMMUNITY
            </Link>
            , a platform that empowers entrepreneurs through business strategy,
            mentorship, and community support. He is also a seasoned marketer,
            co-owner of Red Palm Studios, founder of the bold-flavor brand Bald
            Buck Seasoning, and co-host of The Amazing Marketing Show, where he
            shares actionable insights on entrepreneurship and marketing.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
            Navigation
          </h4>
          <nav className="grid md:grid-cols-2 space-y-2">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/podcasts"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Podcasts
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="https://linktr.ee/yochrisgray"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Social Links
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="space-y-3 md:flex md:flex-col items-center">
          <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
            Connect
          </h4>
          <div className="flex md:justify-center gap-2">
            <Button variant="ghost" size="icon" asChild aria-label="TikTok">
              <Link
                href="https://www.tiktok.com/@yochrisgray"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="YouTube">
              <Link
                href="https://www.youtube.com/@yochrisgray"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="Facebook">
              <Link
                href="https://www.facebook.com/YoChrisGray"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="Instagram">
              <Link
                href="https://www.instagram.com/yochrisgray/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="Twitter">
              <Link
                href="https://x.com/YoChrisGray"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXFill className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
              <Link
                href="https://www.linkedin.com/in/yochrisgray/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">
            Subscribe
          </h4>
          <p className="text-muted-foreground text-sm">
            Get notified about new posts and projects.
          </p>
          <form
            onSubmit={() => SubscribeToNewsletter(email)}
            className="flex gap-2"
          >
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email"
              type="email"
              className="h-9"
            />
            <Button disabled={loading} type="submit" size="sm">
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Chris Gray All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
