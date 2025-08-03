"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  Edit,
  Eye,
  Trash2,
  Plus,
  Filter,
  MoreVertical,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
// Custom table components since table is not available
const Table = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`w-full overflow-auto ${className}`}>
    <table className="w-full caption-bottom text-sm">{children}</table>
  </div>
);

const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <thead className="[&_tr]:border-b">{children}</thead>
);

const TableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody className="[&_tr:last-child]:border-0">{children}</tbody>
);

const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
    {children}
  </tr>
);

const TableHead = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <th
    className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
  >
    {children}
  </th>
);

const TableCell = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}>
    {children}
  </td>
);

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardHeader from "@/components/header";
import Link from "next/link";

// Type definitions
interface Blog {
  _id: string;
  title: string;
  content: string;
  category: string;
  summary: string;
  status: "published" | "draft";
  author?: string;
  publishedAt: string;
  cloudinaryImageUrl?: string;
}

type StatusType = "all" | "published" | "draft";

export default function BlogDashboard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<StatusType>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [blogsPerPage] = useState<number>(5);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  // Get unique categories
  const categories: string[] = [
    "all",
    ...Array.from(new Set(blogs.map((blog) => blog?.category).filter(Boolean))),
  ];
  const statuses: StatusType[] = ["all", "published", "draft"];

  // Fetch blogs data
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/posts`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`);
        }

        const postsData: Blog[] = await response.json();
        setBlogs(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Filter blogs effect
  useEffect(() => {
    let filtered = blogs;

    // Apply search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    // Apply status filter
    if (selectedStatus !== "all") {
      filtered = filtered.filter((blog) => blog.status === selectedStatus);
    }

    setFilteredBlogs(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory, selectedStatus, blogs]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Handlers
  const handleView = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsViewDialogOpen(true);
  };

  const handleEdit = (id: string) => {
    console.log("Edit blog:", id);
    // Implement edit functionality
  };
  const handleDelete = () => {
    setBlogs((prev) => prev.filter((blog) => blog._id !== selectedBlogId));
    setOpenModal(false);
    setSelectedBlogId(null);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${selectedBlogId}`, {
      method: "DELETE",
    });
  };
  const handleDeleteModal = (id: string) => {
    setSelectedBlogId(id);
    setOpenModal(true);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800 border-green-200";
      case "draft":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const publishedCount = blogs.filter((b) => b.status === "published").length;
  const draftCount = blogs.filter((b) => b.status === "draft").length;

  // Generate pagination numbers with ellipsis
  const getPaginationNumbers = (): (number | string)[] => {
    const delta = 2;
    const range: (number | string)[] = [];
    const rangeWithDots: (number | string)[] = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 max-w-7xl">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <DashboardHeader group="Dashboard" item="Blog Posts" />
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Management</h1>
          <p className="text-muted-foreground">
            Manage your blog posts, view analytics, and create new content.
          </p>
        </div>
        <Link href="/dashboard/create-post">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
            <Plus className="mr-2 h-4 w-4" />
            New Blog Post
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{blogs.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {publishedCount}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {draftCount}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search blogs..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.slice(1).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedStatus}
              onValueChange={(value: StatusType) => setSelectedStatus(value)}
            >
              <SelectTrigger className="w-full md:w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results info */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-muted-foreground">
          Showing {filteredBlogs.length > 0 ? startIndex + 1 : 0}-
          {Math.min(endIndex, filteredBlogs.length)} of {filteredBlogs.length}{" "}
          results
        </p>
        {filteredBlogs.length === 0 && !loading && (
          <p className="text-sm text-muted-foreground">
            No posts found matching your criteria.
          </p>
        )}
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Published</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentBlogs.map((blog) => (
                <TableRow key={blog._id}>
                  <TableCell>
                    <img
                      src={blog.cloudinaryImageUrl || "/placeholder-image.jpg"}
                      alt={blog.title}
                      className="w-12 h-12 rounded-lg object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder-image.jpg";
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="max-w-xs">
                      <p className="font-medium truncate">{blog.title}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {blog.content.substring(0, 100)}...
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{blog.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(blog.status)}>
                      {blog.status === "published" ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">
                    {blog.author || "Chris Gray"}
                  </TableCell>
                  <TableCell className="text-sm">
                    {formatDate(blog.publishedAt)}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleView(blog)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleEdit(blog._id)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDeleteModal(blog._id)}
                          className="text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <AlertDialog open={openModal} onOpenChange={setOpenModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex gap-2 items-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            {getPaginationNumbers().map((page, index) => (
              <React.Fragment key={index}>
                {page === "..." ? (
                  <span className="px-2 text-sm text-muted-foreground">
                    ...
                  </span>
                ) : (
                  <Button
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page as number)}
                    className="w-8"
                  >
                    {page}
                  </Button>
                )}
              </React.Fragment>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {/* View Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Blog Post Details</DialogTitle>
          </DialogHeader>
          {selectedBlog && (
            <div className="space-y-6">
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src={
                    selectedBlog.cloudinaryImageUrl || "/placeholder-image.jpg"
                  }
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder-image.jpg";
                  }}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Badge className={getStatusColor(selectedBlog.status)}>
                    {selectedBlog.status !== "draft" ? "Published" : "Draft"}
                  </Badge>
                  <Badge variant="outline">{selectedBlog.category}</Badge>
                </div>

                <h2 className="text-2xl font-bold">{selectedBlog.title}</h2>

                <p className="text-muted-foreground text-lg">
                  {selectedBlog?.summary}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y">
                  <div>
                    <p className="text-sm text-muted-foreground">Author</p>
                    <p className="font-medium">
                      {selectedBlog.author || "Chris Gray"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Published</p>
                    <p className="font-medium">
                      {formatDate(selectedBlog.publishedAt)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-medium capitalize">
                      {selectedBlog.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-medium">{selectedBlog.category}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Content Preview
                  </h3>
                  <div className="prose max-w-none">
                    <p className="whitespace-pre-wrap">
                      {selectedBlog.content}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button onClick={() => handleEdit(selectedBlog._id)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Post
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsViewDialogOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
