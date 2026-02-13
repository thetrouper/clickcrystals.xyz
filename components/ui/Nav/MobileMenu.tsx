'use client';

import { motion } from 'framer-motion';
import { Title } from './Title';
import MobileMenuNav from './MobileMenuNav';
import { getLinks } from './Nav';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

const MenuOverlay = () => {
  const [active, setActive] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const links = getLinks(() => {
    setIsNavigating(true);
    setActive(false);
  });

  useEffect(() => {
    setActive(false);
    setIsNavigating(false);
  }, [pathname]);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      if (scrollPosition > 0 && !isNavigating) {
        window.scrollTo({ top: scrollPosition, behavior: 'instant' });
        setScrollPosition(0);
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [active, scrollPosition, isNavigating]);

  if (isNavigating) {
    return null;
  }

  return (
    <div className="md:hidden w-full">
      <div className="flex flex-row justify-between items-center px-4 py-3">
        <Title />
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/clickcrystals-development/ClickCrystals"
            target="_blank"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          </Link>
          <Link
            href="https://discord.gg/n9hfHNJVe6"
            target="_blank"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />
          </Link>
          <MobileMenuNav
            state={active}
            handler={setActive}
            onOpen={() => setScrollPosition(window.scrollY)}
          />
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <div
            className="fixed left-0 right-0 bg-slate-950/95 backdrop-blur-xl z-[99998] overflow-y-auto"
            style={{ top: '72px', height: 'calc(100vh - 72px)' }}
          >
            <ul className="flex flex-col items-center px-4 py-8">
              {links.map((link: any, index: any) => (
                <div key={index} className="text-xl mb-4 w-full">
                  {link}
                </div>
              ))}
            </ul>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuOverlay;
