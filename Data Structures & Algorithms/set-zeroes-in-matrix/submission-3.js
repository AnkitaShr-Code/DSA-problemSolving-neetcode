class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        if(!matrix || !matrix.length || matrix[0].length < 0)
            return

        let rowLength = matrix.length;
        let colLength = matrix[0].length;

        let firstRowHasZero = false;
        for(let i=0; i < colLength; i++){
            if(matrix[0][i] == 0){
                firstRowHasZero = true;
                break;
            }
        }

        let firstColHasZero = false;
        for(let i=0; i<rowLength; i++){
            if(matrix[i][0] == 0){
                firstColHasZero = true;
                break;
            }
        }

        for(let r =1; r< rowLength; r++){
            for(let c=1; c< colLength; c++) {
                if(matrix[r][c] == 0) {
                    matrix[r][0] = 0;
                    matrix[0][c] = 0;
                }
            }
        }

        for(let r =1; r< rowLength; r++){
            for(let c=1; c< colLength; c++) {
                if(matrix[0][c] == 0 || matrix[r][0] == 0) {
                    matrix[r][c] = 0;
                }
            }
        }

        if(firstRowHasZero) {
            for(let i=0; i< colLength; i++) {
                matrix[0][i] = 0;
            }
        }

        if(firstColHasZero) {
            for(let i=0; i< rowLength; i++) {
                matrix[i][0] = 0;
            }
        }

    }
}
