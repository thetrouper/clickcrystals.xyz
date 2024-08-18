"use client";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

type DropLinkProps = {
  label: string;
  links: Array<{ label: string, url: string, seperate?: boolean }>;
  url: string | undefined;
}

export const DropLink = ({ label, links, url = "#" }: DropLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!('ontouchstart' in window)) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!('ontouchstart' in window)) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
        className="transition items-center hover:text-white duration-150 ease-in-out flex font-medium px-4 py-3 mb-0 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {label}
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`transition-all size-3.5 ml-1.5 text-gray-400 ${isHovered || isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <div
        ref={dropdownRef}
        className={`${(isHovered || isOpen) ? "opacity-100 visible" : "opacity-0 invisible"} z-[999999] transition-all absolute mt-0 w-48 bg-white rounded-md p-0 m-0`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          {links.map((link, index) => (
            <div key={index}>
              {link.seperate && <div className="border-t border-gray-200"></div>}
              <Link href={link.url} className="transition-all duration-75 block px-4 py-2 my-0 h-full w-full text-sm text-gray-700 hover:text-blue-500 hover:bg-gray-200 rounded-lg">
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};
