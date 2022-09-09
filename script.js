
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



//board module
const board = (() => {
    const grid = ["", "", "", "", "", "", "", "", ""];
    const markUpBoard = () => {
  
        if (board.grid.at(0) !== "") {cell0.textContent = board.grid.at(0); cell0.style.color = "black"; cell0.style.fontSize = "125px";}
        if (board.grid.at(1) !== "") {cell1.textContent = board.grid.at(1); cell1.style.color = "black"; cell1.style.fontSize = "125px";}
        if (board.grid.at(2) !== "") {cell2.textContent = board.grid.at(2); cell2.style.color = "black"; cell2.style.fontSize = "125px";}
        if (board.grid.at(3) !== "") {cell3.textContent = board.grid.at(3); cell3.style.color = "black"; cell3.style.fontSize = "125px";}
        if (board.grid.at(4) !== "") {cell4.textContent = board.grid.at(4); cell4.style.color = "black"; cell4.style.fontSize = "125px";}
        if (board.grid.at(5) !== "") {cell5.textContent = board.grid.at(5); cell5.style.color = "black"; cell5.style.fontSize = "125px";}
        if (board.grid.at(6) !== "") {cell6.textContent = board.grid.at(6); cell6.style.color = "black"; cell6.style.fontSize = "125px";}
        if (board.grid.at(7) !== "") {cell7.textContent = board.grid.at(7); cell7.style.color = "black"; cell7.style.fontSize = "125px";}
        if (board.grid.at(8) !== "") {cell8.textContent = board.grid.at(8); cell8.style.color = "black"; cell8.style.fontSize = "125px";}
    }
    return {
        grid, markUpBoard,
    };
})();

//Player factory function
const Player = (marker) => {
    const name = (string) => {
        let name = string;
        return name;
    }
    const move = (n) => {
        board.grid.splice(n, 1, marker);
    }

    return {name, move}
}
const oPlayer = Player("O");
const xPlayer = Player("X");

//controller object with its subsidiary functions

const controller = (() => {

    function checkXMarker(marker) {
        return marker == ("X");
    }
    function checkOMarker(marker) {
        return marker == ("O");
    }

    function checkWinner () {
        if (cell0.textContent == "X" && cell1.textContent == "X" && cell2.textContent == "X") {
            winnerInfo.textContent = "Player X wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell3.textContent == "X" && cell4.textContent == "X" && cell5.textContent == "X") {
            winnerInfo.textContent = "Player X wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell6.textContent == "X" && cell7.textContent == "X" && cell8.textContent == "X") {
            winnerInfo.textContent = "Player X wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell0.textContent == "X" && cell3.textContent == "X" && cell6.textContent == "X") {
            winnerInfo.textContent = "Player X wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell1.textContent == "X" && cell4.textContent == "X" && cell7.textContent == "X") {
            winnerInfo.textContent = "Player X wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell2.textContent == "X" && cell5.textContent == "X" && cell8.textContent == "X") {
            winnerInfo.textContent = "Player X wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell0.textContent == "X" && cell4.textContent == "X" && cell8.textContent == "X") {
            winnerInfo.textContent = "Player X wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell6.textContent == "X" && cell4.textContent == "X" && cell2.textContent == "X") {
            winnerInfo.textContent = "Player X wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell0.textContent == "O" && cell1.textContent == "O" && cell2.textContent == "O") {
            winnerInfo.textContent = "Player O wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell3.textContent == "O" && cell4.textContent == "O" && cell5.textContent == "O") {
            winnerInfo.textContent = "Player O wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell6.textContent == "O" && cell7.textContent == "O" && cell8.textContent == "O") {
            winnerInfo.textContent = "Player O wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell0.textContent == "O" && cell3.textContent == "O" && cell6.textContent == "O") {
            winnerInfo.textContent = "Player O wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell1.textContent == "O" && cell4.textContent == "O" && cell7.textContent == "O") {
            winnerInfo.textContent = "Player O wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell2.textContent == "O" && cell5.textContent == "O" && cell8.textContent == "O") {
            winnerInfo.textContent = "Player O wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell0.textContent == "O" && cell4.textContent == "O" && cell8.textContent == "O") {
            winnerInfo.textContent = "Player O wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (cell6.textContent == "O" && cell4.textContent == "O" && cell2.textContent == "O") {
            winnerInfo.textContent = "Player O wins!";
            winnerInfo.style.visibility = 'visible';
        } else if (board.grid.filter(index => index.length == 1).length == 9) {
            winnerInfo.textContent = "Draw!";
            winnerInfo.style.visibility = 'visible';
        }
    }
    const checkWhoseTurn = () => {
        if ((board.grid.filter(checkXMarker).length % 2 == 0) && (board.grid.filter(checkOMarker).length % 2 == 1)) {
            oPlayer.move(m);
            board.markUpBoard();
            checkWinner()
        } else if (board.grid.filter(checkXMarker).length % 2 == 0) {
            xPlayer.move(m);
            board.markUpBoard();
            checkWinner()
        } else if ((board.grid.filter(checkXMarker).length % 2 == 1) && (board.grid.filter(checkOMarker).length % 2 == 0)) {
            oPlayer.move(m);
            board.markUpBoard();
            checkWinner()
        } else if ((board.grid.filter(checkXMarker).length % 2 == 1) && (board.grid.filter(checkOMarker).length % 2 == 1)) {
            xPlayer.move(m);
            board.markUpBoard();
            checkWinner()
        }
    }
    const resetBoard = () => {
        let n = 0;
        cells.forEach(cell => {
            cell.textContent = n;
            n++;
            cell.style.color = "white";
            cell.style.fontSize = "1px";
        });
        board.grid = ["", "", "", "", "", "", "", "", ""];
        winnerInfo.style.visibility = 'hidden';
    }
    return {checkWhoseTurn, resetBoard}
})();

let m;
cells.forEach(cell => {
        cell.addEventListener('click', function() {
            if ((cell.textContent !== "O") && (cell.textContent !== "X")) {
                m = cell.textContent;
                controller.checkWhoseTurn();
            }
        });
}); 
reset.addEventListener('click', controller.resetBoard);

