 function openSite(){

document.getElementById("opening").style.display = "none";

document.getElementById("mainSection")
.classList.remove("hidden");

}

function showMessage1(){

document.getElementById("msg1").innerHTML =
"Good 😌✨";

}

function showMessage2(){

document.getElementById("msg2").innerHTML =
"Expected answer 😭🎂";

}

function showFinal(){

document.getElementById("finalMessage").innerHTML =
"Have a really nice birthday and enjoy your day 🎉✨";

}

/* Moving Button */

const moveBtn = document.getElementById("moveBtn");

moveBtn.addEventListener("mouseover", () => {

const x = Math.floor(Math.random() * 300) - 150;
const y = Math.floor(Math.random() * 300) - 150;

moveBtn.style.transform =
`translate(${x}px, ${y}px)`;

});

/* Confetti */

for(let i=0; i<50; i++){

const confetti = document.createElement("div");

confetti.classList.add("confetti");

confetti.style.left = Math.random()*100 + "vw";

confetti.style.animationDuration =
(Math.random()*3 + 2) + "s";

document.body.appendChild(confetti);

}

/* Music */

const music = document.getElementById("bgMusic");

function toggleMusic(){

if(music.paused){

music.play();

}else{

music.pause();

}

}
