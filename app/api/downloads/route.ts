import { getTotalDownloads } from "@/lib/getDownloads";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  const downloads = await getTotalDownloads();
  if (typeof downloads === 'number') {
    return NextResponse.json({ downloads }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Error: Downloads not available" }, { status: 500 });
  }
}
