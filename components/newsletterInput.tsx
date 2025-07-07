"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const NewsletterInput = () => {
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
    <div>
      <Label>Subscribe to newsletter</Label>
      <div className="flex flex-col sm:flex-row   gap-3 md:max-w-md max-w-sm mx-auto md:mx-0 my-2">
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
  );
};

export default NewsletterInput;
