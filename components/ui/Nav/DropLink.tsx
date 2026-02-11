'use client';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

type DropLinkProps = {
  label: string;
  links: Array<{ label: string; url: string; seperate?: boolean }>;
  url: string | undefined;
  onLinkClick?: () => void;
};

export const DropLink = ({ label, links, url = '#', onLinkClick }: DropLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!('ontouchstart' in window)) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!('ontouchstart' in window)) {
      setIsHovered(false);
      setIsOpen(false);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <li className="relative">
      <div
        ref={buttonRef}
        className="transition items-center hover:text-white duration-150 ease-in-out flex font-medium px-4 py-3 mb-0 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {label}
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`transition-all size-3.5 ml-1.5 text-gray-400 ${isHovered || isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      <div
        ref={dropdownRef}
        className={`${isHovered || isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-[999999] transition-all duration-75 ease-out absolute mt-0 w-52 bg-slate-800 border border-slate-700 rounded-lg p-1 shadow-xl right-0 md:right-0 md:left-auto left-0`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {links.map((link, index) => {
            const isExternal = link.url.startsWith('http');
            return (
              <div key={index}>
                {link.seperate && (
                  <div className="border-t border-slate-700 my-1"></div>
                )}
                {isExternal ? (
                  <a
                    href={link.url}
                    className="w-full text-left block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-slate-700 rounded-md"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.url}
                    onClick={() => {
                      setIsOpen(false);
                      onLinkClick?.();
                    }}
                    className="w-full text-left block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-slate-700 rounded-md"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </li>
  );
};
