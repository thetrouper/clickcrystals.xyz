'use client';

import { ChevronDown, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

type DropLinkItem = {
  label: string;
  url: string;
  description?: string;
  icon?: LucideIcon;
  iconImg?: string;
  separate?: boolean;
  primary?: boolean;
};

type DropLinkProps = {
  label: string;
  links: DropLinkItem[];
  url: string | undefined;
  onLinkClick?: () => void;
};

export const DropLink = ({ label, links, onLinkClick }: DropLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current?.contains(event.target as Node) === false &&
        buttonRef.current?.contains(event.target as Node) === false
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderItem = (link: DropLinkItem, index: number) => {
    const isExternal = link.url.startsWith('http');
    const Icon = link.icon;

    const itemClass = link.primary
      ? 'group flex items-center gap-3 px-3 py-2 rounded-lg border border-blue-500/[0.15] bg-blue-500/[0.08] hover:bg-blue-500/[0.15] hover:border-blue-500/30 hover:-translate-y-px hover:shadow-lg hover:shadow-blue-500/10 active:scale-[0.98] transition-all duration-150 cursor-pointer'
      : 'group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/[0.07] transition-colors duration-150 cursor-pointer';

    const content = (
      <>
        {(Icon || link.iconImg) && (
          <span className="flex w-5 shrink-0 items-center justify-center">
            {link.iconImg ? (
              <Image
                src={link.iconImg}
                alt={link.label}
                width={16}
                height={16}
                className="size-4 opacity-70 group-hover:opacity-100 transition-opacity grayscale"
              />
            ) : Icon ? (
              <Icon
                className={`size-4 transition-colors ${
                  link.primary
                    ? 'text-blue-400 group-hover:text-blue-300'
                    : 'text-slate-400 group-hover:text-slate-200'
                }`}
              />
            ) : null}
          </span>
        )}
        <span className="flex flex-col min-w-0">
          <span
            className={`text-sm leading-tight transition-colors ${
              link.primary
                ? 'font-semibold text-blue-300 group-hover:text-blue-200'
                : 'font-medium text-slate-200 group-hover:text-white'
            }`}
          >
            {link.label}
          </span>
          {link.description && (
            <span className="text-xs text-slate-500 group-hover:text-slate-400 mt-0.5 leading-tight transition-colors">
              {link.description}
            </span>
          )}
        </span>
      </>
    );

    return (
      <div key={index}>
        {link.separate && <div className="mt-2.5" />}
        {isExternal ? (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={itemClass}
          >
            {content}
          </a>
        ) : (
          <Link
            href={link.url}
            onClick={() => {
              setIsOpen(false);
              onLinkClick?.();
            }}
            className={itemClass}
          >
            {content}
          </Link>
        )}
      </div>
    );
  };

  return (
    <li className="relative">
      <div
        ref={buttonRef}
        className={`flex cursor-pointer select-none items-center gap-1.5 px-4 py-3 font-medium transition-colors duration-150 ease-in-out hover:text-white ${isVisible ? 'text-white' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {label}
        <ChevronDown
          className={`size-3.5 transition-all duration-200 ${isVisible ? 'rotate-180 text-slate-300' : 'text-slate-500'}`}
        />
      </div>

      <div
        ref={dropdownRef}
        className={`absolute right-0 z-[999999] mt-1 w-60 origin-top-right rounded-xl border border-slate-700/60 bg-slate-900 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-sm transition-all duration-200 ${
          isVisible
            ? 'opacity-100 visible translate-y-0 scale-100'
            : 'opacity-0 invisible -translate-y-1 scale-[0.98]'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-1.5 right-4 h-3 w-3 rotate-45 rounded-tl border-l border-t border-slate-700/60 bg-slate-900" />
        <div className="relative">{links.map(renderItem)}</div>
      </div>
    </li>
  );
};
