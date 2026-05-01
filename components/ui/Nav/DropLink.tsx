'use client';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type IconType = 'lucide' | 'fa' | 'img';

export type DropLinkItem = {
  label: string;
  url: string;
  separate?: boolean;
  primary?: boolean;
  sectionLabel?: string;
  iconType?: IconType;
  icon?: any;
  iconSrc?: string;
  external?: boolean;
};

type DropLinkProps = {
  label: string;
  links: DropLinkItem[];
  url: string | undefined;
  onLinkClick?: () => void;
  align?: 'center' | 'right';
};

export const DropLink = ({
  label,
  links,
  onLinkClick,
  align = 'center',
}: DropLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  const isVisible = isHovered || isOpen;

  const handleMouseEnter = () => {
    if (!('ontouchstart' in window)) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!('ontouchstart' in window)) {
      setIsHovered(false);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderIcon = (link: DropLinkItem) => {
    if (!link.iconType) return null;
    const cls = `size-3.5 shrink-0 ${link.primary ? 'text-blue-400' : 'text-slate-500'}`;
    if (link.iconType === 'lucide' && link.icon) {
      const Icon = link.icon;
      return <Icon className={cls} />;
    }
    if (link.iconType === 'fa' && link.icon) {
      return <FontAwesomeIcon icon={link.icon} className={cls} />;
    }
    if (link.iconType === 'img' && link.iconSrc) {
      return (
        <Image
          src={link.iconSrc}
          alt={link.label}
          width={14}
          height={14}
          className="size-3.5 shrink-0 opacity-80"
        />
      );
    }
    return null;
  };

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex cursor-pointer select-none items-center gap-1.5 px-4 py-3 font-medium transition-colors duration-150 hover:text-white ${isVisible ? 'text-white' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen((p) => !p);
        }}
      >
        {label}
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`transition-transform duration-200 size-3 text-slate-500 ${isVisible ? 'rotate-180 text-slate-400' : ''}`}
        />
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute z-[99998] overflow-visible ${align === 'right' ? 'right-0' : 'left-1/2 -translate-x-1/2'}`}
          >
            <div className="px-2 py-2 flex items-center gap-1.5 flex-nowrap">
              {links.map((link, index) => {
                const isExternal = link.url.startsWith('http') || link.external;
                const cls = `flex items-center justify-center gap-1.5 min-w-[110px] px-3 py-1.5 text-sm rounded-full border transition-all duration-100 hover:scale-[1.02] ${
                  link.primary
                    ? 'text-blue-400 font-medium border-blue-500/20 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/40'
                    : 'text-slate-300 border-slate-700/50 bg-slate-800/60 hover:text-white hover:bg-slate-700/80 hover:border-slate-600'
                }`;

                return (
                  <div key={index} className="flex items-center">
                    {link.separate && <div className="w-4" />}
                    {isExternal ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cls}
                      >
                        {renderIcon(link)}
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.url}
                        onClick={() => {
                          setIsOpen(false);
                          onLinkClick?.();
                        }}
                        className={cls}
                      >
                        {renderIcon(link)}
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
