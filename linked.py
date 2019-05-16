import numpy as np
import math

board_list = [] #(board, last_tried)
testboard = [None, None, None, 6, 1, 9, 7, 5, 3,
             3, 9, 1, 7, 5, 2, 6, 8, 4,
             6, None, None, None, 8, 4, 1, 9, 2,
             1, 3, 9, 4, 2, 7, 8, 6, 5,
             None, None, None, 9, 6, 1, 2, 3, 7,
             7, 6, 2, 8, 3, 5, 4, 1, 9,
             8, 4, 3, 5, 7, 6, 9, 2, 1,
             2, 7, 5, 1, 9, 8, None, None, None,
             9, 1, 6, 2, 4, None, None, None, None]

def get_square_neighbors(ind):

    col_num = ind % 9
    #(left=.0, center=.3, right-.6)
    if 0.01 > ((float(col_num) / 3.0) - float(math.floor(col_num / 3.0))) > -0.01:
        lcr = 'l'
    elif 0.34 > ((float(col_num) / 3.0) - float(math.floor(col_num / 3.0))) > 0.32:
        lcr = 'c'
    elif 0.67 > ((float(col_num) / 3.0) - float(math.floor(col_num / 3.0))) > 0.65:
        lcr = 'r'

    trans_ind_map = list(np.concatenate(np.transpose(np.arange(81).reshape((9, 9)))))
    trans_ind = trans_ind_map.index(ind)
    trans_col = trans_ind % 9
    #(left=.0, center=.3, right-.6)
    if 0.01 > ((float(trans_col) / 3.0) - float(math.floor(trans_col / 3.0))) > -0.01:
        trans_lcr = 'l'
    elif 0.34 > ((float(trans_col) / 3.0) - float(math.floor(trans_col / 3.0))) > 0.32:
        trans_lcr = 'c'
    elif 0.67 > ((float(trans_col) / 3.0) - float(math.floor(trans_col / 3.0))) > 0.65:
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
    square_neighbors = [target-10, target-9, target-8, target-1, target+1, target+8, target+9, target+10]
    return square_neighbors

def get_col_neighbors(ind):
    col_num = ind % 9
    col_neighbors = list(map(lambda x: x + col_num, [0, 9, 18, 27, 36, 45, 54, 63, 72]))
    col_neighbors.remove(ind)
    return (col_num, col_neighbors)

def get_row_neighbors(ind, col_num):
    row_neighbors = list(range(ind - col_num, ind - col_num + 9))
    row_neighbors.remove(ind)
    return row_neighbors

def solve_board(board,last_tried=0, ind=None):
    if None not in board:
        print(board)
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
            del possible_nums[:possible_nums.index(last_tried)]
            possible_nums.remove(last_tried)

        if len(possible_nums) == 0:
            if board_list[-1][0] == False:
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