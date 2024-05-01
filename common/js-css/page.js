document.body.setAttribute('data-bs-theme', 'dark');
function calculateBasePathFromDataLayer() {
    const dataLayer = document.body.getAttribute('data-layer');
    const layer = parseInt(dataLayer, 10);
    const layersToAscend = isNaN(layer) ? 0 : layer;
    const basePath = '../'.repeat(layersToAscend);

    return basePath;
}



basePath = calculateBasePathFromDataLayer();
var headerScript = document.createElement('script');
headerScript.src = basePath+'common/js-css/banner.js';


document.body.appendChild(headerScript);
var footerScript = document.createElement('script');
footerScript.src = basePath+'common/js-css/footer.js';
document.body.appendChild(footerScript);

