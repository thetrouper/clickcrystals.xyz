code = `
<div class="docs-background">
    <style>
        .docs-backdrop {
            z-index: -1;
            background-image: url('./assets/code.png'); 
            background-size: cover; 
            position: fixed; 
            width: 100%; 
            height: 100%;
            transform: perspective(1000px) rotateX(23deg) rotateZ(-23deg) rotateY(45deg) translateZ(120px) translateY(50px);
        }

        .docs-backdrop-overlay {
            z-index: -1;
            background: radial-gradient(rgba(0, 0, 0, 0), black);
            position: fixed; 
            width: 100%; 
            height: 100%;
            transform: perspective(1000px) rotateX(23deg) rotateZ(-23deg) rotateY(45deg) translateZ(120px) translateY(50px);
        }
    </style>
    <div class="docs-backdrop"></div>
    <div class="docs-backdrop-overlay"></div>
</div>
`;

var div = document.createElement("div");
div.innerHTML = code;
document.body.appendChild(div);
