const searchTerm = document.getElementById("searchTerm");
const replaceBtn = document.getElementById("replaceBtn");

const API_KEY = "https://api.giphy.com/v1/gifs/search?";
const apiUrl = "dc6zaTOxFJmzC";

replaceBtn.addEventListener("click", () => {
    const imgs = document.getElementsByTagName("img");
    const url = "api_key=" + API_KEY;
    
} )

let replacementImages = [
    "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1170986.jpg&fm=jpg",
    "https://images.pexels.com/photos/3712095/pexels-photo-3712095.jpeg?cs=srgb&dl=pexels-cats-coming-3712095.jpg&fm=jpg",
    "https://www.dailypaws.com/thmb/Zy8lYUdyeQqHqye5os_0BRmpAC0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kitten-rescued-from-dumpster-956069948-2000-6e6a2f03b2bd403c908b42e4caf348be.jpg",];

//arr of images on the page
const imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i++) {
    const randImg = Math.floor(Math.random() * replacementImages.length);
    imgs[i].src = replacementImages[randImg];
}

const titles = document.getElementsByTagName("yt-formatted-string");
for (let i = 0; i < titles.length; i++) {
    titles[i].innerText = "Testing"
}


// "content_scripts": [
//     {
//         "matches": [
//             "<all_urls>"
//         ],
//         "js": [
//             "content.js"
//         ]
//     }
// ],


// // 1
// window.onload = (e) => {document.querySelector("#search").onclick = searchButtonClicked};

// // 2
// let displayTerm = "";

// // 3
// function searchButtonClicked(){
//     console.log("searchButtonClicked() called");
    
//     //1 
//     const GIPHY_URL = "https://api.giphy.com/v1/gifs/search?"

//     //2
//     //Public API key from here: https://developers.giphy.com/docs/
//     //If this one no longer works, get your own (its free!)
//     let GIPHY_KEY = "dc6zaTOxFJmzC";

//     //3 - build up our URL string
//     let url = GIPHY_URL;
//     url += "api_key=" + GIPHY_KEY;

//     //4 - parse the user entered term we wish to search
//     let term = document.querySelector("#searchterm").value;
//     displayTerm = term;

//     //5 - get rid of any leading and tailing spaces
//     term = term.trim();

//     //6 - encode spaces and special characters
//     term = encodeURIComponent(term);

//     //7 - if there's no term to search then bail out of the function (return does this)
//     if(term.length < 1) return;

//     //8 - append the serach term to the URL - the parameter name is 'q'
//     url += "&q=" + term;

//     //9 - grab the user chosen search 'limit' from the <select> and append it to the URL
//     let limit = document.querySelector("#limit").value;
//     url += "&limit=" + limit;

//     //10 - update the UI
//     document.querySelector("#status").innerHTML = "<b>Searching for '" + displayTerm + "'</b>";
    
//     //11 - see what the URL looks like
//     console.log(url);

//     //12 - Request data!
//     getData(url);
    
// }

// function getData(url){
//     //1 - create a new XHR object
//     let xhr = new XMLHttpRequest();

//     //2- set the onload handler
//     xhr.onload = dataLoaded;

//     //3 - set the onerror handler
//     xhr.onerror = dataError;

//     //4 - open connection and send the request
//     xhr.open("Get", url);
//     xhr.send();
// }

// //callback functions

// function dataLoaded(e){
//     //5 - event.target is the xhr object
//     let xhr = e.target;

//     //6 - xhr.responseText is the JSON file we just downloaded
//     console.log(xhr.responseText);

//     //7 - turn the text into a parsable JavaScript object
//     let obj = JSON.parse(xhr.responseText);

//     //8 - if there are no results, print a message and return
//     if(!obj.data || obj.data.length == 0){
//         document.querySelector("#status").innerHTML = "<b>No results found for '" + displayTerm + " '</b>";
//         return; //bail out
//     }

//     //9 - Start building an HTML string we will display to our user
//     let results = obj.data;
//     console.log("results.length = " + results.length);
//     let bigString = "";

//     //10 - loop through the array of results
//     for (let i = 0; i < results.length; i++){
//         let result = results[i];

//         //11 - get the URL to the GIF
//         let smallURL = result.images.fixed_width_downsampled.url;
//         if (!smallURL) smallURL = "images/no-image-found.png";

//         //12 - get the URL to the IPHY Page
//         let url = result.url;

//         //12.5  - get the rating
//         let rating = (result.rating ? result.rating : "NA").toUpperCase();

//         //13 - Build a <div> to hold each result
//         //ES6 String Template
//         let line = `<div class='result'><img src = '${smallURL}' title = '${result.id}' />`;
//         // line += `<span><a target='_blank' href='${url}'>View on Giphy</a></span></div>`;
//         line += `<span><a target='_blank' href='${url}'>View on Giphy</a>`;
//         line += `<p>Rating: ${rating}</span>`;
//         line+= `</div>`;
//         //15 - add the <div> to the bigString and loop
//         bigString += line;
//     }

//     //16 - all done building the HTML - show it to the user
//     document.querySelector("#content").innerHTML = bigString;

//     //17 - update the staus
//     document.querySelector("#status").innerHTML = "<b>Success!</b><p><i>Here are " + results.length + " results for '" + displayTerm + "'</i></p>";

// }     

// function dataError(e){
//     console.log("An error occured");
// }

	
