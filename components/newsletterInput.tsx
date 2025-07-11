"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const NewsletterInput = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Subscribes to the newsletter using the provided email address.
   * @param e The event that triggered this function.
   * @throws {Error} If the fetch request fails.
   * @returns {Promise<void>} A promise that resolves once the request has completed.
   */
  /*******  d0512023-4d41-4d04-a1d6-067c853050a1  *******/
  async function SubscribeToNewsletter(e: any) {
    e.preventDefault();
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
      <form
        onSubmit={(e) => SubscribeToNewsletter(e)}
        className="flex flex-col sm:flex-row   gap-3 md:max-w-md max-w-sm mx-auto lg:mx-0 my-2"
      >
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="Enter your email"
          className="h-12 px-2 rounded-md"
        />
        <Button disabled={loading} type="submit" className="h-12">
          {loading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground">
        I respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterInput;
