'use client';

import {
  faDiscord,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Social } from './Social';

export default function Socials() {
  return (
    <ul className="flex mt-0">
      <Social
        icon={faGithub}
        url="https://github.com/clickcrystals-development/ClickCrystals"
        className="text-slate-800"
      />
      <Social
        icon={faDiscord}
        url="https://discord.gg/zg3ge9VTgr"
        className="text-blue-600"
      />
      <Social
        icon={faYoutube}
        url="https://www.youtube.com/@itzispyder"
        className="text-red-600"
      />
    </ul>
  );
}
