const delay = 3000;
let count = delay;
function countdown() {
  if (count > 0) {
    console.log(count);
    count--;
    setTimeout(countdown, 1000);
  } else {
    console.log(Math.random());
  }
}
countdown();