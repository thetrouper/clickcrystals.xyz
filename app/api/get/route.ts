// Make sure this is the latest supported minecraft version by ClickCrystals
// Like 1.21.1, however remove the dots.
const latestMc = "1211"

import { getParsedReleases } from "@/lib/getReleases";
import { NextResponse } from "next/server";

export async function getLatestLink() {
  try {
    const resp = await getParsedReleases();
    const link = resp[0][latestMc];

    return link;
  } catch (err) {
    return null;
  }
}

export async function GET(request: any) {
  const resp = await getLatestLink();

  if (resp === null) {
    return NextResponse.json({ error: 500 })
  }
  return NextResponse.redirect(resp)
}
