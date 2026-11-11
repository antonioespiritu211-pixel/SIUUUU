// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "%";
  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 300);

