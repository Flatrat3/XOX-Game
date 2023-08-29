// Get references to HTML elements
const board = document.getElementById("board");
const cells = [];
let currentPlayer = "X"; //Initalize the current player to "X"
let winner = null; // Initialize the winner variable to null

//Create the game board
for (let i = 0; i < 9; i++) {
  //Looping to create 9 cells
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i;
  cell.addEventListener("click", handleCellClick);
  board.appendChild(cell);
  cells.push(cell); //Adding the cell to the cells array for tracking
}

//Event handler for cell clicks
function handleCellClick(event) {
  const cell = event.target; //Getting clicked cell
  const index = cell.dataset.index;

  // Check if the cell is empty and the game is not over

  if (!cell.textContent && !winner) {
    cell.textContent = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === "X" ? "O" : "X"; //Switch players
  }
}

// Check for a win or a draw
function checkWin(){
    const winnigCombos =
        [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ]
    ;
}