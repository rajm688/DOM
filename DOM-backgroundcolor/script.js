
function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

var button = document.getElementById('button').addEventListener("click",buttonclick);
function buttonclick(){
    document.body.style.backgroundColor=generateRandomColor()
}