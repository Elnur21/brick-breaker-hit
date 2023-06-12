let ball = document.querySelector("#ball");
let bar = document.querySelector("#bar");
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let barLeft = 200;
let ballDirection = 1;
let ballLeft = 0;
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
  setInterval(()=>{
    if (ballLeft === 470) {
        ballDirection = -1;
      } else if (ballLeft === 0) {
        ballDirection = 1;
      }
      ballLeft += ballDirection;
      ball.style.left = ballLeft + "px";
  },5)
});
