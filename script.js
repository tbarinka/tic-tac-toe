
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


//flow control module


//board module
const board = (() => {
    const grid = ["", "", "", "", "", "", "", "", ""];
    return {
        grid
    };
})();

//Player factory function
const Player = (marker) => {
    const name = (string) => {
        let name = string;
        return name;
    }
    const mark = marker;
    const move = (n) => {
        board.grid.splice(n, 1, marker);
    }

    return {name, mark, move}
}
const oPlayer = Player("O");
const xPlayer = Player("X");

function checkXMarker(marker) {
    return marker == ("X");
}
function checkOMarker(marker) {
    return marker == ("O");
}

function markUpGameBoard() {
    if (board.grid.at(0) !== "") {cell0.textContent = board.grid.at(0);}
    if (board.grid.at(1) !== "") {cell1.textContent = board.grid.at(1);}
    if (board.grid.at(2) !== "") {cell2.textContent = board.grid.at(2);}
    if (board.grid.at(3) !== "") {cell3.textContent = board.grid.at(3);}
    if (board.grid.at(4) !== "") {cell4.textContent = board.grid.at(4);}
    if (board.grid.at(5) !== "") {cell5.textContent = board.grid.at(5);}
    if (board.grid.at(6) !== "") {cell6.textContent = board.grid.at(6);}
    if (board.grid.at(7) !== "") {cell7.textContent = board.grid.at(7);}
    if (board.grid.at(8) !== "") {cell8.textContent = board.grid.at(8);}
} 

const controller = (() => {
    const checkWhoseTurn = () => {
        if ((board.grid.filter(checkXMarker).length % 2 == 0) && (board.grid.filter(checkOMarker).length % 2 == 1)) {
            let m = prompt("Pick your O move.");
            oPlayer.move(m);
            markUpGameBoard();
        } else if (board.grid.filter(checkXMarker).length % 2 == 0) {
            let m = prompt("Pick your X move.");
            xPlayer.move(m);
            markUpGameBoard();
        } else if ((board.grid.filter(checkXMarker).length % 2 == 1) && (board.grid.filter(checkOMarker).length % 2 == 0)) {
            let m = prompt("Pick your O move.");
            oPlayer.move(m);
            markUpGameBoard();
        } else if ((board.grid.filter(checkXMarker).length % 2 == 1) && (board.grid.filter(checkOMarker).length % 2 == 1)) {
            let m = prompt("Pick your X move.");
            xPlayer.move(m);
            markUpGameBoard();
        }
    }
    return {checkWhoseTurn}
})();
