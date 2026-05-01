'use client';

import { Title } from './Title';
import MobileMenuNav from './MobileMenuNav';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import {
  Download,
  History,
  CircleHelp,
  Sliders,
  MonitorPlay,
  Code2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type IconType = 'lucide' | 'fa-brand' | 'img';

type ChildItem = {
  label: string;
  url: string;
  external?: boolean;
  primary?: boolean;
  iconType?: IconType;
  icon?: any;
  iconSrc?: string;
};

type MenuItem = {
  label: string;
  url?: string;
  external?: boolean;
  children?: ChildItem[];
};

const menuItems: MenuItem[] = [
  { label: 'Home', url: '/' },
  {
    label: 'Download',
    children: [
      {
        label: 'Latest',
        url: '/get',
        primary: true,
        iconType: 'lucide',
        icon: Download,
      },
      {
        label: 'Versions',
        url: '/download',
        iconType: 'lucide',
        icon: History,
      },
      {
        label: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/mc-mods/clickcrystals',
        external: true,
        iconType: 'img',
        iconSrc: '/icons/curseforge.svg',
      },
      {
        label: 'GitHub Releases',
        url: 'https://github.com/clickcrystals-development/ClickCrystals/releases',
        external: true,
        iconType: 'fa-brand',
        icon: faGithub,
      },
      {
        label: 'Modrinth',
        url: 'https://modrinth.com/mod/clickcrystals',
        external: true,
        iconType: 'img',
        iconSrc: '/icons/modrinth.svg',
      },
    ],
  },
  { label: 'Scripts', url: '/scripts' },
  { label: 'Editor', url: '/editor' },
  { label: 'Wiki', url: 'https://bit.ly/ccs-wiki', external: true },
  {
    label: 'More',
    children: [
      { label: 'Help', url: '/help', iconType: 'lucide', icon: CircleHelp },
      { label: 'Configs', url: '/configs', iconType: 'lucide', icon: Sliders },
      {
        label: 'Preview',
        url: '/gallery',
        iconType: 'lucide',
        icon: MonitorPlay,
      },
      { label: 'Projects', url: '/projects', iconType: 'lucide', icon: Code2 },
    ],
  },
];

const itemCls =
  'block text-lg font-medium text-slate-400 hover:text-white py-3.5 px-4 rounded-xl hover:bg-slate-800/40 transition-all duration-150';

const renderIcon = (child: ChildItem) => {
  const cls = `shrink-0 ${child.primary ? 'text-blue-400' : 'text-slate-500'}`;
  if (child.iconType === 'lucide' && child.icon) {
    const Icon = child.icon;
    return <Icon className={`size-4 ${cls}`} />;
  }
  if (child.iconType === 'fa-brand' && child.icon) {
    return <FontAwesomeIcon icon={child.icon} className={`size-4 ${cls}`} />;
  }
  if (child.iconType === 'img' && child.iconSrc) {
    return (
      <Image
        src={child.iconSrc}
        alt={child.label}
        width={16}
        height={16}
        className="size-4 shrink-0 opacity-70"
      />
    );
  }
  return null;
};

const MenuOverlay = () => {
  const [active, setActive] = useState(false);
  const [subMenu, setSubMenu] = useState<MenuItem | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setActive(false);
    setSubMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      setSubMenu(null);
      if (scrollPosition > 0) {
        window.scrollTo({ top: scrollPosition, behavior: 'instant' });
        setScrollPosition(0);
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [active]);

  const close = () => {
    setActive(false);
    setSubMenu(null);
  };

  return (
    <div className="md:hidden w-full">
      <div className="flex flex-row justify-between items-center px-4 h-[72px]">
        <Title />
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/clickcrystals-development/ClickCrystals"
            target="_blank"
            aria-label="GitHub"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          </Link>
          <Link
            href="https://discord.gg/n9hfHNJVe6"
            target="_blank"
            aria-label="Discord"
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
            className="fixed left-0 right-0 z-[99998] overflow-hidden border-t border-slate-800/30 bg-slate-950"
            style={{ top: '72px', height: 'calc(100vh - 72px)' }}
          >
            <div className="relative h-full overflow-hidden">
              {/* Main menu */}
              <motion.div
                key="main"
                className="absolute inset-0 flex flex-col px-3 py-4 overflow-y-auto gap-0.5"
                initial={false}
                animate={{
                  x: subMenu ? '-100%' : '0%',
                  opacity: subMenu ? 0 : 1,
                }}
                transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
              >
                {menuItems.map((item, i) =>
                  item.children ? (
                    <button
                      key={i}
                      className={`${itemCls} flex items-center justify-between w-full text-left`}
                      onClick={() => setSubMenu(item)}
                    >
                      {item.label}
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="size-3 text-slate-600"
                      />
                    </button>
                  ) : item.external ? (
                    <a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={close}
                      className={itemCls}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={i}
                      href={item.url!}
                      onClick={close}
                      className={itemCls}
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </motion.div>

              {/* Sub menu */}
              <motion.div
                key="sub"
                className="absolute inset-0 flex flex-col px-4 py-3 overflow-y-auto"
                initial={{ x: '100%', opacity: 0 }}
                animate={{
                  x: subMenu ? '0%' : '100%',
                  opacity: subMenu ? 1 : 0,
                }}
                transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
              >
                {subMenu && (
                  <>
                    <button
                      className="flex items-center py-2.5 px-4 text-slate-500 hover:text-white transition-colors"
                      onClick={() => setSubMenu(null)}
                    >
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="size-3"
                      />
                    </button>
                    {subMenu.children?.map((child, i) =>
                      child.external ? (
                        <a
                          key={i}
                          href={child.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={close}
                          className={`flex items-center gap-3 text-lg font-medium py-3.5 px-4 rounded-xl hover:bg-slate-800/40 transition-all duration-150 ${child.primary ? 'text-blue-400 hover:text-blue-300' : 'text-slate-400 hover:text-white'}`}
                        >
                          {renderIcon(child)}
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={i}
                          href={child.url}
                          onClick={close}
                          className={`flex items-center gap-3 text-lg font-medium py-3.5 px-4 rounded-xl hover:bg-slate-800/40 transition-all duration-150 ${child.primary ? 'text-blue-400 hover:text-blue-300' : 'text-slate-400 hover:text-white'}`}
                        >
                          {renderIcon(child)}
                          {child.label}
                        </Link>
                      ),
                    )}
                  </>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuOverlay;
