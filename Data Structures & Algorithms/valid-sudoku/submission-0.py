class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        row_sets = [set() for _ in range(9)]
        col_sets = [set() for _ in range(9)]
        grid_sets = [[set() for _ in range(3)] for _ in range(3)]

        for row in range(9):
            for col in range(9):
                num = board[row][col]
                if num == 0 or num == ".":
                    continue

                if num in row_sets[row]:
                    return False
                if num in col_sets[col]:
                    return False
                if num in grid_sets[row // 3][col // 3]:
                    return False

                row_sets[row].add(num)
                col_sets[col].add(num)
                grid_sets[row // 3][col // 3].add(num)

        return True        