const getNeighbors = (idx) => {
    let row = Math.floor(idx/9)
    let col = idx % 9
    let square_idx = ((row % 3) * 3) + (idx % 3)
    let square_t_targets = {0: 10, 1: 9, 2: 8, 3: 1, 4: 0, 5: -1, 6: -8, 7: -9, 8: -10}
    let target_idx = square_t_targets[square_idx] + idx
    let square_neighbors = []
    for (let i=0; i<9; i++) {
        square_neighbors.push(target_idx + square_t_targets[i])
    }
    let col_neighbors = [0, 9, 18, 27, 36, 45, 54, 63, 72].map(n => n + col) 
    let row_neighbors = [...Array(9).keys()].map(n => n + idx-col)
    let all_neighbors = row_neighbors.concat(col_neighbors, square_neighbors)
    return all_neighbors
  }

const solveBoard = (b) => {
    let difference = (setA, setB) => {
        let _difference = new Set(setA)
        for (let e of setB) {
            _difference.delete(e)
        }
        return _difference
    }
    for (let i=0; i < b.length; i++) {
        if (b[i]) {
            continue
        } 
        let neighbors = getNeighbors(i)
        let fullSet = new Set([...Array(9).keys()].map(n => n + 1))
        let currNeighbors = []
        for (let j=0; j< neighbors.length; j++) {
            currNeighbors.push(b[neighbors[j]])
        }
        let neighborSet = new Set(currNeighbors)
        let possible_nums = difference(fullSet, neighborSet)
        for (let e of possible_nums) {
            let try_board = [...b]
            try_board[i] = setTimeout(()=> {
            let result = solveBoard(try_board)
        }, 2000)
            if (result) return result
            
        }
        return
    }
    return b
  }
  
module.exports = {
    getNeighbors: getNeighbors,
    solveBoard: solveBoard
}