let ball = document.querySelector("#ball");
let bar = document.querySelector("#bar");
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let restart = document.querySelector("#restart");
let bricks = document.querySelectorAll("ul li");
let scores = document.querySelector("#scores");
let score = document.querySelector("#score");
let scoresArray = [];
let scoreCount = 0;
let itemLeft = 0;
let itemTop = 0;
bricks.forEach((item) => {
  item.style.left = itemLeft + "px";
  item.style.top = itemTop + "px";
  if (itemLeft === 450) {
    itemLeft = 0;
    itemTop += 20;
  } else {
    itemLeft += 50;
  }
});
let barLeft = 200;
let ballDirectionX = 1;
let ballDirectionY = 1;
let ballLeft = 235;
let ballTop = 447;
bar.style.left = barLeft + "px";
ball.style.left = ballLeft + "px";
ball.style.top = ballTop + "px";

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && barLeft > 0) {
    barLeft -= 10;
    bar.style.left = barLeft + "px";
  } else if (e.key === "ArrowRight" && barLeft < 400) {
    barLeft += 10;
    bar.style.left = barLeft + "px";
  }
});

start.addEventListener("click", () => {
  let interval = setInterval(() => {
    let directionX = Math.floor(Math.random() * 10);
    if (ballLeft === 470) {
      ballDirectionX = -1;
    } else if (ballLeft === 0) {
      ballDirectionX = 1;
    }
    if (
      ballTop === 460 &&
      ballLeft >= barLeft - 15 &&
      ballLeft <= barLeft + 115
    ) {
      ballDirectionY = -ballDirectionY;
      ballDirectionX = directionX < 4 ? 1 : directionX < 7 ? -1 : 0;
    } else if (ballTop > 470) {
      scoresArray.push(`Uduzdu ${scoreCount} xal ile`);
      localStorage.setItem("scores", JSON.stringify(scoresArray));
      alert("uduzdunuz");
      clearInterval(interval);
    }
    if (ballTop === 0) {
      ballDirectionY = -ballDirectionY;
    }
    for (let i = 0; i < bricks.length; i++) {
      if (scoreCount === bricks.length) {
        scoresArray.push(`Max xal ile uddu`);
        localStorage.setItem("scores", JSON.stringify(scoresArray));
        alert("uddunuz");
        clearInterval(interval);
        break;
      }
      if (
        ballLeft >= bricks[i].offsetLeft - 15 &&
        ballLeft <= bricks[i].offsetLeft + 65 &&
        ballTop === bricks[i].offsetTop
      ) {
        bricks[i].style.display = "none";
        ballDirectionY = -ballDirectionY;
        ballDirectionX = directionX < 4 ? 1 : directionX < 7 ? -1 : 0;
        scoreCount += 1;
        score.innerHTML = scoreCount;
        break;
      }
    }
    ballLeft += ballDirectionX;
    ballTop += ballDirectionY;
    ball.style.left = ballLeft + "px";
    ball.style.top = ballTop + "px";
  }, 5);
  pause.addEventListener("click", () => {
    clearInterval(interval);
  });
  restart.addEventListener("click", () => {
    clearInterval(interval);
    ballLeft = 235;
    ballTop = 447;
    barLeft = 200;
    bar.style.left = barLeft + "px";
    ball.style.left = ballLeft + "px";
    ball.style.top = ballTop + "px";
    bricks.forEach((item) => {
      item.style.display = "block";
    });
    reset();
  });
});

onload(reset());

function reset() {
  scoreCount = 0;
  score.innerHTML = scoreCount;
  scores.innerHTML = "";
  scoresArray = JSON.parse(localStorage.getItem("scores"));
  scoresArray.forEach((score) => {
    scores.innerHTML += `
      <p>${score}</p>
      `;
  });
}
