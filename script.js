var videoDisplay = false;
var musicDisplay = false;

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
