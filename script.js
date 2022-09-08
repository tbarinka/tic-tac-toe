
//write a function that will fill cells of tic-tac-toe board with appropraite values
const cells = document.querySelectorAll(".cell")
const cell0 = document.getElementById("cell-0");
const cell1 = document.getElementById("cell-1");
const cell2 = document.getElementById("cell-2");
const cell3 = document.getElementById("cell-3");
const cell4 = document.getElementById("cell-4");
const cell5 = document.getElementById("cell-5");
const cell6 = document.getElementById("cell-6");
const cell7 = document.getElementById("cell-7");
const cell8 = document.getElementById("cell-8");

const winnerInfo = document.getElementById("winner-info")
const turnInfo = document.getElementById("turn-info");
const reset = document.getElementById("reset");

const board = (() => {
    const grid = ["", "", "", "", "", "", "", "", ""];
    return {
        grid
    };
})();

const Player = (Marker) => {
    const name = ()) => {
        prompt("What is your name?");
    }

    const marker = Marker;

    return {name, marker}
}
const oPlayer = Player("O");
const xPlayer = Player("X");
