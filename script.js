const photos = [
"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg"
];

let i = 0;

setInterval(() => {
i++;
if(i >= photos.length){
i = 0;
}
document.getElementById("slide").src = photos[i];
},3000);

function showSurprise(){
document.getElementById("surprise").style.display="block";
}

setInterval(()=>{
const heart=document.createElement("div");

heart.className="heart";
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

},400);
