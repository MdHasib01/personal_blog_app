import React from "react";
import { CreatePostForm } from "../../../../components/posts/CreatePostForm";
import DashboardHeader from "@/components/header";

export default function CreatePostPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <DashboardHeader group="Dashboard" item="Create Post" />
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Create Blog Post
          </h1>
          <p className="text-muted-foreground">
            Create new blog posts, manage your content, and view analytics.
          </p>
        </div>
      </div>
      <CreatePostForm />
    </div>
  );
}
