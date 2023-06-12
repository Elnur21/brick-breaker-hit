let ball = document.querySelector("#ball");
let bar = document.querySelector("#bar");
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let barLeft = 200;
let ballDirectionX = 1;
let ballDirectionY = 1;
let ballLeft = 0;
let ballTop = 0;
// let ballLeft = Math.random()*10
bar.style.left = barLeft + "px";
ball.style.left = ballLeft + "px";

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
    if (ballLeft === 470) {
      ballDirectionX = -1;
    } else if (ballLeft === 0) {
      ballDirectionX = 1;
    }
    if (ballTop === 470) {
      ballDirectionY = -1;
    } else if (ballTop === 0) {
      ballDirectionY = 1;
    }
    ballLeft += ballDirectionX;
    ballTop += ballDirectionY;
    ball.style.left = ballLeft + "px";
    ball.style.top = ballTop + "px";
  }, 5);
  pause.addEventListener("click",()=>{
    clearInterval(interval)
})
});

