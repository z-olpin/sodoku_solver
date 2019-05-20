import numpy as np
import math

testboard = [None, None, None, None, None, None, 7, 5, 3,
             3, 9, 1, 7, 5, 2, 6, 8, 4,
             6, None, None, None, 8, 4, 1, 9, 2,
             1, 3, 9, 4, 2, 7, 8, 6, 5,
             None, None, None, 9, 6, 1, 2, 3, 7,
             7, 6, 2, 8, 3, 5, 4, 1, 9,
             8, 4, 3, 5, 7, 6, 9, 2, 1,
             2, 7, 5, 1, 9, 8, None, None, None,
             9, 1, 6, None, None, None, None, None, None]

board_list = []
possible_board = {}


def print_board(board):
    board = np.array(board).reshape((9, 9))
    for row in board:
        print(*row)


# def get_square_neighbors(i):
#     col_num = i % 9
#     placer = (float(col_num) / 3.0) - float(math.floor(col_num / 3.0))
#     if 0.01 > (placer) > -0.01:
#         lcr = 'l'
#     elif 0.34 > (placer) > 0.32:
#         lcr = 'c'
#     elif 0.67 > (placer) > 0.65:
#         lcr = 'r'

#     transposed_inds = list(np.concatenate(np.transpose(np.arange(81).reshape((9, 9)))))
#     t_ind = transposed_inds.index(i)
#     t_col = t_ind % 9
#     t_placer = (float(t_col) / 3.0) - float(math.floor(t_col / 3.0))

#     if 0.01 > (t_placer) > -0.01:
#         trans_lcr = 'l'
#     elif 0.34 > (t_placer) > 0.32:
#         trans_lcr = 'c'
#     elif 0.67 > (t_placer) > 0.65:
#         trans_lcr = 'r'
#     lcr += trans_lcr

#     if lcr == 'll':
#         target = i + 10
#     elif lcr == 'lc':
#         target = i + 1
#     elif lcr == 'lr':
#         target = i - 8
#     elif lcr == 'cl':
#         target = i + 9
#     elif lcr == 'cr':
#         target = i - 9
#     elif lcr == 'rr':
#         target = i - 10
#     elif lcr == 'rc':
#         target = i - 1
#     elif lcr == 'rl':
#         target = i + 8
#     elif lcr == 'cc':
#         target = i

#     return [target + e for e in [10, -10, 9, -9, 8, -8, 1, -1, 0]]
def get_square_neighbors(i, board)
    row = i // 9
    col = i % 9
    square_i =  ((row % 3) * 3) + (i % 3)
    square_t_targets = {0: 10, 1: 9, 2: 8, 3: 1, 4: 0, 5: -1, 6: -8, 7: -9, 8: -10}
    target_i = square_t_targets[square_i] + i
    square_neighbors = [target_i + v for v in square_t_targets.values()]
    col_neighbors = list(map(lambda x: x + col, [0, 9, 18, 27, 36, 45, 54, 63, 72]))
    row_neighbors = list(range(i - col_num, i - col_num + 9))
    neighbors = list({1, 2, 3, 4, 5, 6, 7, 8, 9} - set([board[e] for e in (row_neighbors + col_neighbors + square_neighbors)]))    

def get_col_neighbors(i):
    col_num = i % 9
    col_neighbors = list(map(lambda x: x + col_num,
                             [0, 9, 18, 27, 36, 45, 54, 63, 72]))
    return (col_num, col_neighbors)


def get_row_neighbors(i, col_num):
    row_neighbors = list(range(i - col_num, i - col_num + 9))
    return row_neighbors

def all_possible_nums(i, board):
    col_num, col_neighbors = get_col_neighbors(i)
    row_neighbors = get_row_neighbors(i, col_num)
    square_neighbors = get_square_neighbors(i)
    possible_nums = list({1, 2, 3, 4, 5, 6, 7, 8, 9} - set([board[e] for e in (row_neighbors + col_neighbors + square_neighbors)]))
    return possible_nums

def make_possibles(board):
    possible_board = []
    for i in range(81):
        possible_board.append(all_possible_nums(i, board))
    return possible_board

def solve_board()


solve_board(testboard)