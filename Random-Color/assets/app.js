
function randomColor(){
    var random = Math.floor(Math.random() * 12345467 ).toString(16);
    document.getElementById('hexColor').innerHTML = random;
    document.getElementById('backgroundColor').style.backgroundColor = "#" + random;

    var randomrgb = Math.floor(Math.random() * 255 ).toString(10);
    randomrgb ="rgb("+randomrgb+"," +randomrgb+","+randomrgb+")";
    document.getElementById('rgbColor').innerHTML = randomrgb;
    document.getElementById('backgroundColorRGB').style.backgroundColor = randomrgb;
}