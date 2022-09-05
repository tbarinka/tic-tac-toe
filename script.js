const board = (() => {
    const grid = [0, "X", "X", 3, 4, 5, "O", 7, 8];
    return {
        grid
    };
})();

const Player = (signature) => {
    const move = num => {
        if (board.grid.at(num) == num) {
            board.grid.splice(num, 1, signature);
        } else {
            return
        }
    }
    return {move}
}
const oPlayer = Player("O");
const xPlayer = Player("X");

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


function markUpBoard() {
    cell0.textContent = board.grid.at(0);
    cell1.textContent = board.grid.at(1);
    cell2.textContent = board.grid.at(2);
    cell3.textContent = board.grid.at(3);
    cell4.textContent = board.grid.at(4);
    cell5.textContent = board.grid.at(5);
    cell6.textContent = board.grid.at(6);
    cell7.textContent = board.grid.at(7);
    cell8.textContent = board.grid.at(8);
} markUpBoard();



//create a player factory function
//add the following to factory function:
    //move(gridNumber) = mark grid number with proprietary marker
        //(move --> (gridNumber is already taken --> try again)
        //(move --> (three in a row --> win))

//create two objects two store players out of the factory

