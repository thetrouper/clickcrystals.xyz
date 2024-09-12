import { ShieldCheckIcon, TrophyIcon, CodeBracketIcon } from "@heroicons/react/16/solid"
import Feature from "./Feature";

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Safe & Risk-free Gameplay",
    desc: "All of our modules are designed to be safe, easy to use, and free of any potential risks. We regularly test our modules on different servers to ensure they are risk-free and do not flag.",
    linkTitle: "List of servers to avoid/play on",
    linkUrl: "https://github.com/clickcrystals-development/ClickCrystals#but-isnt-this-cheating"
  },
  {
    icon: TrophyIcon,
    title: "Premium-quality Features",
    desc: "The ClickCrystals mod is full of features proven to give you an astounding advantage in every match. From simple automation to advanced PvP modules, we've got you everything to dominate the game—autoattack, jump reset, auto totem, auto pot, auto pearl and whatsover.",
    linkTitle: "Explore the features",
    linkUrl: "https://github.com/clickcrystals-development/ClickCrystals#modules"
  },
  {
    icon: CodeBracketIcon,
    title: "ClickScript",
    desc: "ClickScript (CCS) is a scripting language that lets you create modules, macros, and more. Write .ccs files, and use our in-game editor to build, debug, and run scripts. Download and enable scripts from our online library or manually add your own. From simple swaps, to fully auto grinding bots, it's your choice!",
    linkTitle: "Read the CCS Documentation",
    linkUrl: "https://bit.ly/ccs-wiki"
  }
]

export default function FeaturesGrid() {
  return (
    <div className="md:gap-12 md:grid-cols-3 md:grid mt-8">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  )
}
