class Solution {
    public void setZeroes(int[][] matrix) {
        if (matrix == null || matrix.length ==0 || matrix[0].length ==0){
            return;
        }

        int rowLength = matrix.length;
        int colLength = matrix[0].length;

        boolean firstRowHasZero = false;
        for(int i =0; i< colLength; i++) {
            if(matrix[0][i] == 0) {
                firstRowHasZero = true;
                break;
            }
        }

        boolean firstColHasZero = false;
        for(int i =0; i< rowLength; i++) {
            if(matrix[i][0] == 0) {
                firstColHasZero = true;
                break;
            }
        }


        for(int r=1; r < rowLength; r++) {
            for(int c=1; c<colLength; c++) {
                if(matrix[r][c] == 0) {
                    matrix[0][c] = 0;
                    matrix[r][0] = 0;
                }
            }
        }

        for(int r=1; r < rowLength; r++) {
            for(int c=1; c<colLength; c++) {
                if(matrix[0][c] == 0 || matrix[r][0] == 0) {
                    matrix[r][c] = 0;
                }
            }
        }

        if(firstRowHasZero) {
            for(int i=0; i<colLength; i++) {
                matrix[0][i]=0;
            }
        }

        if(firstColHasZero) {
            for(int i=0; i<rowLength; i++) {
                matrix[i][0]=0;
            }
        }
    }
}
