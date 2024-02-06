code = `<div class="banner-wrapper" style="z-index: 9999;">
<style>
    .banner {
        --color-generic: rgb(27, 146, 206);
        --color-hover: rgba(255, 255, 255, 0.21);

        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 51%, rgba(0,212,255,1) 100%);
        padding: 10px;
        padding-top: 0;
    }

    .banner a, .dropdown {
        color: white;
        text-decoration: none;
        border-radius: 10px;
        padding-left: 5px;
        padding-right: 5px;
        display: inline-block;
    }

    .dropdown:hover {
        background-color: var(--color-hover);
    }

    .banner > .top {
        padding: 10px;
        font-weight: bold;
        color: white;
    }

    .banner > .top > .menu:hover {
        background-color: var(--color-hover);
        cursor: pointer;
    }

    .banner > .top > .icon {
        display: inline-block;
        transform: translateY(8px);
    }

    .banner > .top > .title {
        display: inline-block;
        font-size: 18px;
    }
    .banner .dropdown-container {
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: var(--color-generic);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

</style>

<div class="banner">
    <div class="top">
        <div class="icon"><img src="./common/assets/icon.png" style="width: 45px;"></div>
        <div class="title">ClickCrystals / CPvP Enhanced</div>
    </div>
    <div class="end">
        <div class="links">
            <a href="../../index.html">Home</a>
            <a href="../../gallery.html">Gallery</a>
            <a href="../../faq.html">FAQ</a>
            <a href="../../scripting.html">Scripting</a>
            <a href="https://discord.gg/tMaShNzNtP" target="_blank">Discord</a>
            <a href="https://github.com/ItziSpyder/ClickCrystals/wiki" target="_blank">Wiki</a>
            <a href="https://github.com/ItziSpyder/ClickCrystals/issues" target="_blank">Issues</a>
            <div class="dropdown">
                <a href="../../download.html">Download</a>
                <div class="dropdown-content">
                    <br>

                    <a href="https://www.curseforge.com/minecraft/mc-mods/clickcrystals" target="_blank">CurseForge</a>
                    <a href="https://github.com/ItziSpyder/ClickCrystals" target="_blank">GitHub</a>
                    <a href="https://modrinth.com/mod/ClickCrystals" target="_blank">Modrinth</a>
                    <a href="https://planetminecraft.com/mod/clickcrystal" target="_blank">PlanetMC</a>
                </div>
            </div>

        </div>
    </div>
</div>
</div>`;

var div = document.createElement('div');
div.innerHTML = code;
document.body.appendChild(div);

