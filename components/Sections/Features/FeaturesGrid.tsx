import Feature from './Feature';

const features = [
  {
    icon: '/textures/totem.png',
    title: 'Safe & Discreet',
    desc: 'All modules are rigorously tested to ensure they are safe and compliant with server rules. No unfair advantages, just smart gameplay.',
    linkTitle: 'Server compatibility',
    linkUrl:
      'https://github.com/clickcrystals-development/ClickCrystals#but-isnt-this-cheating',
  },
  {
    icon: '/textures/diamond.png',
    title: 'Powerful Features',
    desc: 'Simplify crystal PvP with smart interactions, HUD overlays, and automation. FPS counter, armor durability, CPS tracker, and more—all rendered in high quality.',
    linkTitle: 'Explore features',
    linkUrl:
      'https://github.com/clickcrystals-development/ClickCrystals#modules',
  },
  {
    icon: '/img/clickscript.png',
    title: 'Custom Scripting',
    desc: 'Create modules and macros with ClickScript. Use the in-game editor to build, debug, and run scripts. Automate anything you need.',
    linkTitle: 'CCS Documentation',
    linkUrl: 'https://bit.ly/ccs-wiki',
  },
];

export default function FeaturesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} index={index} />
      ))}
    </div>
  );
}
