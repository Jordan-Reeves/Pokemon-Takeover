let searchTerm;
let searchBtn;
let followCB;
let replaceCB;
let stat;
let pokeImg;

function search() {
    const API_KEY = "https://pokeapi.co/api/v2/pokemon/";
    
    let pokemon = searchTerm.value;
    // clean up input
    pokemon = pokemon.toLowerCase();
    pokemon = pokemon.split(" ").join("");
    const url = API_KEY + pokemon;

    // call api
    fetch(url, {
        headers: {
            "X-API-Key": API_KEY
        }
    })
        .then(res => res.json())
        .then(data => {
            pokeImg = data["sprites"]["front_default"];
            stat.innerText = data["name"];
            stat.style = "color: black;"

            // send to content
            chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
                var activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, { "poke": pokeImg, "follow": followCB.checked, "replace": replaceCB.checked });
            });
        })
        .catch(error => {
            stat.innerText = "Error: Check your spelling."
            stat.style = "color: red;"
        });
}

function followFunc() {
    follow = followCB.checked;
    // send to content
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "poke": pokeImg, "follow": followCB.checked, "replace": replaceCB.checked });
    });
}
function replaceFunc() {
    replace = replaceCB.checked;
    // send to content
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "poke": pokeImg, "follow": followCB.checked, "replace": replaceCB.checked });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // setup
    searchTerm = document.getElementById("searchTerm");
    searchBtn = document.getElementById("searchBtn");
    followCB = document.getElementById("follow");
    replaceCB = document.getElementById("replace");
    stat = document.getElementById("status");

    //add event listeners
    searchBtn.addEventListener("click", search);
    followCB.addEventListener("click", followFunc);
    replaceCB.addEventListener("click", replaceFunc);
});