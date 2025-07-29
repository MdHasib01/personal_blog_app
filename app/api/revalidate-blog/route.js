import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { slug, secret } = await request.json();

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    revalidatePath(`/blog/${slug}`);

    revalidatePath("/blog");

    return NextResponse.json({
      revalidated: true,
      message: `Blog post ${slug} revalidated successfully`,
    });
  } catch (err) {
    return NextResponse.json(
      {
        revalidated: false,
        message: "Error revalidating",
      },
      { status: 500 }
    );
  }
}
