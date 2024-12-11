import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("validationToken");

  return new NextResponse(token, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
