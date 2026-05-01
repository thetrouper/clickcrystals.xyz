import { Nav } from '@/components/ui/Nav/Nav';
import { Title } from '@/components/ui/Nav/Title';
import { Links } from '@/components/ui/Nav/Links';
import dynamic from 'next/dynamic';
import ScrollWrapper from './ScrollWrapper';

const MobileMenu = dynamic(() => import('./MobileMenu'), {
  ssr: false,
  loading: () => null,
});

export default function Header() {
  return (
    <ScrollWrapper>
      <header className="w-full">
        <div className="w-full flex max-w-7xl justify-between md:items-center md:mx-auto md:px-4 md:h-[72px]">
          <div className="hidden md:flex justify-between">
            <Title />
          </div>
          <Nav />
          <Links />
          <div className="relative w-full md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>
    </ScrollWrapper>
  );
}
