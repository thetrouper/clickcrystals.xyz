function calculateBasePathFromDataLayer() {
  const dataLayer = document.body.getAttribute('data-layer');
  const layer = parseInt(dataLayer, 10);
  const layersToAscend = isNaN(layer) ? 0 : layer;
  const basePath = '../'.repeat(layersToAscend);

  return basePath;
}


basePath = calculateBasePathFromDataLayer();
code = `
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body sticky-top" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="${basePath}index.html">ClickCrystals</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li class="nav-item">
                            <a class="nav-link" href="${basePath}gallery.html">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${basePath}faq.html">FAQ</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="${basePath}download.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Download
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="${basePath}download.html">Website</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" target="_blank" href="https://www.curseforge.com/minecraft/mc-mods/clickcrystals">CurseForge</a></li>
                                <li><a class="dropdown-item" target="_blank" href="https://planetminecraft.com/mod/clickcrystal">PlanetMC</a></li>
                                <li><a class="dropdown-item" target="_blank" href="https://github.com/itzispyder/ClickCrystals">Github</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" target="_blank" href="https://modrinth.com/mod/clickcrystals">Modrinth</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" target="_blank" href="https://clickcrystals.xyz/get">Instant Download</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tools
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="${basePath}tools/bulletin-gen.html" target="_blank">Bulletin Generator</a></li>
                                <li><a class="dropdown-item" href="${basePath}tools/scriptformatter.html">Script Formatter</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" href="https://bit.ly/ccs-wiki">Wiki</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" href="https://clickcrystals.xyz/discord">Discord</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${basePath}projects.html">Projects</a>
                        </li>
                    </ul>
                    <a href="${basePath}get.html" target="_blank"><button type="button" class="btn btn-outline-light">Get Latest</button></a>
                </div>
            </div>
        </nav>
        `;


document.body.innerHTML = code+document.body.innerHTML

