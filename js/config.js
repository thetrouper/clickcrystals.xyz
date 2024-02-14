window.$docsify = {      
    coverpage: true,
    subMaxLevel: 2,
    loadSidebar: true,
    routerMode: 'hash', 
    themeColor: '#78d5ff',
    darklightTheme: {
      defaultTheme : 'light'
                    },
    noEmoji: false,
    auto2top: true,
    autoHeader: false,
    name: 'ClickCrystals Docs',
    logo: 'img/icon.png',
    externalLinkTarget: '_blank',
    loadNavbar : false, // IMPORTANT
    search: 'auto',
    search: {
      maxAge: 86400000, // Expiration time, the default one day
      placeholder: 'Search the Wiki'
    },
    scrollToTop: {
      auto: true,
      text: 'â¬†',
      right: 15,
      bottom: 15,
      offset: 500
    },
    charty: {
    "theme": "#78d5ff",
    "mode":  "light",
    "debug": false
 },
    plugins: [],
    footer: {
        copy: 'ClickCrystals 2022-2024 is Licensed under the MIT License. A project by ImproperIssues and TheTrouper',
        auth: ' ',
      pre: '<hr/>',
      style: 'text-align: right;',
    },
    progress: {
        position: "top",
        color: "var(--theme-color,#78d5ff)",
        height: "5px",
    },
  };