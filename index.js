const startButton = document.querySelector("#screen1 button");
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
const screen3 = document.querySelector("#screen3");
const characters = document.querySelectorAll("#screen2 img");
const mainDiv = document.querySelector(".main");
const scoreDiv = document.querySelector("#score span")
const timerDiv = document.querySelector("#timer span")
let score = 0
let time = 5

startButton.onclick = () => {
  screen1.style.display = "none";
  screen2.style.display = "flex";
};

for (let i = 0; i < characters.length; i++) {
  characters[i].onclick = (e) => {
    e.preventDefault();
    console.log(e);
    startTheGame(e);
  };
}

function startTheGame(event) {
  screen2.style.display = "none";
  screen3.style.display = "flex";
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const interval = setInterval(() => {

    if(time === 1){
      clearInterval(interval)
      showScore()
    }

    timerDiv.innerHTML = --time

    const thumbnail = document.createElement("img"); //<img >
    // thumbnail.setAttribute("src", )
    // thumbnail.src = characters[i].src
    thumbnail.src = event.target.src;
    const xPosition = (Math.random() * screenWidth);
    const yPosition = (Math.random() * screenHeight);


    thumbnail.style.top = yPosition + "px"
    thumbnail.style.left = xPosition + "px"

    thumbnail.setAttribute("onclick", "removeImage(this)")

    mainDiv.append(thumbnail);

    
    
  }, 1000);
}


function removeImage(elem){
  elem.remove()
  scoreDiv.innerHTML = ++score
}

function showScore(){
  const scoreDivWrapper = document.createElement("div")
  scoreDivWrapper.classList.add("scoreDivWrapper")
  const scoreDiv = document.createElement("div")
  scoreDiv.classList.add("scoreDiv")
  scoreDiv.innerHTML = "Your total score " + score
  scoreDivWrapper.append(scoreDiv)
  screen3.append(scoreDivWrapper)
}