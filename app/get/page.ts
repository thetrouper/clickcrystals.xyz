import { Metadata } from "next";
import { getLatestLink } from "@/lib/getLatest";
import { redirect } from "next/navigation";

const metadata: Metadata = {
  title: "ClickCrystals - Get",
  description: "Instantly download ClickCrystals's latest version for the latest supported minecraft!"
}

export default async function GetClickCrystals() {
  const link = await getLatestLink();

  if (link != null) {
    return redirect(link);
  } else {
    return redirect('/');
  }
}
