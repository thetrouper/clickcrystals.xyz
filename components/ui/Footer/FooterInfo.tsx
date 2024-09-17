import Info from './Info';
import Socials from './Socials';

export default function FooterInfo() {
  return (
    <>
      <div className="w-full border-t border-t-blue-400" />
      <div className="py-4 lg:py-10 lg:mx-8 grid justify-items-center lg:flex lg:justify-between items-center">
        <Info />
        <span className="font-bold text-white text-sm text-center hidden lg:block">
          Copyright &copy; ItziSpyder & Contributors 2022-
          {new Date().getFullYear()}
        </span>
        <Socials />
        <span className="font-bold text-white text-sm text-center lg:hidden">
          Copyright &copy; ItziSpyder & Contributors 2022-
          {new Date().getFullYear()}
        </span>
      </div>
    </>
  );
}
