'use client'

import { Container } from "@/components/ui/Container";
import Link from "next/link";

type DownloadLinkProps = {
  label: string;
  icon: any;
  className?: string;
  link: string;
}

export const DownloadLink = ({ label, icon, className = '', link }: DownloadLinkProps) => {
  return (
    <Container tapScale={0.95}>
      <Link href={link} className={`btn text-white font-semibold px-2.5 md:px-5 py-2.5 shadow-none text-sm ${className}`}>
        {icon} <span className="hidden md:block ml-2">
          {label}
        </span>
      </Link>
    </Container>
  )
}
