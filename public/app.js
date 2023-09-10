// Initial game state
/*let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Your game logic here

    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...
};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    // ...

    // Your code to update the 'result' element
    // ...

    // Your code to re-enable buttons
    // ...
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);*/

const board = document.getElementById("board");
const cells = document.querySelectorAll("[data-cell]");
const restartButton = document.getElementById("restart-button");
const message = document.getElementById("message");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            message.innerText = `${currentPlayer} wins!`;
            cells[a].style.backgroundColor = cells[b].style.backgroundColor = cells[c].style.backgroundColor = "green";
        }
    }

    if (!gameBoard.includes("") && gameActive) {
        gameActive = false;
        message.innerText = "It's a draw!";
    }
}

function handleCellClick(event) {
    const cell = event.target;
    const cellIndex = cell.getAttribute("data-cell");

    if (gameBoard[cellIndex] === "" && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        cell.innerText = currentPlayer;
        cell.style.backgroundColor = "#fff";
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        checkWinner();
    }
}

function restartGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    cells.forEach((cell) => {
        cell.innerText = "";
        cell.style.backgroundColor = "#eee";
    });
    message.innerText = "";
}

cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
});

restartButton.addEventListener("click", restartGame);

