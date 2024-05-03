
function calculateBasePathFromDataLayer() {
  const dataLayer = document.body.getAttribute('data-layer');
  const layer = parseInt(dataLayer, 10);
  const layersToAscend = isNaN(layer) ? 0 : layer;
  const basePath = '../'.repeat(layersToAscend);

  return basePath;
}


basePath = calculateBasePathFromDataLayer();
code = `<div>
<footer class="text-center text-lg-start text-white" style="background-color: #4b73a1;padding-bottom: 20px">
    <div class="container p-4 pb-0">
        <section>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h4>ClickCrystals</h4>
                    <hr>
                    <p>Your Ultimate CPvP Assistance</p>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Pages</h5>
                    <ul class="list-unstyled mb-0">
                        <li><a href="${basePath}faq.html" class="text-white">FAQ</a></li>
                        <li><a href="${basePath}gallery.html" class="text-white">Gallery</a></li>
                        <li><a href="${basePath}download.html" class="text-white">Downloads</a></li>
                        <li><a href="${basePath}projects.html" class="text-white">Other projects</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Downloads</h5>
                    <ul class="list-unstyled mb-0">
                        <li><a href="${basePath}download.html" class="text-white">Downloads</a></li>
                        <li><a href="https://github.com/ItziSpyder/ClickCrystals" target="_blank" class="text-white">Github</a></li>
                        <li><a href="https://www.curseforge.com/minecraft/mc-mods/clickcrystals" target="_blank" class="text-white">CurseForge</a></li>
                        <li><a href="https://planetminecraft.com/mod/clickcrystal" target="_blank" class="text-white">PlanetMC</a></li>
                        <li><a href="https://modrinth.com/mod/clickcrystals" target="_blank" class="text-white">Modrinth</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Contact</h5>
                    <ul class="list-unstyled mb-0">
                        <li><a href="https://clickcrytals.xyz/discord" target="_blank" class="text-white">Discord</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Resources</h5>
                    <ul class="list-unstyled mb-0">
                    
                        <li><a href="${basePath}tools/scriptformatter.html" class="text-white">Script Formatter</a></li>
                        <li><a href="${basePath}tools/bulletin-gen.html" class="text-white"   target="_blank">Bulletin Gen</a></li>
                        <li><a href="https://itzispyder.github.io/clickcrystals/bulletin" target="_blank" class="text-white">Bulletin JSON</a></li>
                        <li><a href="https://itzispyder.github.io/clickcrystals/info" target="_blank" class="text-white">Info JSON</a></li>
                        <li><a href="https://bit.ly/ccs-wiki" class="text-white" target="_blank">CCS Wiki</a></li>
                        <li><a href="https://tools.tutla.net/ai/models/clickcrystals" class="text-white" target="_blank">CCS AI</a></li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4 mb-md-0"></div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Owners</h5>
                        <ul class="list-unstyled mb-0">
                            <li><a href="https://github.com/itzispyder" target="_blank" class="text-white">ImproperIssues</a></li>
                            <li><a href="https://trouper.me" target="_blank" class="text-white">Wolf</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Contributors</h5>
                        <ul class="list-unstyled mb-0">
                            <li><a href="https://github.com/TutlaMC" target="_blank" class="text-white">TutlaMC</a></li>
                            <li><a href="https://github.com/i-no-one" target="_blank" class="text-white">I-No-oNe</a></li>
                            <li><a href="https://github.com/TaxEvasiqn" target="_blank" class="text-white">TaxEvasion</a></li>
                            <li><a href="https://github.com/yirf" target="_blank" class="text-white">Yirf</a></li>
                            <li><a href="https://github.com/i-got-you-dead" target="_blank" class="text-white">I-Got-You-Dead</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</footer>
</div>`;

document.body.innerHTML = document.body.innerHTML+code
