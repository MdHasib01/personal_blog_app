import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreatePostRequest, Post } from "@/types/post";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    credentials: "include",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    createPost: builder.mutation<Post, FormData>({
      query: (formData) => ({
        url: "/post",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Post"],
    }),
    generateImage: builder.mutation<{ imageUrl: string }, { title: string }>({
      query: ({ title }) => ({
        url: "/generate-image",
        method: "POST",
        body: { title },
      }),
    }),
    generateContent: builder.mutation<{ content: string }, { title: string }>({
      query: ({ title }) => ({
        url: "/generate-content",
        method: "POST",
        body: { title },
      }),
    }),
    generateSummary: builder.mutation<
      { summary: string },
      { title: string; content: string }
    >({
      query: ({ title, content }) => ({
        url: "/generate-summary",
        method: "POST",
        body: { title, content },
      }),
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGenerateImageMutation,
  useGenerateContentMutation,
  useGenerateSummaryMutation,
} = postsApi;
