import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface RevalidateRequest {
  slug: string;
  secret: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: RevalidateRequest = await request.json();
    const { slug, secret } = body;

    console.log("Received revalidation request:", { slug });

    if (secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    if (!slug || typeof slug !== "string") {
      return NextResponse.json(
        { message: "Invalid slug provided" },
        { status: 400 }
      );
    }

    revalidatePath(`/blog/${slug}`);
    revalidatePath("/blog");

    return NextResponse.json({
      revalidated: true,
      message: `Successfully revalidated /blog/${slug}`,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Revalidation error:", error);

    return NextResponse.json(
      {
        revalidated: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
