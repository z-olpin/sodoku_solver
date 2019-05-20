import math

testboard = [None, None, None, 6, 1, 9, 7, 5, 3,
             None, None, None, None, None, None, None, None, None,
             6, None, None, None, 8, 4, 1, 9, 2,
             1, 3, 9, 4, 2, 7, 8, 6, 5,
             None, None, None, 9, 6, 1, 2, 3, 7,
             7, 6, 2, 8, 3, 5, 4, 1, 9,
             8, None, None, None, 7, 6, 9, 2, 1,
             2, 7, 5, 1, 9, 8, None, None, None,
             None, None, None, None, None, None, None, None, None]

board_list = []

def get_neighbors(i):
    row = i // 9
    col = i % 9
    square_i = ((row % 3) * 3) + (i % 3)
    square_t_targets = {0: 10, 1: 9, 2: 8, 3: 1, 4: 0, 5: -1, 6: -8, 7: -9, 8: -10}
    target_i = square_t_targets[square_i] + i
    square_neighbors = [target_i + v for v in square_t_targets.values()]
    col_neighbors = list(map(lambda x: x + col, [0, 9, 18, 27, 36, 45, 54, 63, 72]))
    row_neighbors = list(range(i - col, i - col + 9))
    all_neighbors = (row_neighbors + col_neighbors + square_neighbors)
    return all_neighbors


def solve_board(board):
    for ind, v in enumerate(board):
        if v != None:
            continue
        neighbors = get_neighbors(ind)
        possible_nums = list({1, 2, 3, 4, 5, 6, 7, 8, 9} - set([board[e] for e in (neighbors)]))

        for n in possible_nums:
            try_board = board.copy()
            del try_board[ind]
            try_board.insert(ind, n)
            result = solve_board(try_board)
            if result != None:
                return result
        return None
    return board


print(solve_board(testboard))
