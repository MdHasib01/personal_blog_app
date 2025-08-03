"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { Label } from "@/components/ui/label";
import "react-quill/dist/quill.snow.css";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <div className="border border-border rounded-md bg-background p-3">
      <div className="min-h-[200px] flex items-center justify-center text-muted-foreground">
        Loading editor...
      </div>
    </div>
  ),
});

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = "Write your content...",
}) => {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ align: [] }],
        ["blockquote", "code-block"],
        ["link", "image"],
        ["clean"],
      ],
    }),
    []
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "align",
    "blockquote",
    "code-block",
    "link",
    "image",
  ];

  return (
    <div className="space-y-2">
      <Label className="text-foreground">Content</Label>
      <div className="quill-editor-wrapper">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          modules={modules}
          formats={formats}
          className="bg-background border-border rounded-md"
          style={
            {
              "--quill-border-color": "hsl(var(--border))",
              "--quill-text-color": "hsl(var(--foreground))",
              "--quill-bg-color": "hsl(var(--background))",
              "--quill-toolbar-bg": "hsl(var(--muted))",
              "--quill-toolbar-border": "hsl(var(--border))",
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
};
