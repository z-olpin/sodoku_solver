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


def solve_board(board, last_tried=0, ind=None):
    if None not in board:
        print_board(board)
        return
    else:
        if not ind:
            ind = board.index(None)
        col_num, col_neighbors = get_col_neighbors(ind)
        row_neighbors = get_row_neighbors(ind, col_num)
        square_neighbors = get_square_neighbors(ind)
        possible_nums = list({1, 2, 3, 4, 5, 6, 7, 8, 9} - set([board[e] for e in (row_neighbors + col_neighbors + square_neighbors)]))
        possible_nums.sort()

        if last_tried in possible_nums:
            del possible_nums[:possible_nums.index(last_tried)+1]

        if len(possible_nums) == 0:
            if board_list[-1][0] is False:
                last_tried = board_list[-1][2]
                ind = board_list[-1][3]
                board = board_list[-1][1]
                board_list.pop()
            solve_board(board, last_tried, ind)

        if len(possible_nums) == 1:
            del board[ind]
            board.insert(ind, possible_nums[0])
            board_list.append((board, possible_nums[0], ind))

        if len(possible_nums) > 1:
            del board[ind]
            board.insert(ind, possible_nums[0])
            board_list.append((board, possible_nums[0], ind))
        solve_board(board, possible_nums[0])


solve_board(testboard)
