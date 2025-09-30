const button = document.querySelectorAll(".button");
const reset = document.querySelector("#reset");
const winnerContainer = document.querySelector(".winnerContainer");
const winDiv = document.querySelector(".winDiv");
const ticTacContainer = document.querySelector(".ticTacContainer");
const newGame = document.querySelector("#newGame");

let turnX = true;

const winners = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const startNewGame = () => {
  console.log("new");
  winnerContainer.classList.add("hide");
  ticTacContainer.classList.remove("hide");
  button.forEach((button) => {
    button.innerText = "";
    button.disabled = false;
  });
};

const displayWinner = (pos0Val) => {
  winDiv.innerText = `Winner is ${pos0Val}`;
  winnerContainer.classList.remove("hide");
  ticTacContainer.classList.add("hide");
};

const checkWinner = () => {
  for (let win of winners) {
    const pos0Val = button[win[0]].innerText;
    const pos1Val = button[win[1]].innerText;
    const pos2Val = button[win[2]].innerText;

    if (pos0Val != "" && pos1Val != "" && pos2Val != "") {
      if (pos0Val === pos1Val && pos1Val === pos2Val) {
        console.log(`Winner is ${pos0Val}`);
        displayWinner(pos0Val);
      }
    }
  }
};

button.forEach((item) => {
  item.addEventListener("click", () => {
    if (turnX) {
      item.style.color = "red";
      item.innerText = "X";
      turnX = false;
    } else {
      item.style.color = "green";
      item.innerText = "0";
      turnX = true;
    }
    item.disabled = true;
    checkWinner();
  });
});

newGame.addEventListener("click", startNewGame);
reset.addEventListener("click", startNewGame);
