import Info from "./Info";
import Socials from "./Socials";

export default function FooterInfo() {
  return (
    <>
      <div className="w-full border-t border-t-blue-400" />
      <div className="pt-6 md:pt-10 md:mx-8 grid justify-items-center md:flex md:justify-between">
        <Info />
        <Socials />
      </div>
      <div className="flex flex-row justify-center text-white text-sm pb-12 pt-4">
        Copyright &copy; ImproperIssues & Contributors 2022-{new Date().getFullYear()}
      </div>
    </>
  )
}