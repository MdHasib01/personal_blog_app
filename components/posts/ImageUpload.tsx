"use client";

import React, { useState, useRef } from "react";
import { Upload, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useGenerateImageMutation } from "@/lib/store/api/postsApi";

interface ImageUploadProps {
  value?: File | string;
  onChange: (value: File | string | undefined) => void;
  title: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  title,
}) => {
  const [preview, setPreview] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [generateImage, { isLoading: isGenerating }] =
    useGenerateImageMutation();

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      onChange(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const handleGenerateImage = async () => {
    if (!title.trim()) return;

    try {
      const result = await generateImage({ title }).unwrap();
      onChange(result.imageUrl);
      setPreview(result.imageUrl);
    } catch (error) {
      console.error("Failed to generate image:", error);
    }
  };

  const handleRemove = () => {
    onChange(undefined);
    setPreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const displayPreview = preview || (typeof value === "string" ? value : "");

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className="text-foreground">Image</Label>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleGenerateImage}
          disabled={!title.trim() || isGenerating}
          className="h-8 px-3 text-xs border-border hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
        >
          <Sparkles size={12} className="mr-1" />
          {isGenerating ? "Generating..." : "Generate"}
        </Button>
      </div>

      <div
        className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border hover:border-muted-foreground"
        }`}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
      >
        {displayPreview ? (
          <div className="relative">
            <img
              src={displayPreview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-md"
            />
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={handleRemove}
              className="absolute top-2 right-2 h-8 w-8 p-0"
            >
              <X size={16} />
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
            <div className="mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="border-border hover:bg-accent hover:text-accent-foreground"
              >
                Choose Image
              </Button>
              <p className="mt-2 text-sm text-muted-foreground">
                Or drag and drop an image here
              </p>
            </div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFileSelect(file);
          }}
          className="hidden"
        />
      </div>
    </div>
  );
};
