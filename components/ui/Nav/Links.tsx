'use client'

import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@/components/ui/Nav/Icon";
import { Container } from '@/components/ui/Container';

export const Links = () => {
  return (
    <div className="hidden md:flex items-center md:mb-0 md:self-center">
      <div className="items-center hidden md:flex">
        <Container>
          <Icon icon={faGithub} url="#" />
        </Container>
        <Container>
          <Icon icon={faDiscord} url="#" />
        </Container>
        <Container className="hidden lg:block">
          <span className="ml-4">
            <a href="/download" className="border-gray-600 bg-transparent hover:bg-gray-600 btn font-semibold md:px-6 ml-2 px-5.5 py-2.5 shadow-none text-sm">Get ClickCrystals!</a>
          </span>
        </Container>
      </div>
    </div>
  )
}
