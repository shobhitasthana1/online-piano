const whiteKey = document.querySelector(".white-key");
const blackKey = document.querySelector(".black-key");

// White Keys
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

// Black Keys
const keyW = document.querySelector(".key-w");
const keyE = document.querySelector(".key-e");
const keyT = document.querySelector(".key-t");
const keyY = document.querySelector(".key-y");
const keyU = document.querySelector(".key-u");
const keyO = document.querySelector(".key-o");
const keyP = document.querySelector(".key-p");

const whiteKey = document.querySelector(".white-key");

const keys = document.querySelectorAll(".white-key, .black-key");

keys.forEach((key) => {

    key.addEventListener("click", function () {

        const sound = key.innerText.toLowerCase();

        const audio = new Audio(`./tunes/${sound}.wav`);

        audio.currentTime = 0;

        audio.play();

    });

});

