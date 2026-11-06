const board = document.querySelector('.board');
const blockHeight = 30
const blockWidth = 30

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);
/*dividing users screen width to block width to get no. of blocks
that will fit in users pc .*/

// console.log(cols);
// console.log(rows);

for (let i = 0; i < rows * cols; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    board.appendChild(block);
}