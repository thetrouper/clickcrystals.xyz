'use client'

import { faDiscord, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Social } from './Social';

export default function Socials() {
  return (
    <ul className="flex mt-0">
      <Social icon={faGithub} url="#" className='text-slate-800' />
      <Social icon={faDiscord} url="#" className='text-blue-600' />
      <Social icon={faYoutube} url="#" className='text-red-600' />
    </ul>
  )
}