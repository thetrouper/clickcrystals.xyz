'use client';

import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@/components/ui/Nav/Icon';
import { Container } from '@/components/ui/Container';

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
    </div>
  );
};
