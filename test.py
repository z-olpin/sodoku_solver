class Board_Stack:
    
    def __init__(self):
        self.stack = []

    def push_board(self, board):
        self.stack.append(board)

    def pop_board(self):
        self.stack.pop()


class Board:

    def __init__(self, board):
        self.board = board

    def get_possibilities(self):
        possibilities = []
        for i in range(81):
            row = i // 9
            col = i % 9
            square_i = ((row % 3) * 3) + (i % 3)
            square_t_targets = {0: 10, 1: 9, 2: 8, 3: 1, 4: 0, 5: -1, 6: -8, 7: -9, 8: -10}
            target_i = square_t_targets[square_i] + i
            square_neighbors = [target_i + v for v in square_t_targets.values()]
            col_neighbors = list(map(lambda x: x + col, [0, 9, 18, 27, 36, 45, 54, 63, 72]))
            row_neighbors = list(range(i - col, i - col + 9))
            all_neighbors = (row_neighbors + col_neighbors + square_neighbors)
            possibilities.append(list({1, 2, 3, 4, 5, 6, 7, 8, 9} - set([self.board[e] for e in all_neighbors])))
        return possibilities
