import random

def get_col_neighbors(ind):
    row_num = ind % 9
    col_neighbors = list(map(lambda x: x + row_num, [0, 9, 18, 27, 36, 45, 54, 63, 72]))
    col_neighbors.remove(ind)
    return col_neighbors

def get_row_neighbors(ind, col_num):
    row_num = ind // 9
    row_neighbors = list(range(ind - col_num, ind - col_num + 9))
    row_neighbors.remove(ind)
    return row_neighbors

print(get_col_neighbors(58))

board = [random.randint(1,10) for _ in range(81)]

print(board)