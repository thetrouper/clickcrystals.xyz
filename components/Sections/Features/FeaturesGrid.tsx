import Feature from './Feature';

const features = [
  {
    icon: '/textures/totem.png',
    title: 'Discrete gameplay',
    desc: 'All of our modules are designed to be safe, easy to use, and free of any potential risks. Our modules undergo rigourous scrutiny and testing to make sure there is no way they can be flagged as a cheat or unfair advantage.',
    linkTitle: 'List of servers which deny and support us',
    linkUrl:
      'https://github.com/clickcrystals-development/ClickCrystals#but-isnt-this-cheating',
  },
  {
    icon: '/textures/diamond.png',
    title: 'Credible quality for free!',
    desc: 'Clickcrystals is full of powerful features to let you achieve success. From left clicking to both break and place crystals to automaticaly throwing a pearl apon your request, ClickCrystals will simplify your interactions. Clickcrystals includes powerful rendering modules to display FPS, CPS, Server IP, ArrayList, Armor Durrability, and more! All huds are rendered in high quality, displaying accurate information on your gameplay.',
    linkTitle: 'Explore the features',
    linkUrl:
      'https://github.com/clickcrystals-development/ClickCrystals#modules',
  },
  {
    icon: '/img/clickscript.png',
    title: 'ClickScript',
    desc: 'ClickScript (CCS) is a scripting language that lets you create modules, macros, and more. Write .ccs files, and use our in-game editor to build, debug, and run scripts. Automate chat commands, farming, or any other action.',
    linkTitle: 'Read the CCS Documentation',
    linkUrl: 'https://bit.ly/ccs-wiki',
  },
];

export default function FeaturesGrid() {
  return (
    <div className="md:gap-12 md:grid-cols-3 md:grid mt-8">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  );
}
