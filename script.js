// VARIABLES
let videoDisplay = false;
let musicDisplay = false;

const easterEggNumber = 11;

let keyBlocked = false;

let caughtClicked = 0;

const textToChange =
[
    "welcome_text",
    "about",
    "hidden-text",
    "social"
];

// EVENTS
document.addEventListener("keydown", e =>
{
    if (e.code != "KeyR" || keyBlocked) return;

    window.location.href = "res/pages/roger";
});

document.addEventListener("keydown", e =>
{
    if (e.code != "KeyT" || keyBlocked) return;

    new Audio("res/tongo.mp3").play();

    keyBlocked = true;
});

document.addEventListener("keydown", e =>
{
    if (e.code != "KeyX" || keyBlocked) return;

    document.body.style.backgroundImage = "url(res/wallpaper.png)";
    
    keyBlocked = true;
});

document.addEventListener("keydown", e =>
{
    if (e.code != "KeyP" || keyBlocked) return;

    new Audio("res/putin.mp3").play();

    keyBlocked = true;
});

document.addEventListener("keydown", e =>
{
    if (e.code != "KeyC" || keyBlocked) return;


    for (var i = 0; i < textToChange.length; i++)
    {
        document.getElementsByClassName(textToChange[i])[0].style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive';
    }

    keyBlocked = true;
});

// FUNCTIONS
function videoFunction()
{
    var buffer;

    if (videoDisplay)
    {
        buffer = "none";
    } else
    {
        buffer = "table";
    }

    document.getElementsByClassName("twinkies")[0].style.display = buffer;

    videoDisplay = !videoDisplay;
}

function musicFunction()
{
    var buffer;

    if (musicDisplay)
    {
        buffer = "none";
    } else
    {
        buffer = "table";
    }

    document.getElementsByClassName("rickroll")[0].style.display = buffer;

    musicDisplay = !musicDisplay;
}

function showInfo()
{
    document.getElementsByClassName("hidden-text")[0].innerHTML = "lol this page contains " + easterEggNumber + " easterggs...";

    setTimeout(function ()
    {
        document.getElementsByClassName("hidden-text")[0].innerHTML = "";
    }, 5000);
}

function showAlert()
{
    alert("JEBAITED");
}

function caughtCountdown()
{
    caughtClicked++;

    if (caughtClicked != 12) return;

    document.getElementsByClassName("age")[0].innerHTML = "12";

    setTimeout(function ()
    {
        document.body.style.backgroundImage = "url(res/4k.gif)";
    }, 3000);
}

function waitForEpsilon()
{
    setTimeout(function () {epsilon()}, 60000);
}

function epsilon()
{
    window.location.href = "res/pages/epsilon";
}