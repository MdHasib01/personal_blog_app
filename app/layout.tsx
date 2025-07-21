import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Chris Gray - Entrepreneur, Community Builder & Marketing Expert",
  description:
    "Meet Chris Gray, an entrepreneur, marketing expert, and founder of EARN CORE COMMUNITY. Learn about his business ventures, passions, and how he empowers 4,000+ entrepreneurs.",
  openGraph: {
    url: "https://yochrisgray.com/about",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yochrisgray.com/about",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-background min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">{children}</main>

            <Toaster />
          </div>
        </ThemeProvider>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chris Gray",
              alternateName: "YoChrisGray",
              image:
                "https://www.yochrisgray.com/_next/static/media/avatar.d61f74b2.jpg",
              jobTitle: "Entrepreneur, Community Builder & Marketing Expert",
              sameAs: [
                "https://earncorecommunity.com/",
                "https://www.tiktok.com/@yochrisgray",
                "https://www.youtube.com/@yochrisgray",
                "https://www.facebook.com/YoChrisGray",
                "https://www.instagram.com/yochrisgray/",
                "https://x.com/YoChrisGray",
                "https://www.linkedin.com/in/yochrisgray/",
              ],
              url: "https://yochrisgray.com/about",
              worksFor: [
                {
                  "@type": "Organization",
                  name: "EARN CORE COMMUNITY",
                },
                {
                  "@type": "Organization",
                  name: "Red Palm Studios",
                },
                {
                  "@type": "Organization",
                  name: "Hustlers Digest",
                },
              ],
              alumniOf: "N/A",
              description:
                "Chris Gray is a serial entrepreneur, husband, father, and community-building expert. He co-owns Red Palm Studios and founded EARN CORE COMMUNITY, a thriving network of over 4,000 entrepreneurs.",
              knowsAbout: [
                "Automation",
                "Branding",
                "Entrepreneurship",
                "Community Building",
                "Social Media",
                "Podcasting",
              ],
              memberOf: "EARN CORE COMMUNITY",
            }),
          }}
        />
      </body>
    </html>
  );
}
