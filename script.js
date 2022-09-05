const board = (() => {
    const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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

//this function fills in the game-board from "O" and "X" index values of board.grid
function markUpGameBoard() {
    if (typeof board.grid.at(0) !=="number") {cell0.textContent = board.grid.at(0);}
    if (typeof board.grid.at(1) !=="number") {cell1.textContent = board.grid.at(1);}
    if (typeof board.grid.at(2) !=="number") {cell2.textContent = board.grid.at(2);}
    if (typeof board.grid.at(3) !=="number") {cell3.textContent = board.grid.at(3);}
    if (typeof board.grid.at(4) !=="number") {cell4.textContent = board.grid.at(4);}
    if (typeof board.grid.at(5) !=="number") {cell5.textContent = board.grid.at(5);}
    if (typeof board.grid.at(6) !=="number") {cell6.textContent = board.grid.at(6);}
    if (typeof board.grid.at(7) !=="number") {cell7.textContent = board.grid.at(7);}
    if (typeof board.grid.at(8) !=="number") {cell8.textContent = board.grid.at(8);}
} markUpGameBoard();

//this function makes index values of board.grid mirror board in browser
function adjustBoardArray() {
    if (cell0.textContent == "X") {board.grid.splice(0, 1, cell0.textContent);}
        else if (cell0.textContent == "O") {board.grid.splice(0, 1, cell0.textContent);}
        else {board.grid.splice(0, 1, 0);}
    if (cell1.textContent == "X") {board.grid.splice(1, 1, cell1.textContent);}
        else if (cell1.textContent == "O") {board.grid.splice(1, 1, cell1.textContent);}
        else {board.grid.splice(1, 1, 1);}
    if (cell2.textContent == "X") {board.grid.splice(2, 1, cell2.textContent);}
        else if (cell2.textContent == "O") {board.grid.splice(2, 1, cell2.textContent);}
        else {board.grid.splice(2, 1, 2);}
    if (cell3.textContent == "X") {board.grid.splice(3, 1, cell3.textContent);}
        else if (cell3.textContent == "O") {board.grid.splice(3, 1, cell3.textContent);}
        else {board.grid.splice(3, 1, 3);}
    if (cell4.textContent == "X") {board.grid.splice(4, 1, cell4.textContent);}
        else if (cell4.textContent == "O") {board.grid.splice(4, 1, cell4.textContent);}
        else {board.grid.splice(4, 1, 4);}
    if (cell5.textContent == "X") {board.grid.splice(5, 1, cell5.textContent);}
        else if (cell5.textContent == "O") {board.grid.splice(5, 1, cell5.textContent);}
        else {board.grid.splice(5, 1, 5);}
    if (cell6.textContent == "X") {board.grid.splice(6, 1, cell6.textContent);}
        else if (cell6.textContent == "O") {board.grid.splice(6, 1, cell6.textContent);}
        else {board.grid.splice(6, 1, 6);}
    if (cell7.textContent == "X") {board.grid.splice(7, 1, cell7.textContent);}
        else if (cell7.textContent == "O") {board.grid.splice(7, 1, cell7.textContent);}
        else {board.grid.splice(7, 1, 7);}
    if (cell8.textContent == "X") {board.grid.splice(8, 1, cell8.textContent);}
        else if (cell8.textContent == "O") {board.grid.splice(8, 1, cell8.textContent);}
        else {board.grid.splice(8, 1, 8);}
}

//add event listener to DOM that allows you to add X to board
//cells.forEach(cell => {

  //  cell.addEventListener('click', function addX() {

    //    board.grid.at()

    //});
//});





//create a player factory function
//add the following to factory function:
    //move(gridNumber) = mark grid number with proprietary marker
        //(move --> (gridNumber is already taken --> try again)
        //(move --> (three in a row --> win))

