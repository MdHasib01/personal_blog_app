"use client";

import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Send,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  MessageCircle,
  Users,
  Briefcase,
  Mic,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaTiktok } from "react-icons/fa";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get("name") as string,
      from_email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      to_name: "Chris Gray",
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! Chris will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or contact directly at Marisol@redpalm.us",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight">
          Let's Connect
        </h1>
        <p className="text-muted-foreground text-lg">
          Ready to add value to your audience? Let's have an authentic
          conversation that provides real impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <Card>
          <CardContent className="p-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Podcast collaboration, speaking engagement, etc."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell Chris about your audience, the type of value you're looking for, and how you'd like to collaborate..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-md text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  {submitStatus.message}
                </div>
              )}

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="font-playfair text-2xl font-bold mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="mailto:Marisol@redpalm.us"
                  className="hover:text-primary transition-colors"
                >
                  Marisol@redpalm.us
                </a>
              </div>
              <div className="flex items-start">
                <Briefcase className="h-5 w-5 mr-3 text-primary mt-1" />
                <div>
                  <p className="font-medium">Red Palm Studios</p>
                  <p className="text-sm text-muted-foreground">
                    Marketing Agency for Trades Industry
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 mr-3 text-primary mt-1" />
                <div>
                  <p className="font-medium">EARN CORE COMMUNITY</p>
                  <p className="text-sm text-muted-foreground">
                    4,000+ Entrepreneurs Network
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold mb-6">
              Connect With Chris
            </h2>
            <div className="flex gap-3 flex-wrap">
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/yochrisgray/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://x.com/YoChrisGray"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter/X"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/yochrisgray/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.youtube.com/@yochrisgray"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.facebook.com/YoChrisGray"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.tiktok.com/@yochrisgray"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <FaTiktok className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold mb-6">
              Available For
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                Podcast Interviews
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                Speaking Engagements
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                Marketing Consultations
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                Community Collaborations
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                Content Creation Partnerships
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              What to Expect
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Authentic, tactical conversations</li>
              <li>• Actionable tips your audience can implement today</li>
              <li>• Cross-promotion to 4,000+ entrepreneurs</li>
              <li>• Content shared across all social platforms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
