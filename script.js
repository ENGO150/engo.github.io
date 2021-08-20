var epilepsy_active = true;

function epilepsy()
{
    if (!epilepsy_active) return;
    epilepsy_active = false;
    
    for (var i = 0; i < 100; i++)
    {
        setTimeout(function()
        {
            //for (var i2 = 0; i2 < 6; i2++) color += letters[Math.floor(Math.random() * 16)];

            document.getElementById("epilepsy").style.color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        }, i * 20);
    }
}