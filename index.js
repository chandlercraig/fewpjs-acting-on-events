// Your code here

let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "100px";

dodger.style.bottom = "0px";

document.addEventListener("keydown", function(e) {
  console.log(e.key);
});


function findLeftPosition() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  return left;
}

function moveDodgerLeft() {
  let left = findLeftPosition();

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let left = findLeftPosition();

  if (left >= 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
})