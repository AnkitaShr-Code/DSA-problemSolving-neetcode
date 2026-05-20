class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        if not matrix or not matrix[0]:
            return

        rowLength, colLength = len(matrix), len(matrix[0])

        #Check if first row has zero
        first_row_has_zero = False

        for c in range(colLength):
            if matrix[0][c] == 0:
                first_row_has_zero = True
                break

        # Check if first column has zeroes
        first_col_has_zero = False
        for r in range(rowLength):
            if matrix[r][0] == 0:
                first_col_has_zero = True
                break

        # Use the first row and column to mark if any 
        # element in the submatrix is zero
        for r in range(1, rowLength):
            for c in range(1, colLength):
                if matrix[r][c] == 0:
                    matrix[0][c] = 0
                    matrix[r][0] = 0

        # Check the first row col and update the 
        # element in submatrix to zero
        for r in range(1, rowLength):
            for c in range(1, colLength):
                if matrix[0][c] == 0 or matrix[r][0] == 0:
                    matrix[r][c] = 0

        # update the first row if it has zero
        if first_row_has_zero:
            for c in range(colLength):
                matrix[0][c] = 0

        # updtae the first col if it had zero
        if first_col_has_zero:
            for r in range(rowLength):
                matrix[r][0] = 0
                
        
        