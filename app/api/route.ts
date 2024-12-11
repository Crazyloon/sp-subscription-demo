// app/api/hello/route.ts (if using the App Router)

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return new NextResponse(
    "Hello, this is a plain string response using TypeScript and the App Router!",
    {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
