// Grab the All, Online, and Offline options
let buttons = document.querySelectorAll('li');

// Add event listener to each one
for(let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', make_active);
}

// Toggle active class for options
function make_active() {
    // Remove activity from any previous button clicks
    $(this).siblings().removeClass("active");
    // Add active clas to current button
    $(this).addClass("active");
}


// Using TwitchSample.js due to FreeCodeCamp found errors with the original API
function API_call() {
    console.log(Twitch[0].stream.name);
}
