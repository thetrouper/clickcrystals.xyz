import Info from "./Info";
import Socials from "./Socials";

export default function FooterInfo() {
  return (
    <>
      <div className="w-full border-t border-t-blue-400" />
      <div className="py-4 md:py-10 md:mx-8 grid justify-items-center md:flex md:justify-between items-center">
        <Info />
        <span className="font-bold text-slate-100">
          Copyright &copy; ItziSpyder & Contributors 2022-{new Date().getFullYear()}
        </span>
        <Socials />
      </div>
    </>
  )
}