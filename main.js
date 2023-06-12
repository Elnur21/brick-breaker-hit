let ball = document.querySelector("#ball");
let bar = document.querySelector("#bar");
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let restart = document.querySelector("#restart");
let bricks = document.querySelectorAll("ul li");
let itemLeft = 0
let itemTop = 0
bricks.forEach((item)=>{
    item.style.left=itemLeft+"px"
    item.style.top=itemTop+"px"
    console.log(item.offsetLeft)
    if(itemLeft===450){
        itemLeft=0
        itemTop+=20
    }
    else{
        itemLeft+=50;
    }
})
let barLeft = 200;
let ballDirectionX = 1;
let ballDirectionY = 1;
let ballLeft = Math.floor(Math.random() * 300);
let ballTop = Math.floor(Math.random() * 300);
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
    if (ballLeft === 470) {
      ballDirectionX = -1;
    } else if (ballLeft === 0) {
      ballDirectionX = 1;
    }
    if (ballTop === 460 && ballLeft >= barLeft-15 && ballLeft <= barLeft + 115) {
      ballDirectionY = -1;
    } else if (ballTop > 470) {
      clearInterval(interval);
    }
    bricks.forEach((item)=>{
        if(ballLeft >= (item.offsetLeft-10) && ballLeft <= (item.offsetLeft+60) && ballTop === item.offsetTop){
            item.style.display="none";
            ballDirectionY=-1
        }
    })
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
    ballLeft = Math.floor(Math.random() * 300);
    ballTop = Math.floor(Math.random() * 300);
    bar.style.left = barLeft + "px";
    ball.style.left = ballLeft + "px";
    ball.style.top = ballTop + "px";
  });
});
