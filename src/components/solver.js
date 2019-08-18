const getNeighbors = idx => {
  const row = Math.floor(idx / 9);
  const col = idx % 9;
  const square_idx = (row % 3) * 3 + (idx % 3);
  const square_t_targets = {
    0: 10,
    1: 9,
    2: 8,
    3: 1,
    4: 0,
    5: -1,
    6: -8,
    7: -9,
    8: -10
  };
  const target_idx = square_t_targets[square_idx] + idx;
  const square_neighbors = [];
  for (let i = 0; i < 9; i++) {
    square_neighbors.push(target_idx + square_t_targets[i]);
  }
  const col_neighbors = [0, 9, 18, 27, 36, 45, 54, 63, 72].map(n => n + col);
  const row_neighbors = [...Array(9).keys()].map(n => n + idx - col);
  const all_neighbors = row_neighbors.concat(col_neighbors, square_neighbors);
  return all_neighbors;
};

const solveBoard = b => {
  const difference = (setA, setB) => {
    const _difference = new Set(setA);
    for (let e of setB) {
      _difference.delete(e);
    }
    return _difference;
  };

  for (let i = 0; i < b.length; i++) {
    if (b[i]) {
      continue;
    }
    const neighbors = getNeighbors(i);
    const fullSet = new Set([...Array(9).keys()].map(n => n + 1));
    const currNeighbors = [];
    for (let j = 0; j < neighbors.length; j++) {
      currNeighbors.push(b[neighbors[j]]);
    }
    const neighborSet = new Set(currNeighbors);
    const possible_nums = difference(fullSet, neighborSet);
    for (let e of possible_nums) {
      const try_board = [...b];
      try_board[i] = e;
      const result = solveBoard(try_board);
      if (result) return result;
    }
    return;
  }
  return b;
};

module.exports = {
  getNeighbors,
  solveBoard
};
