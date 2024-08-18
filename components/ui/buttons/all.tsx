import Link from "next/link";
import { Container } from "../Container";

type GetClickCrystalsProps = {
  name?: string;
  link?: string;
}

export function GetClickCrystalsButton({ name = "Get ClickCrystals", link = "/download" }: GetClickCrystalsProps) {
  return (<>
    <Container tapScale={0.95}>
      <Link href={link} className="ring-[#737679] btn border-gray-400 bg-transparent hover:bg-gray-700 hover:text-white font-semibold px-6 py-2.5 shadow-none text-sm group">
        {name}
      </Link>
    </Container>
  </>)
}

export function JoinDiscordButton() {
  return (
    <>
      <Container tapScale={0.95}>
        <Link href="https://discord.gg/zg3ge9VTgr" className="ring-[#4287f5] btn border-[#7289da] bg-[#7289da] hover:bg-[#546abb] font-semibold px-6 py-2.5 shadow-none text-white text-sm">Join Discord</Link>
      </Container>
    </>
  )
}

export function ExploreScriptsButton({ }) {
  return (<>
    <Container tapScale={0.95}>
      <Link href={"/scripts"} className="ring-[#21582d] btn border-[#72da89] bg-[#247a37] hover:bg-[#1b5828] text-white font-semibold px-6 py-2.5 text-sm group">
        Explore scripts
      </Link>
    </Container>
  </>)
}

export function MoreScreenshotsButton({ }) {
  return (<>
    <Container tapScale={0.95}>
      <Link href={"/gallery"} className="ring-[#4f2158] btn border-[#7d3868] bg-[#7d368b] hover:bg-[#511c5c] text-white font-semibold px-6 py-2.5 text-sm group">
        More screenshots
      </Link>
    </Container>
  </>)
}