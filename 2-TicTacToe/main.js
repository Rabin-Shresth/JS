// HTML Elements: Here we are goint to grab our html elements

const status_div = document.querySelector('.status');
const reset_btn = document.querySelector('.reset');
const cell_divs = document.querySelectorAll('.game-cell');

const xSymbol = 'X';
const oSymbol = 'O';


// game variables

let gameIsLive = true; // if it is true the game is going
let xIsNext = true; // true huda X ko palo false huda O ko palo
let winner = null;

// functions

const handleWin = (letter) => {
    gameIsLive = false;
    winner = letter;
    if (winner === 'X') {
        status_div.innerHTML = `${winner} Has WON`;
    } else {
        status_div.innerHTML = `<span>${winner} Has WON</span>`;
    }
}


const checkGameStatus = () => {
    const topleft = cell_divs[0].classList[1];
    const topcentre = cell_divs[1].classList[1];
    const topright = cell_divs[2].classList[1];
    const midleft = cell_divs[3].classList[1];
    const midcentre = cell_divs[4].classList[1];
    const midright = cell_divs[5].classList[1];
    const bottomleft = cell_divs[6].classList[1];
    const bottomcentre = cell_divs[7].classList[1];
    const bottomright = cell_divs[8].classList[1];

    // check winner
    //horizontal win
    if (topleft && topleft === topcentre && topcentre === topright) {
        handleWin(topleft);
        cell_divs[0].classList.add('won');
        cell_divs[1].classList.add('won');
        cell_divs[2].classList.add('won');
    }
    else if (midleft && midleft === midcentre && midcentre === midright) {
        handleWin(midleft);
        cell_divs[3].classList.add('won');
        cell_divs[4].classList.add('won');
        cell_divs[5].classList.add('won');
    }
    else if (bottomleft && bottomleft === bottomcentre && bottomcentre === bottomright) {
        handleWin(bottomleft);
        cell_divs[6].classList.add('won');
        cell_divs[7].classList.add('won');
        cell_divs[8].classList.add('won');
    }
    // Vertical Win
    else if (topleft && topleft === midleft && topleft === bottomleft) {
        handleWin(topleft);
        cell_divs[0].classList.add('won');
        cell_divs[3].classList.add('won');
        cell_divs[6].classList.add('won');
    }
    else if (topcentre && topcentre === midcentre && topcentre === bottomcentre) {
        handleWin(topcentre);
        cell_divs[1].classList.add('won');
        cell_divs[4].classList.add('won');
        cell_divs[7].classList.add('won');
    }
    else if (topright && topright === midright && topright === bottomright) {
        handleWin(topright);
        cell_divs[2].classList.add('won');
        cell_divs[5].classList.add('won');
        cell_divs[8].classList.add('won');
    }
    // Diagonal Win
    else if (topleft && topleft === midcentre && topleft === bottomright) {
        handleWin(topleft);
        cell_divs[0].classList.add('won');
        cell_divs[4].classList.add('won');
        cell_divs[8].classList.add('won');
    }
    else if (topright && topright === midcentre && topright === bottomleft) {
        handleWin(topright);
        cell_divs[2].classList.add('won');
        cell_divs[4].classList.add('won');
        cell_divs[7].classList.add('won');
    }
    else if (topleft && topright && topcentre && midleft && midcentre && midright && bottomleft && bottomcentre && bottomright) {
        gameIsLive = false;
        status_div.innerHTML = 'Game is tied !!!';
    }
    else {
        xIsNext = !xIsNext;
        if (xIsNext) {
            status_div.innerHTML = `${xSymbol} is next`;
        }
        else {
            status_div.innerHTML = `<span>${oSymbol} is next</span>`;
        }
    }
}


// event handlers

const handleReset = () => {
    xIsNext = true;
    status_div.innerHTML = `${xSymbol} is NEXT`;
    winner = null;
    for (const cellDiv of cell_divs) {
        cellDiv.classList.remove('X');
        cellDiv.classList.remove('O');
        cellDiv.classList.remove('won');

    }
}

const handleCellClick = (e) => {
    const classList = e.target.classList;

    if (classList[1] === 'X' || classList[1] === 'O') {
        return;
    }
    //yo condition le.. game-cell ko individual value ma x or o concat garxa
    if (xIsNext) {
        classList.add('X');
        checkGameStatus();
    }
    else {
        classList.add('O');
        checkGameStatus();
    }

}

// event listeners

reset_btn.addEventListener('click', handleReset);

for (const cellDiv of cell_divs) {
    // Above loop will loop through each element of cell_divs and store it in cellDiv
    cellDiv.addEventListener('click', handleCellClick);
}