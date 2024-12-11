import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams.get("validationToken");

  return Response.json({ validationToken: searchParams });
}
