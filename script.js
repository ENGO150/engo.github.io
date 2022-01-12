var videoDisplay = false;
var musicDisplay = false;

var easterEggNumber = 4;

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

    document.getElementsByClassName("video")[0].style.display = buffer;

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

    document.getElementsByClassName("music")[0].style.display = buffer;

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