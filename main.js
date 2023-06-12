let ball = document.querySelector("#ball");
let bar = document.querySelector("#bar");
let barLeft = 200;
bar.style.left = barLeft + "px";

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && barLeft>0) {
    barLeft -= 10;
    bar.style.left = barLeft + "px";
  }else if (e.key === "ArrowRight" && barLeft<400) {
    barLeft += 10;
    bar.style.left = barLeft + "px";
  }
});
