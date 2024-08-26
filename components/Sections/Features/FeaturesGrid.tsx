import { ShieldCheckIcon, TrophyIcon, CodeBracketIcon } from "@heroicons/react/16/solid"
import Feature from "./Feature";

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Safe & Risk-free Gameplay",
    desc: "We provide built-in modules that are undetectable on all servers. Improved features come out frequently. that keep you safe.",
    linkTitle: "List of servers to avoid/play on",
    linkUrl: "https://github.com/clickcrystals-development/ClickCrystals#but-isnt-this-cheating"
  },
  {
    icon: TrophyIcon,
    title: "Premium Quality Features",
    desc: "Your new client is full of features proven to give you an astounding advantage in every match. Swap modules from instant & better hotkeying to utility modules that replace the need for any other mod. We have detailed HUDs including HP/Armour & Tool indicators that provide an opportunity for you to grasp.",
    linkTitle: "See what's innit", 
    linkUrl: "https://github.com/clickcrystals-development/ClickCrystals#modules"
  },
  {
    icon: CodeBracketIcon,
    title: "ClickScript",
    desc: "See improved versions of modules when you make them yourself. Automate your farms or make the building process easier. Make the next revolutionary autototem or killaura hack. We've got you covered with ClickScript, a powerful scripting language that's made for you and your next-level gameplay.",
    linkTitle: "I'm making modules right now!",
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
