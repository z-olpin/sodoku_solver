import numpy as np
import math

testboard = [None, None, None, 6, 1, 9, 7, 5, 3,
             3, 9, 1, 7, 5, 2, 6, 8, 4,
             6, None, None, None, 8, 4, 1, 9, 2,
             1, 3, 9, 4, 2, 7, 8, 6, 5,
             None, None, None, 9, 6, 1, 2, 3, 7,
             7, 6, 2, 8, 3, 5, 4, 1, 9,
             8, 4, 3, 5, 7, 6, 9, 2, 1,
             2, 7, 5, 1, 9, 8, None, None, None,
             9, 1, 6, 2, 4, None, None, None, None]

board_list = []


def print_board(board):
    board = np.array(board).reshape((9, 9))
    for row in board:
        print(*row)


def get_square_neighbors(ind):
    col_num = ind % 9
    placer = (float(col_num) / 3.0) - float(math.floor(col_num / 3.0))
    if 0.01 > (placer) > -0.01:
        lcr = 'l'
    elif 0.34 > (placer) > 0.32:
        lcr = 'c'
    elif 0.67 > (placer) > 0.65:
        lcr = 'r'

    transposed_inds = list(np.concatenate(np.transpose(np.arange(81).reshape((9, 9)))))
    t_ind = transposed_inds.index(ind)
    t_col = t_ind % 9
    t_placer = (float(t_col) / 3.0) - float(math.floor(t_col / 3.0))

    if 0.01 > (t_placer) > -0.01:
        trans_lcr = 'l'
    elif 0.34 > (t_placer) > 0.32:
        trans_lcr = 'c'
    elif 0.67 > (t_placer) > 0.65:
        trans_lcr = 'r'
    lcr += trans_lcr

    if lcr == 'll':
        target = ind + 10
    elif lcr == 'lc':
        target = ind + 1
    elif lcr == 'lr':
        target = ind - 8
    elif lcr == 'cl':
        target = ind + 9
    elif lcr == 'cr':
        target = ind - 9
    elif lcr == 'rr':
        target = ind - 10
    elif lcr == 'rc':
        target = ind - 1
    elif lcr == 'rl':
        target = ind + 8
    elif lcr == 'cc':
        target = ind
    return [target-10, target-9, target-8, target-1,
            target+1, target+8, target+9, target+10]


def get_col_neighbors(ind):
    col_num = ind % 9
    col_neighbors = list(map(lambda x: x + col_num,
                             [0, 9, 18, 27, 36, 45, 54, 63, 72]))
    col_neighbors.remove(ind)
    return (col_num, col_neighbors)


def get_row_neighbors(ind, col_num):
    row_neighbors = list(range(ind - col_num, ind - col_num + 9))
    row_neighbors.remove(ind)
    return row_neighbors


def solve_board(board):
    for ind, v in enumerate(board):
        if v != None:
            continue
        col_num, col_neighbors = get_col_neighbors(ind)
        row_neighbors = get_row_neighbors(ind, col_num)
        square_neighbors = get_square_neighbors(ind)
        possible_nums = list({1, 2, 3, 4, 5, 6, 7, 8, 9} - set([board[e] for e in (row_neighbors + col_neighbors + square_neighbors)]))

        for n in possible_nums:
            try_board = board.copy()
            del try_board[ind]
            try_board.insert(ind, n)
            result = solve_board(try_board)
            if result != None:
                return result
        return None
    return board


print_board(solve_board(testboard))
