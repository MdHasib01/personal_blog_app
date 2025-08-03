"use client";

import React, { useState, KeyboardEvent } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

interface TagsInputProps {
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  placeholder?: string;
}

export const TagsInput: React.FC<TagsInputProps> = ({
  tags,
  onTagsChange,
  placeholder = "Add tags...",
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  const addTag = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !tags.includes(trimmedValue)) {
      onTagsChange([...tags, trimmedValue]);
      setInputValue("");
    }
  };

  const removeTag = (index: number) => {
    onTagsChange(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2">
      <Label className="text-foreground">Tags</Label>
      <div className="flex flex-wrap gap-2 p-3 border border-border rounded-md bg-background min-h-[2.5rem] focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="ml-1 hover:text-destructive"
            >
              <X size={12} />
            </button>
          </Badge>
        ))}
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addTag}
          placeholder={tags.length === 0 ? placeholder : ""}
          className="flex-1 border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-6"
        />
      </div>
    </div>
  );
};
