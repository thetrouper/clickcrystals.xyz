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

type CustomProps = {
  name: string;
  link: string;
  ring: string;
  border: string;
  bg: string;
  hoverBg: string;
}

export function CustomButton({ name, link, ring, border, bg, hoverBg }: CustomProps) {
  return (<>
    <Container tapScale={0.95}>
      <Link href={link} className={`ring-[${ring}] btn border-[${border}] bg-[${bg}] hover:bg-[${hoverBg}] text-white font-semibold px-6 px-5.5 py-2.5 shadow-none text-sm`}>{name}</Link>
    </Container>
  </>)
}