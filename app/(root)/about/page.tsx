import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Youtube,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Users,
  Briefcase,
  Mic,
  Heart,
  BookOpen,
  Target,
  TrendingUp,
  Award,
  MessageCircle,
  Zap,
  Star,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

import img from "../assets/Chris Gray.jpg";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About Chris Gray | Entrepreneur & Community Builder",
  description:
    "Co-owner of Red Palm Studios, founder of EARN CORE COMMUNITY with 4,000+ entrepreneurs, and co-host of The Amazing Marketing Show. Passionate about entrepreneurship, marketing, and community building.",
};

export default function AboutPage() {
  // Business ventures and achievements
  const ventures = [
    {
      name: "Red Palm Studios",
      role: "Co-Owner",
      description:
        "Forward-thinking marketing agency serving big brands and small businesses in the trades industry",
      icon: <Briefcase className="h-5 w-5" />,
      status: "Active",
    },
    {
      name: "EARN CORE COMMUNITY",
      role: "Founder",
      description:
        "Vibrant network of 4,000+ entrepreneurs fostering collaboration and learning",
      icon: <Users className="h-5 w-5" />,
      status: "Growing",
    },
    {
      name: "Bald Buck Seasoning",
      role: "Founder",
      description:
        "Thriving business born from personal passion, turning creativity into commerce",
      icon: <Star className="h-5 w-5" />,
      status: "Thriving",
    },
    {
      name: "The Amazing Marketing Show",
      role: "Co-Host",
      description:
        "Interviewing successful entrepreneurs with co-host Dmitri Smirnoff",
      icon: <Mic className="h-5 w-5" />,
      status: "Active",
    },
    {
      name: "Bald Buck Newsletter",
      role: "Creator",
      description:
        "Go-to resource for senior citizens seeking relevant updates on topics that matter most",
      icon: <BookOpen className="h-5 w-5" />,
      status: "Publishing",
    },
  ];

  // Discussion topics/expertise areas
  // const expertiseAreas = [
  //   { name: "Entrepreneurship", icon: "🚀" },
  //   { name: "Business Strategy", icon: "💼" },
  //   { name: "Digital Marketing", icon: "📱" },
  //   { name: "Social Media Marketing", icon: "📊" },
  //   { name: "Email Marketing", icon: "📧" },
  //   { name: "Paid Advertising", icon: "💰" },
  //   { name: "AI in Business", icon: "🤖" },
  //   { name: "Lead Generation", icon: "🎯" },
  //   { name: "Community Building", icon: "👥" },
  //   { name: "Newsletter Strategy", icon: "📰" },
  //   { name: "Brazilian Jiu-Jitsu", icon: "🥋" },
  //   { name: "Family Balance", icon: "👨‍👩‍👧‍👦" },
  // ];

  // Key stats about Chris's impact
  const stats = [
    {
      label: "Community Members",
      value: "4,000+",
      description: "in EARN CORE COMMUNITY",
    },
    {
      label: "Business Ventures",
      value: "5+",
      description: "successful enterprises",
    },
    {
      label: "Podcast Episodes",
      value: "100+",
      description: "entrepreneur interviews",
    },
    {
      label: "Years Experience",
      value: "10+",
      description: "in entrepreneurship",
    },
  ];

  // What Chris offers
  const valueProps = [
    {
      title: "Authentic Conversations",
      description:
        "Chris brings genuine, tactical discussions that provide real value to your audience",
      icon: <MessageCircle className="h-5 w-5" />,
    },
    {
      title: "Actionable Insights",
      description:
        "Every conversation includes tips your followers can implement immediately",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "Cross-Promotion",
      description:
        "Chris shares content across his social media and community networks",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      title: "Community Access",
      description:
        "Connect with the EARN CORE COMMUNITY of 4,000+ entrepreneurs",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container py-12 md:py-16">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={img}
              alt="Chris Gray - Entrepreneur and Community Builder"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Chris Gray
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Entrepreneur, Community Builder & Marketing Expert
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>EARN CORE COMMUNITY Founder</span>
                <Briefcase className="h-4 w-4 ml-2" />
                <span>Red Palm Studios Co-Owner</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Chris Gray is a multi-faceted entrepreneur who has built a
              thriving ecosystem of businesses and communities. As co-owner of
              Red Palm Studios, he serves big brands and small businesses in the
              trades industry with forward-thinking marketing strategies.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              An entrepreneur at heart, Chris turned personal passion into
              success with Bald Buck Seasoning and continues to innovate through
              the Bald Buck Newsletter. Most notably, he founded the EARN CORE
              COMMUNITY, bringing together over 4,000 entrepreneurs in a vibrant
              network of collaboration and learning.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Away from work, Chris is a devoted husband and father, a committed
              Brazilian jiu-jitsu practitioner, and an &quot;undercover
              geek&quot; who brings unbridled passion to every facet of his
              life.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2 flex-wrap">
              <Button size="sm" variant="outline" asChild>
                <a
                  href="https://www.tiktok.com/@yochrisgray"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="TikTok"
                >
                  <FaTiktok className="h-4 w-4" />
                </a>
              </Button>

              <Button size="sm" variant="outline" asChild>
                <a
                  href="https://www.youtube.com/@yochrisgray"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a
                  href="https://www.facebook.com/YoChrisGray"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a
                  href="https://www.instagram.com/yochrisgray/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>

              <Button size="sm" variant="outline" asChild>
                <a
                  href="https://x.com/YoChrisGray"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter/X"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>

              <Button size="sm" variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/yochrisgray/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg">
                <a href="mailto:Marisol@redpalm.us">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact for Collaboration
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Let&apos;s Connect
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Stats Section */}
        {/* <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}
        {/* Business Ventures Section */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-center">
            Business Ventures & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ventures.map((venture) => (
              <Card
                key={venture.name}
                className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {venture.icon}
                      {venture.name}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {venture.status}
                    </Badge>
                  </CardTitle>
                  <p className="text-sm text-primary font-medium">
                    {venture.role}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {venture.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Expertise Areas Section */}
        {/* <section className="mb-16">
        <h2 className="font-playfair text-3xl font-bold mb-8 text-center">
          Discussion Topics & Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {expertiseAreas.map((area) => (
            <Card
              key={area.name}
              className="hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{area.icon}</div>
                <div className="text-sm font-medium">{area.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}
        {/* What Chris Offers Section */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-center">
            What Chris Brings to Your Audience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueProps.map((prop) => (
              <Card
                key={prop.title}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {prop.icon}
                    {prop.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Personal Side Section */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-center">
            Beyond Business
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Personal Life
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Chris is a devoted husband and father who brings the same
                  passion he has for business to his family life. He&apos;s
                  committed to maintaining a healthy work-life balance and
                  believes that family success fuels business success.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-sm">
                    👨‍👩‍👧‍👦 Family Man
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    🥋 Brazilian Jiu-Jitsu
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    🤓 Undercover Geek
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Philosophy & Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Whether he&apos;s helping clients elevate their brand,
                  perfecting a new seasoning blend, or sharpening his
                  &quot;mediocre&quot; jiu-jitsu skills, Chris brings unbridled
                  passion and determination to every facet of his life.
                </p>
                <p className="text-muted-foreground">
                  His goal in every conversation is to provide authentic,
                  tactical value that your audience can implement immediately.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Call to Action */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Ready to Add Value to Your Audience?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Chris wants to have an authentic yet tactical conversation with
                you. The goal is for your followers to walk away with actionable
                tips they can implement today. He&apos;ll also share your
                content across his social media and to his community of 4,000+
                entrepreneurs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <a href="mailto:Marisol@redpalm.us">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact for Collaboration
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Let&apos;s Connect
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                For collaboration inquiries, contact:{" "}
                <strong>Marisol@redpalm.us</strong>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </>
  );
}
