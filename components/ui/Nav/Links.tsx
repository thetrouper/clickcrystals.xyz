'use client';

import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@/components/ui/Nav/Icon';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export const Links = () => {
  return (
    <div className="hidden lg:flex items-center gap-4">
      <Container>
        <Icon
          icon={faGithub}
          url="https://github.com/clickcrystals-development/ClickCrystals"
          hoverColor="hover:text-white"
        />
      </Container>
      <Container>
        <Icon
          icon={faDiscord}
          url="https://discord.gg/zg3ge9VTgr"
          hoverColor="hover:text-[#5865F2]"
        />
      </Container>
      <Container className="hidden lg:block">
        <span className="ml-4">
          <Link
            href="/download"
            className="bg-[#276CB0] hover:bg-[#276CB0]/80 rounded-lg transition-colors duration-150 text-[#F4F8FF] font-semibold md:px-6 ml-2 px-5 py-2.5 text-sm"
          >
            Get ClickCrystals!
          </Link>
        </span>
      </Container>
    </div>
  );
};
