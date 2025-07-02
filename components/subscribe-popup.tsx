"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export function SubscribePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const multiplyRef = useRef(10);
  const [loading, setLoading] = useState(false);
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
      setIsOpen(false);
      setLoading(false);
    } catch (error) {
      console.error("Error subscribing:", error);
      setIsOpen(false);
      setLoading(false);

      return [];
    }
  }

  useEffect(() => {
    const isSubscribed = localStorage.getItem("subscribed");
    const timer = setTimeout(() => {
      if (isSubscribed !== "true" || isSubscribed === null) {
        setIsOpen(true);
      }
    }, multiplyRef.current * 1000);

    return () => clearTimeout(timer);
  }, [isOpen]);
  const closePopup = (isClose: boolean) => {
    setIsOpen(isClose);
    multiplyRef.current = multiplyRef.current + 30;
  };

  return (
    <Dialog open={isOpen} onOpenChange={closePopup}>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">
              Subscribe to my newsletter
            </DialogTitle>
            <DialogDescription className="text-center text-sm">
              Subscribe for the latest blog posts, podcasts and exclusive
              content.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Input
                id="name-1"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              disabled={loading}
              onClick={() => SubscribeToNewsletter(email)}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
