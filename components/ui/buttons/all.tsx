import Link from 'next/link';
import { Container } from '../Container';

type GetClickCrystalsProps = {
  name?: string;
  link?: string;
};

export function GetClickCrystalsButton({
  name = 'Get ClickCrystals',
  link = '/download',
}: GetClickCrystalsProps) {
  return (
    <>
      <Container tapScale={0.95}>
        <Link
          href={link}
          className="ring-[#388BD3] btn border-[#61ADEC] bg-[#61ADEC] hover:bg-[#388BD3] hover:text-[#F4F8FF] text-[#0D1227] font-semibold px-6 py-2.5 shadow-none text-sm group"
        >
          {name}
        </Link>
      </Container>
    </>
  );
}

export function JoinDiscordButton() {
  return (
    <>
      <Container tapScale={0.95}>
        <Link
          href="https://discord.gg/zg3ge9VTgr"
          className="ring-[#4287f5] btn border-[#7289da] bg-transparent hover:bg-[#7289da] font-semibold px-6 py-2.5 shadow-none text-white text-sm"
        >
          Join Discord
        </Link>
      </Container>
    </>
  );
}

export function ExploreScriptsButton({}) {
  return (
    <>
      <Container tapScale={0.95}>
        <Link
          href={'/scripts'}
          className="ring-[#154B94] btn border-[#276CB0] bg-[#276CB0] hover:bg-[#154B94] text-[#F4F8FF] font-semibold px-6 py-2.5 text-sm group"
        >
          Explore scripts
        </Link>
      </Container>
    </>
  );
}

export function MoreScreenshotsButton({}) {
  return (
    <>
      <Container tapScale={0.95}>
        <Link
          href={'/gallery'}
          className="ring-[#154B94] btn border-[#276CB0] bg-[#276CB0] hover:bg-[#154B94] text-[#F4F8FF] font-semibold px-6 py-2.5 text-sm group"
        >
          More screenshots
        </Link>
      </Container>
    </>
  );
}
