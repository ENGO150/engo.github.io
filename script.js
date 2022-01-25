// VARIABLES
const TITLE = "Dark Side of The Moon";

var videoDisplay = false;
var musicDisplay = false;

const easterEggNumber = 10;

var keyBlocked = false;

const textToChange =
[
    'welcome_text',
    'about',
    'hidden-text',
    'social'
];

// AUTOMATICALLY CALLED
if (document.title.toString() == "")
{
    document.title = TITLE;
}

// EVENTS
document.addEventListener("keydown", e =>
{
    if (e.code != 'KeyR' || keyBlocked) return;

    window.location.href = 'res/pages/roger';
});

document.addEventListener("keydown", e =>
{
    if (e.code != 'KeyT' || keyBlocked) return;

    new Audio('res/tongo.mp3').play();

    keyBlocked = true;
});

document.addEventListener("keydown", e =>
{
    if (e.code != 'KeyX' || keyBlocked) return;

    document.body.style.backgroundImage = 'url(res/wallpaper.png)';
    
    keyBlocked = true;
});

document.addEventListener("keydown", e =>
{
    if (e.code != 'KeyP' || keyBlocked) return;

    new Audio('res/putin.mp3').play();

    keyBlocked = true;
});

document.addEventListener("keydown", e =>
{
    if (e.code != 'KeyC' || keyBlocked) return;


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