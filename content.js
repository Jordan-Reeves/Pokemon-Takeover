let prevPoke = "test";
let follow;
let replace;

// make the image that follows the mouse
let pokemonMouse = document.createElement("img");
document.body.appendChild(pokemonMouse);
pokemonMouse.style = "position: absolute;z-index: 100;width:160px";


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        follow = request.follow;
        replace = request.replace;
        doToBrowser(request.poke);
    }
);
// Source for getting message sending working
//https://stackoverflow.com/questions/29926598/sendmessage-from-popup-to-content-js-not-working-in-chrome-extension

function doToBrowser(pokeImgUrl) {

    if (replace) {
        const imgs = document.getElementsByTagName("img");

        // repalce all images with the searched pokemon
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].src = pokeImgUrl;
        }
    }

    if (follow) {
        // update the image the follows the mouse
        pokemonMouse.src = pokeImgUrl;

        let mx;
        let my;
        window.addEventListener("mousemove", function (e) {
            mx = e.pageX + 80;
            my = e.pageY - 80;
            pokemonMouse.style.left = mx + 'px';
            pokemonMouse.style.top = my + 'px';
        });
    }else{
        pokemonMouse.src = "";
    }



}