import { Container } from '@/components/ui/Container';
import Link from "next/link";

type NavLinkProps = {
  label: string;
  url: string;
};

export const NavLink = ({ label, url }: NavLinkProps) => {
  return (
    <Container>
      <Link
        href={url}
        className="transition items-center hover:text-white duration-150 ease-in-out flex font-medium px-4 py-3 transiion-nav"
      >
        {label}
      </Link>
    </Container>
  );
};
