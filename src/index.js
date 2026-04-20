function solveNQueens(n) {
    let result = [];
    function isSafe(board, row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i] === col || 
                board[i] - i === col - row || 
                board[i] + i === col + row) {
                return false;
            }
        }
        return true;
    }

    function placeQueens(n, row, board, result) {
        if (row === n) {
            result.push([...board]);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row] = col;
                placeQueens(n, row + 1, board, result);
            }
        }
    }

    let board = new Array(n).fill(-1);
    placeQueens(n, 0, board, result);
    return result;
}

console.log(solveNQueens(4));
```

Kodda `solveNQueens` funksiyasi N x N shaxmat taxtasida N ta malika bir-birini urmasdan joylashtirish usullarini topadi. `isSafe` funksiyasi malika joylashish uchun xavfsiz bo'lishini tekshiradi. `placeQueens` funksiyasi malika joylashish uchun usullarni topadi.
