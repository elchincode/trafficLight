const redCon = document.getElementById("circleRed");
const yellowCon = document.getElementById("circleYellow");
const greenCon = document.getElementById("circleGreen");


function redFun() {
    redCon.classList.add("red");
    greenCon.classList.add("colordefault")
    greenCon.classList.remove("green")
    setTimeout(yellowFun, 3000);
}
function yellowFun() {
    const red = document.getElementsByClassName("red");
    yellowCon.classList.add("yellow");
    redCon.classList.remove("red");
    redCon.classList.add("colorDefault")
    setTimeout(greenFun, 3000);
}
function greenFun() {
    const yellow = document.getElementsByClassName("yellow");
    greenCon.classList.add("green");
    yellowCon.classList.remove("yellow");
    yellowCon.classList.add("colorDefault")
    setTimeout(redFun, 3000);
}

redFun();




