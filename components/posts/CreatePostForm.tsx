"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TagsInput } from "./TagsInput";
import { RichTextEditor } from "./RichTextEditor";
import { ImageUpload } from "./ImageUpload";
import {
  useCreatePostMutation,
  useGenerateContentMutation,
  useGenerateSummaryMutation,
} from "../../lib/store/api/postsApi";
import { CATEGORIES } from "../../types/post";

export const CreatePostForm: React.FC = () => {
  const router = useRouter();
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
  const [generateContent, { isLoading: isGeneratingContent }] =
    useGenerateContentMutation();
  const [generateSummary, { isLoading: isGeneratingSummary }] =
    useGenerateSummaryMutation();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    summary: "",
    videoUrl: "",
    image: undefined as File | string | undefined,
    channelName: "Chris Gray",
    tags: [] as string[],
    category: "",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerateContent = async () => {
    if (!formData.title.trim()) return;

    try {
      const result = await generateContent({ title: formData.title }).unwrap();
      handleInputChange("content", result.content);
    } catch (error) {
      console.error("Failed to generate content:", error);
    }
  };

  const handleGenerateSummary = async () => {
    if (!formData.title.trim() || !formData.content.trim()) return;

    try {
      const result = await generateSummary({
        title: formData.title,
        content: formData.content,
      }).unwrap();
      handleInputChange("summary", result.summary);
    } catch (error) {
      console.error("Failed to generate summary:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "tags") {
        formDataToSend.append(key, JSON.stringify(value));
      } else if (key === "image" && value) {
        if (value instanceof File) {
          formDataToSend.append(key, value);
        } else {
          formDataToSend.append("imageUrl", value as string);
        }
      } else if (value) {
        formDataToSend.append(key, value.toString());
      }
    });

    try {
      await createPost(formDataToSend).unwrap();
      router.push("/admin/dashboard/blog-posts");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <Card className="w-full mx-auto border bg-card">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-foreground">
                Title
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Enter post title..."
                required
                className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="channelName" className="text-foreground">
                Channel Name
              </Label>
              <Input
                id="channelName"
                defaultValue={"Chris Gray"}
                value={formData.channelName}
                onChange={(e) =>
                  handleInputChange("channelName", e.target.value)
                }
                placeholder="Enter channel name..."
                required
                className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-foreground">Content</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleGenerateContent}
                disabled={!formData.title.trim() || isGeneratingContent}
                className="h-8 px-3 text-xs border-border hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
              >
                <Sparkles size={12} className="mr-1" />
                {isGeneratingContent ? "Generating..." : "Generate"}
              </Button>
            </div>
            <RichTextEditor
              value={formData.content}
              onChange={(value) => handleInputChange("content", value)}
              placeholder="Write your content..."
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="summary" className="text-foreground">
                Summary
              </Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleGenerateSummary}
                disabled={!formData.title.trim() || isGeneratingSummary}
                className="h-8 px-3 text-xs border-border hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
              >
                <Sparkles size={12} className="mr-1" />
                {isGeneratingSummary ? "Generating..." : "Generate"}
              </Button>
            </div>
            <Textarea
              id="summary"
              value={formData.summary}
              disabled={isGeneratingSummary}
              onChange={(e) => handleInputChange("summary", e.target.value)}
              placeholder="Brief summary of the post..."
              rows={5}
              className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="videoUrl" className="text-foreground">
              Video URL (Optional)
            </Label>
            <Input
              id="videoUrl"
              type="url"
              value={formData.videoUrl}
              onChange={(e) => handleInputChange("videoUrl", e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
              className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring"
            />
          </div>

          <ImageUpload
            value={formData.image}
            onChange={(value) => handleInputChange("image", value)}
            title={formData.title}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TagsInput
              tags={formData.tags}
              onTagsChange={(tags) => handleInputChange("tags", tags)}
              placeholder="Add tags..."
            />

            <div className="space-y-2">
              <Label className="text-foreground">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleInputChange("category", value)}
              >
                <SelectTrigger className="border-border bg-background text-foreground focus:ring-ring">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="border-border bg-popover">
                  {CATEGORIES.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      className="text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <Button
              type="submit"
              disabled={isCreating}
              className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {isCreating ? "Creating..." : "Create Post"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
