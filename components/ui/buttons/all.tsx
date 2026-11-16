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
          className="bg-[#61ADEC] hover:bg-[#388BD3] text-[#0D1227] font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors duration-150"
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
          className="bg-[#7289da]/20 hover:bg-[#7289da]/40 font-semibold px-6 py-2.5 rounded-lg text-white text-sm transition-colors duration-150"
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
          className="bg-[#276CB0]/20 hover:bg-[#276CB0]/40 text-[#F4F8FF] font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors duration-150"
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
          className="bg-[#276CB0]/20 hover:bg-[#276CB0]/40 text-[#F4F8FF] font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors duration-150"
        >
          More screenshots
        </Link>
      </Container>
    </>
  );
}
