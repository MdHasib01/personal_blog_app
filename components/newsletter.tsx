"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Newsletter = () => {
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
    <div className="container">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="font-playfair text-3xl font-bold tracking-tight">
          Stay Updated
        </h2>
        <p className="text-muted-foreground">
          Subscribe to my newsletter for the latest blog posts, project updates,
          and exclusive content.
        </p>
        <div className="flex flex-col sm:flex-row justify-center  gap-3 max-w-md mx-auto">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="h-12 px-2 rounded-md"
          />
          <Button
            disabled={loading}
            onClick={() => SubscribeToNewsletter(email)}
            className="h-12"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          I respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
