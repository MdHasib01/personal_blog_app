import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturedSectionProps {
  title: string;
  description: string;
  viewAllText: string;
  viewAllLink: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function FeaturedSection({
  title,
  description,
  viewAllText,
  viewAllLink = "/",
  icon,
  children,
  variant = "primary",
}: FeaturedSectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        variant === "secondary" ? "bg-muted/50" : ""
      )}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div className="space-y-2">
            <div className="flex items-center">
              {icon && <span className="mr-2 text-primary">{icon}</span>}
              <h2 className="font-playfair text-3xl font-bold tracking-tight">
                {title}
              </h2>
            </div>
            <p className="text-muted-foreground">{description}</p>
          </div>
          {viewAllLink !== "/" && (
            <Button variant="ghost" asChild className="group">
              <Link href={viewAllLink}>
                {viewAllText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
