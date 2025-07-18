"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Share2, Copy, Facebook, Linkedin, Twitter, Check } from "lucide-react";

interface Post {
  _id: string;
  title: string;
  summary: string;
}

interface ShareDialogProps {
  post: Post;
}

export function ShareDialog({ post }: ShareDialogProps) {
  const [copied, setCopied] = useState(false);
  const postUrl = `https://yochrisgray.com/blogs/${post._id}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      postUrl
    )}&quote=${encodeURIComponent(post.title)}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      postUrl
    )}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(
      post.summary
    )}`;
    window.open(linkedInUrl, "_blank", "width=600,height=400");
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      postUrl
    )}&text=${encodeURIComponent(post.title)}&via=yochrisgray`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share this post</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Copy Link Section */}
          <div className="space-y-2">
            <Label htmlFor="link">Copy link</Label>
            <div className="flex items-center space-x-2">
              <Input id="link" value={postUrl} readOnly className="flex-1" />
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={copyToClipboard}
                className="shrink-0"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Social Media Share Buttons */}
          <div className="space-y-2">
            <Label>Share on social media</Label>
            <div className="flex flex-col space-y-2">
              <Button
                variant="outline"
                onClick={shareOnFacebook}
                className="w-full justify-start"
              >
                <Facebook className="h-4 w-4 mr-2 text-blue-600" />
                Share on Facebook
              </Button>
              <Button
                variant="outline"
                onClick={shareOnLinkedIn}
                className="w-full justify-start"
              >
                <Linkedin className="h-4 w-4 mr-2 text-blue-700" />
                Share on LinkedIn
              </Button>
              <Button
                variant="outline"
                onClick={shareOnTwitter}
                className="w-full justify-start"
              >
                <Twitter className="h-4 w-4 mr-2 text-blue-500" />
                Share on Twitter
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
