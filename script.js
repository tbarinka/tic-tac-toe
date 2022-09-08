
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

const controller = (() => {
    const checkWhoseTurn = () => {
        if ((board.grid.filter(checkXMarker).length % 2 == 0) && (board.grid.filter(checkOMarker).length % 2 == 1)) {
            let m = prompt("Pick your O move.");
            oPlayer.move(m);
        } else if (board.grid.filter(checkXMarker).length % 2 == 0) {
            let m = prompt("Pick your X move.");
            xPlayer.move(m);
        } else if ((board.grid.filter(checkXMarker).length % 2 == 1) && (board.grid.filter(checkOMarker).length % 2 == 0)) {
            let m = prompt("Pick your O move.");
            oPlayer.move(m);
        } else if ((board.grid.filter(checkXMarker).length % 2 == 1) && (board.grid.filter(checkOMarker).length % 2 == 1)) {
            let m = prompt("Pick your X move.");
            xPlayer.move(m);
        }
    }
    
    return {checkWhoseTurn}

})();
