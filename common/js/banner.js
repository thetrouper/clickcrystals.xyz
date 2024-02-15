code = `
        <div class="banner-wrapper" style="z-index: 9999;">
            <style>
                .banner {
                    --color-generic: rgb(27, 146, 206);
                    --color-hover: rgba(255, 255, 255, 0.21);
            
                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    background: linear-gradient(to left bottom, hsl(182deg 100% 90.95%) 0%,hsl(209deg 100% 72.24%) 100%);
                    padding: 10px;
                    padding-top: 0;
                }
            
                .banner a {
                    color: white;
                    text-decoration: none;
                    background-color:rgb(12, 206, 255);
                    border-radius: 2px;
                    padding:5px;
                    padding-left:10px;
                    padding-right:10px;
                    margin:0;
                    transition: 0.09s steps(1000);
                }
            
                .links a:hover {
                    filter: brightness(85%);
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
              
@media only screen and (max-width: 600px) {
    .banner > .end > .links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .banner > .end > .links > a {
        width: calc(50% - 10px); 
        margin: 5px;
        text-align: center;
    }
}

            </style>
            
            <div class="banner">
            <div class="banner-wrapper" style="z-index: 9999;">
                <div class="top">
                    <div class="icon" style=" display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 103px;"><img src="/common/assets/logo.png" style=" max-width: 100%;
                  max-height: 100%;
                  height: auto;" alt="Logo by I-No-oNe"></div>
                </div>
                <div class="end" style="display: flex;
                justify-content: center;
                align-items: center; margin-bottom:10px;">
                    <div class="links">
                        <a href="/>Home</a>
                        <a href="/gallery">Gallery</a>
                        <a href="/download">Download</a>
                        <a href="/faq">FAQ</a>
                        <a href="/scripting">Scripting</a>
                        <a href="https://discord.gg/tMaShNzNtP" target="_blank">Discord</a>
                        <a href="/team">Team</a>
                    </div>
                    
                </div>
            </div>
            </div>`;

var div = document.createElement("div");
div.innerHTML = code;
document.body.appendChild(div);
