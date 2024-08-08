import Socials from "./Socials";
import Info from "./Info";

export default function Content() {
  return (
    <div className="mx-6 md:mx-16">
      <div className="py-6 md:py-10 md:mx-8 flex justify-between">
        <Info />
        <Socials />
      </div>
    </div>
  )
}