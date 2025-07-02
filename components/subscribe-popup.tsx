"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef, useState } from "react";

export function SubscribePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const multiplyRef = useRef(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
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
                placeholder="Enter your email..."
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button type="submit">Subscribe</Button>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
