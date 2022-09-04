const board = (() => {
    const grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    return {
        grid
    };
})();

const Player = (signature) => {
    const move = num => {
        board.grid.splice(num, 1, signature)
    }
    return {move}
}

const oPlayer = Player("O");
const xPlayer = Player("X");




//create a player factory function
//add the following to factory function:
    //player.name
    //move(gridNumber) = mark grid number with proprietary marker
        //(move --> (gridNumber is already taken --> try again)
        //(move --> (three in a row --> win))

//create two objects two store players out of the factory

