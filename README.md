# 💎 ClickCrystals

<div align="center">
  <img src="clickscript/img/icon.png" alt="ClickCrystals" width="200">
</div>
<p align="center">
  <strong>Your Crystal PvP Companion</strong>
  <br>
  ClickCrystals at your service
</p>

<p align="center">
  <a href="#-key-features">Features</a> •
  <a href="#-introducing-clickcrystal-scripts">ClickScript</a> •
  <a href="#-newest-changes">Changelog</a> •
  <a href="#%EF%B8%8F-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-help">Help</a> •
  <a href="#-contributing">Contributing</a> •
</p>

<p align="center">
<a href="https://discord.gg/GdNnK37Etw">
  <img alt="Discord" src="https://img.shields.io/discord/1095079504516493404?label=Discord&logo=discord&style=flat-square">
</a>
  <a href="https://github.com/ItziSpyder/ClickCrystals/graphs/contributors">
    <img alt="Contributors" src="https://img.shields.io/github/contributors/ItziSpyder/ClickCrystals?style=flat-square">
  </a>
  <a href="https://github.com/ItziSpyder/ClickCrystals">
    <img alt="Code size" src="https://img.shields.io/github/languages/code-size/ItziSpyder/ClickCrystals?style=flat-square">
  </a>
  <a href="https://github.com/ItziSpyder/ClickCrystals">
    <img alt="Lines of Code" src="https://tokei.rs/b1/github/ItziSpyder/ClickCrystals?style=flat-square">
  </a>
</p>



## 🌟 Key Features

- **Modules**: Powerful modules, undetectable
- **HUD & GUI**: Huds, nice GUI
- **ClickScript**: Your own Crystalling Modules!
- **Supported**: 1.19.4-1.20.4

## ✨ Introducing ClickCrystal Scripts!

Not enough modules? Your wonderful ideas aren't getting accepted? Want private features but don't know how to code? No worries, make your own modules with ClickCrystalsScripts (CCS)!

Introducing CCS, a fast and easy way to create modules from simple swapping, to selective interactions in game! CCS consists of a lot of CCS commands, and can be either executed separately or together in a .ccs file, like a Minecraft datapack!

Interested? Download our latest version and start creating (CCS documentation available on <a href="https://clickcrystals.xyz/clickscript" target="_blank">wiki</a>)

## 📃 Newest Changes

```yaml
Updating to: 1.20.4

Script:
  - on respawn # im not stable
  - if chance_of (N) # im not stable
  - if input_active sprint # im not stable
  - input sprint # im not stable
  - damage nearest_entity (ID) # im not stable
  - damage any_entity # im not stable
  - def function (name) (CCS.. args)
  - def module (name)
  - def desc ("")
  - function (name)

Tweaks:
  - added option to disable bedrock interaction when using crystal and obsidian switch modules
  - script (ID) arguments are now supported with commas, essentially making an or operator

Patches:
  - make event bus use concurrentlinkedqueue
  - Target hud totem pop text
  - escape key toggling modules on pojav
  - Fixed pojav crashes for target hud

Modules:
  - no block/container interactions # i no one
  - no gui background # i no one
  - camera clip # i no one
  - block outline # i no one

Commands:
  - ,version
```

## ⚙️ Installation

1. **Install the Fabric Loader**:

   - Visit the Fabric Loader website at [https://fabricmc.net/use](https://fabricmc.net/use).
   - Select your Minecraft version from the dropdown menu. Supported 1.19.4-1.20.4.
   - Click the "Download Installer" button for the corresponding operating system (Windows, macOS, or Linux).
   - Run the installer and follow the on-screen instructions to install the Fabric Loader.

2. **Download the Mod**:

   - Find and download, the desired version of the ClickCrystals From Here: [Releases](https://github.com/ItziSpyder/ClickCrystals)
   - Ensure the mod version you download is compatible with your Minecraft and Fabric Loader versions.
   - Save the mod `.jar` file to your computer.

3. **Install ClickCrystals**:

   - Locate your Minecraft installation folder:
      - Windows: `%appdata%\.minecraft`
      - macOS: `~/Library/Application Support/minecraft`
      - Linux: `~/.minecraft`
   - Create a new folder named `mods` inside your Minecraft installation folder if it doesn't already exist.
   - Move the Mod `.jar` file you downloaded earlier into the `mods` folder.

4. **Launch Minecraft with Fabric**:

   - Open the Minecraft Launcher.
   - In the bottom-left corner, click the dropdown menu next to the "Play" button.
   - Select the "fabric-loader" profile.
   - Click "Play" to launch Minecraft with Fabric and your installed mods.

## 👉 Usage

After launching the game, go to a single-player world or multi-player. Then, use the apostrophe key to open the client menu.

<img src="https://clickcrystals.xyz/faq/assets/apostrophe.png" alt="Apostrophe Key">

## ❓ Help

- If you found a bug, please make a issue in the issue tracker.
- Suggestions are also welcome. Join our discord server to suggest!
- You can make texture packs for the ClickCrystals Client. Tell about them on our discord to get promoted.
- If you need help coding a ClickScript, feel free to ask us in our discord server.

<a href="https://discord.gg/GdNnK37Etw" target="_blank"><img src="https://dcbadge.vercel.app/api/server/GdNnK37Etw"></a>

## 🌈 Contributing

Your contributions are really welcome. Contribution not just includes PRs, but your suggestions are also counted as contributions.

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://itzispyder.github.io/"><img src="https://avatars.githubusercontent.com/u/114215797?v=4?s=100" width="100px;" alt="ImproperIssues"/><br /><sub><b>ImproperIssues</b></sub></a><br /><a href="https://github.com/e-coders/ClickCrystalsXYZ/commits?author=ItziSpyder" title="Code">💻</a> <a href="https://github.com/e-coders/ClickCrystalsXYZ/commits?author=ItziSpyder" title="Documentation">📖</a> <a href="#ideas-ItziSpyder" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/e-coders/ClickCrystalsXYZ/issues?q=author%3AItziSpyder" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://discord.gg/ogre"><img src="https://avatars.githubusercontent.com/u/93684527?v=4?s=100" width="100px;" alt="TheTrouper"/><br /><sub><b>TheTrouper</b></sub></a><br /><a href="https://github.com/e-coders/ClickCrystalsXYZ/commits?author=TheTrouper" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ayaanibrahimtutla"><img src="https://avatars.githubusercontent.com/u/91965613?v=4?s=100" width="100px;" alt="Tutla"/><br /><sub><b>Tutla</b></sub></a><br /><a href="#ideas-ayaanibrahimtutla" title="Ideas, Planning, & Feedback">🤔</a></td>   <td align="center" valign="top" width="14.28%"><a href="https://i-no-one.github.io/Website/"><img src="https://avatars.githubusercontent.com/u/145749961?v=4?s=100" width="100px;" alt="I-No-oNe"/><br /><sub><b>I-No-oNe</b></sub></a><br /><a href="https://github.com/e-coders/ClickCrystalsXYZ/commits?author=I-no-one" title="Code">💻</a> <a href="https://github.com/e-coders/ClickCrystalsXYZ/issues?q=author%3AI-no-one" title="Bug reports">🐛</a> <a href="#ideas-I-no-one" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://e-coders.me"><img src="https://avatars.githubusercontent.com/u/83082760?v=4?s=100" width="100px;" alt="Ark"/><br /><sub><b>Ark</b></sub></a><br /><a href="https://github.com/e-coders/ClickCrystalsXYZ/commits?author=e-coders" title="Documentation">📖</a> <a href="#ideas-e-coders" title="Ideas, Planning, & Feedback">🤔</a></td>
   
    
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
