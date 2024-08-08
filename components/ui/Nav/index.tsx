import { Nav } from "@/components/ui/Nav/Nav";
import { Title } from "@/components/ui/Nav/Title";
import { Links } from "@/components/ui/Nav/Links";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <div className="bg-slate-800 tracking-tight text-white">
      <header className="w-full duration-100 ease-in flex-none sticky top-0 transition-all z-40">
        <div className="w-full flex max-w-7xl justify-between md:items-center md:mx-auto md:px-4 md:py-3.5">
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
    </div >
  )
}
