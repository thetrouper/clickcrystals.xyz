import Feature from "./Feature";

const features = [
  {
    icon: "/textures/totem.png",
    title: "Undetectable gameplay",
    desc: "All of our modules are designed to be safe, easy to use, and free of any potential risks. We regularly test our modules on different servers to ensure they are risk-free and do not flag. No worries of getting flagged!",
    linkTitle: "List of servers to avoid/play on",
    linkUrl: "https://github.com/clickcrystals-development/ClickCrystals#but-isnt-this-cheating"
  },
  {
    icon: "/textures/diamond.png",
    title: "Super quality for free!",
    desc: "The ClickCrystals mod is full of features proven to give you an astounding advantage in every match. From simple automation to advanced PvP modules, we've got you everything to dominate the game—autoattack, jump reset, auto totem, auto pot, auto pearl and whatsover.",
    linkTitle: "Explore the features",
    linkUrl: "https://github.com/clickcrystals-development/ClickCrystals#modules"
  },
  {
    icon: "/img/ccs.png",
    title: "CCS",
    desc: "CCS is a scripting language that lets you create modules, macros, and more. Write .ccs files, and use our in-game editor to build, debug, and run scripts. Automatic farms, kill aura, auto pots and a lot more!",
    linkTitle: "Read the CCS Documentation",
    linkUrl: "https://bit.ly/ccs-wiki"
  },
  {
    icon: "/textures/diamond_sword.png",
    title: "Win every match",
    desc: "AutoAttack, AimAssist, SpecatorSight and awesome things. Never miss a hit on your opponent and auto-respond with a L.",
  },
  {
    icon: "/textures/diamond_pickaxe.png",
    title: "Customized to your liking",
    desc: "ClickCrystals is especially designed for Crystal PvP, however its many utillity modules and the custom modules prove to bypass many ACs and players use ClickCrystals for all the different gamemodes!",
  },
  {
    icon: "/textures/painting.png",
    title: "Check Out Our Huds!",
    desc: "FPS, CPS, ArrayList, etc. all of the HUDs you need for perfect pvp gameplay, enable by your choice! Choos'e the huds color to your liking.",
  },
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
