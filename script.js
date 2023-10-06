let color = "black";
let click = false;
document.addEventListener("DOMContentLoaded", () => {
  createBoard(16);
  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      let draw = document.querySelector("#draw");
      if (click) {
        draw.innerHTML = "Now you can draw!";
      } else {
        draw.innerHTML = "Now you cannot draw, click again!";
      }
    }
  });
  let selectButton = document.querySelector("#popup");
  selectButton.addEventListener("click", () => {
    let size = getSize();
    createBoard(size);
    resetBoard();
  });
});
function createBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;
  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}
function getSize() {
  let input = prompt("Choose a size");
  let message = document.querySelector("#message");
  if (input == "") {
    message.innerHTML = "Please provide a number";
  } else if (input < 0 || input > 100) {
    message.innerHTML = "Please provide a number between 1 and 100";
  } else {
    message.innerHTML ="" ;
    return input;
  }
}
function colorDiv() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } 
    else if (color == "white") {
        this.style.backgroundColor = "white" ;
    }
    else {
      this.style.backgroundColor = "black";
    }
  }
}
function setColor(colorChoice) {
  color = colorChoice;
}
function resetBoard() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}
