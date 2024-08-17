import { ShieldCheckIcon, TrophyIcon, CodeBracketIcon } from "@heroicons/react/16/solid"
import Feature from "./Feature";

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Safe on servers",
    desc: "ClickCrystals mod is undetectable, unless custom-modules by ClickScript. We keep improving the mod to add new features, enchance the current features & make them safe.",
    linkTitle: "List of confirmed servers that allow this mod",
    linkUrl: "https://github.com/clickcrystals-development/ClickCrystals#but-isnt-this-cheating"
  },
  {
    icon: TrophyIcon,
    title: "Top-notch features",
    desc: "ClickCrystals mod is full of features that will help you to win every match. From swap modules, to utility and HUDs through a lot more features, there is no chance you lose.",
    linkTitle: "List of all modules", 
    linkUrl: "https://github.com/clickcrystals-development/ClickCrystals#modules"
  },
  {
    icon: CodeBracketIcon,
    title: "ClickScript",
    desc: "Automate your farms or always do doubleclick. Fast exp and autototems. We've got you covered with ClickScript, a powerful scripting language that will help you to automate your tasks.",
    linkTitle: "How to code your own ClickScript modules",
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