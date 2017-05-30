
let button = document.querySelector('button');


button.addEventListener('click', API_call)

// Using TwitchSample.js due to FreeCodeCamp found errors with the original API
function API_call() {
    console.log(Twitch[0].stream.name);
}
