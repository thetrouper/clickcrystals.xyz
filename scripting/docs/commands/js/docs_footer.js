code = `<div class="footer-wrapper" style="background-color: rgb(32, 32, 32); z-index: 9999;">
<style>
    .footer {
        color: white;
        margin: auto;
        margin-top: 30px;
        width: fit-content;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 10%;
        padding-right: 10%;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .footer .column a {
        color: aqua;
        text-decoration: underline;
    }
    .footer .line {
        width: 69%;
        border: gray 1px solid;
    }
    .footer .column {
        display: inline-block;
        padding-right: 50px;
        transform: translateY(-20px);
    }
    .footer .sections {
        vertical-align: top;
        display: inline-block;
    }
    .footer .links {
        margin-right: 50px;
        display: inline-block;
        width: 120px;
        vertical-align: top;
    }
    .footer .links > .title {
        font-size: 16px;
    }
    .footer .links > a {
        display: grid;
        color: lightgray;
    }
    .footer > .column > .title > img {
        width: 50px;
        transform: translateY(15px);
    }
</style>

<div class="footer">
    <div class="column">
        <p class="title" style="font-size: 20px;">
            <img src="../../../common/assets/icon.png">
            <strong>ClickCrystals</strong>
        </p>
        <div class="line"></div>
        <p style="color: lightgray;">Copyright (c) ClickCrystals 2023 <br>Licensed under <a href="https://en.wikipedia.org/wiki/MIT_License" target="_blank">MIT</a></p>
        <p style="color: lightgray;"><span style="font-style: italic;">"We make crystal pvp better"</span><br><a href="https://discord.gg/tMaShNzNtP" target="_blank">Contact us!</a></p>
    </div>
    <div class="sections">
        <div class="links">
            <p class="title">Owners</p>
            <a href="https://github.com/itzispyder" target="_blank">ImproperIssues</a>
            <a href="https://github.com/thetrouper" target="_blank">TheTrouper</a>
        </div>
        <div class="links">
            <p class="title">Contributors</p>
            <a href="https://github.com/TaxEvasiqn" target="_blank">TaxEvasion</a>
            <a href="https://github.com/i-no-one" target="_blank">I-No-One</a>
            <a href="https://github.com/yirf" target="_blank">Yirf</a>
            <a href="https://github.com/i-got-you-dead" target="_blank">I-Got-You-Dead</a>
        </div>
        <div class="links">
            <p class="title">Resources</p>
            <a href="https://itzispyder.github.io/clickcrystals/bulletin-generator" target="_blank">Bulletin Json Generator</a>
            <a href="https://itzispyder.github.io/clickcrystals/bulletin" target="_blank">Bulletin Json</a>
            <a href="https://itzispyder.github.io/clickcrystals/info" target="_blank">Info Json</a>
            <a href="https://github.com/itzispyder/clickcrystals/wiki" target="_blank">Wiki</a>
            <a href="https://itzispyder.github.io/developer" target="_blank">Toolbar Panel</a>
        </div>
        <div class="links">
            <p class="title">Downloads</p>
            <a href="https://modrinth.com/mod/clickcrystals" target="_blank">Modrinth</a>
            <a href="https://github.com/itzispyder/clickcrystals" target="_blank">GitHub</a>
            <a href="https://planetminecraft.com/mod/clickcrystal" target="_blank">PlanetMC</a>
            <a href="https://discord.gg/tMaShNzNtP" target="_blank">Discord</a>
            <a href="https://www.curseforge.com/minecraft/mc-mods/clickcrystals" target="_blank">CurseForge</a>
        </div>
    </div>
</div>
</div>`;

var div = document.createElement('div');
div.innerHTML = code;
document.body.appendChild(div);




