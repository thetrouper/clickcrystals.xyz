import Feature from './Feature';

const features = [
  {
    icon: '/textures/totem.png',
    title: 'Safe & Server-Compliant',
    desc: 'All modules are tested to respect server rules. No exploits. No hidden behavior. Just controlled gameplay enhancements.',
    linkTitle: 'Server compatibility',
    linkUrl:
      'https://github.com/clickcrystals-development/ClickCrystals#but-isnt-this-cheating',
  },
  {
    icon: '/textures/diamond.png',
    title: 'Combat & Performance Tools',
    desc: 'HUD overlays, CPS tracking, armor durability, and optimized combat tools built for Crystal PvP.',
    linkTitle: 'Explore features',
    linkUrl:
      'https://github.com/clickcrystals-development/ClickCrystals#modules',
  },
  {
    icon: '/img/clickscript.png',
    title: 'Custom Scripting Engine',
    desc: 'Create modules and macros using ClickScript. Build, debug, and execute directly in-game.',
    linkTitle: 'Read documentation',
    linkUrl: 'https://bit.ly/ccs-wiki',
  },
];

export default function FeaturesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-20">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  );
}
