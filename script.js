// words rain
const words = ["эйфория", "ещё эйфория", "тоже эйфория", "ЭЙФОРИЯ"];
const containerRain = document.getElementById("containerRain");

const createWord = () => {
  const wordElement = document.createElement("div");
  wordElement.classList.add("word");
  wordElement.innerText = words[Math.floor(Math.random() * words.length)];

  wordElement.style.left = Math.random() * 100 + "vw";

  wordElement.style.animationDuration = Math.random() * 3 + 2 + "s";

  containerRain.appendChild(wordElement);

  setTimeout(() => {
    wordElement.remove();
  }, 5000);
};

setInterval(createWord, 100);

// heart-click
document.addEventListener("click", function (e) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💜";

  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
});
