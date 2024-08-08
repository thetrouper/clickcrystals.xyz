"use client";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

type DropLinkProps = {
  label: string;
  links: Array<{ label: string, url: string, seperate?: boolean }>;
  url: string | undefined;
}

export const DropLink = ({ label, links, url = "#" }: DropLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li>
      <Link
        className="transition items-center hover:text-white duration-150 ease-in-out flex font-medium px-4 py-3 mb-0"
        href={url}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
        <FontAwesomeIcon icon={faAngleDown} className={`transition-all size-3.5 ml-1.5 text-gray-400 ${isHovered ? "rotate-180" : "rotate-0"}`} />
      </Link>
      <div className={`${isHovered ? "opacity-100" : "hidden opacity-0"} transition-all absolute mt-0 w-48 bg-white rounded-md shadow-lg`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="py-1">
          {links.map((link, index) => (
            <>
              {link.seperate && <div className="border-t border-gray-200" key={index*100}></div>}
              <Link href={link.url} key={index} className="transition-all duration-75 block px-4 py-2 mt-0 mb-0 h-full w-full text-sm text-gray-700 hover:text-blue-500 hover:bg-gray-200">{link.label}</Link>
            </>
          ))}
        </div>
      </div>
    </li>
  )
}
