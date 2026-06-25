const keyA = document.querySelector(".key-a");
const keyS = document.querySelector(".key-s");
const keyD = document.querySelector(".key-d");
const keyF = document.querySelector(".key-f");
const keyG = document.querySelector(".key-g");
const keyH = document.querySelector(".key-h");
const keyJ = document.querySelector(".key-j");
const keyK = document.querySelector(".key-k");
const keyL = document.querySelector(".key-l");
const keySemicolon = document.querySelector(".key-semicolon");

const keyW = document.querySelector(".key-w");
const keyE = document.querySelector(".key-e");
const keyT = document.querySelector(".key-t");
const keyY = document.querySelector(".key-y");
const keyU = document.querySelector(".key-u");
const keyO = document.querySelector(".key-o");
const keyP = document.querySelector(".key-p");

keyA.addEventListener("click", function () {
    const audio = new Audio("./tunes/a.wav");
    audio.play();
});

keyS.addEventListener("click", function () {
    const audio = new Audio("./tunes/s.wav");
    audio.play();
});

keyD.addEventListener("click", function () {
    const audio = new Audio("./tunes/d.wav");
    audio.play();
});

keyF.addEventListener("click", function () {
    const audio = new Audio("./tunes/f.wav");
    audio.play();
});

keyG.addEventListener("click", function () {
    const audio = new Audio("./tunes/g.wav");
    audio.play();
});

keyH.addEventListener("click", function () {
    const audio = new Audio("./tunes/h.wav");
    audio.play();
});

keyJ.addEventListener("click", function () {
    const audio = new Audio("./tunes/j.wav");
    audio.play();
});

keyK.addEventListener("click", function () {
    const audio = new Audio("./tunes/k.wav");
    audio.play();
});

keyL.addEventListener("click", function () {
    const audio = new Audio("./tunes/l.wav");
    audio.play();
});

keySemicolon.addEventListener("click", function () {
    const audio = new Audio("./tunes/;.wav");
    audio.play();
});

keyW.addEventListener("click", function () {
    const audio = new Audio("./tunes/w.wav");
    audio.play();
});

keyE.addEventListener("click", function () {
    const audio = new Audio("./tunes/e.wav");
    audio.play();
});

keyT.addEventListener("click", function () {
    const audio = new Audio("./tunes/t.wav");
    audio.play();
});

keyY.addEventListener("click", function () {
    const audio = new Audio("./tunes/y.wav");
    audio.play();
});

keyU.addEventListener("click", function () {
    const audio = new Audio("./tunes/u.wav");
    audio.play();
});

keyO.addEventListener("click", function () {
    const audio = new Audio("./tunes/o.wav");
    audio.play();
});

keyP.addEventListener("click", function () {
    const audio = new Audio("./tunes/p.wav");
    audio.play();
});

document.addEventListener("keydown", function (event) {
    const pressedKey = event.key.toLowerCase();
    
    if (pressedKey === "a") keyA.click();
    if (pressedKey === "s") keyS.click();
    if (pressedKey === "d") keyD.click();
    if (pressedKey === "f") keyF.click();
    if (pressedKey === "g") keyG.click();
    if (pressedKey === "h") keyH.click();
    if (pressedKey === "j") keyJ.click();
    if (pressedKey === "k") keyK.click();
    if (pressedKey === "l") keyL.click();
    if (pressedKey === ";") keySemicolon.click();
    
    if (pressedKey === "w") keyW.click();
    if (pressedKey === "e") keyE.click();
    if (pressedKey === "t") keyT.click();
    if (pressedKey === "y") keyY.click();
    if (pressedKey === "u") keyU.click();
    if (pressedKey === "o") keyO.click();
    if (pressedKey === "p") keyP.click();
});