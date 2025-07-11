import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include:{ user: true },
    });
    console.log(post,"this is getting post")
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log("getting post error",err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
