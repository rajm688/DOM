let intialVal = 100;

function fun(){
    let input = document.getElementById("input").value.length
let output = document.getElementById("output")
    let currentval = intialVal - input;
    output.textContent = currentval;
}