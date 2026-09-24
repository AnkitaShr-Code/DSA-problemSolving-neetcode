class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let m = grid.length;
        let n = grid[0].length;

        let queue = [];

        let maxMin = 0;

        for(let i =0; i< m; i++) {
            for(let j =0; j<n; j++) {
                if(grid[i][j] == 2) {
                    queue.push([i, j, 0]);
                }
            }
        }

        while(queue.length > 0) {
            let [x, y, level] = queue.shift();
            if(x > 0 && grid[x-1][y] == 1) {
                grid[x-1][y] = 2;
                queue.push([x-1, y, level + 1]);
            }
            if(x < m-1 && grid[x+1][y] == 1) {
                grid[x+1][y] = 2;
                queue.push([x+1, y, level + 1]);
            }
            if(y > 0 && grid[x][y - 1] == 1) {
                grid[x][y -1] = 2;
                queue.push([x, y-1, level + 1]);
            }
            if(y < n-1 && grid[x][y + 1] == 1) {
                grid[x][y + 1] = 2;
                queue.push([x, y + 1, level + 1]);
            }
            maxMin = Math.max(maxMin, level);
        }

        for(let i =0; i< m; i++) {
            for(let j =0; j< n; j++ ){
                if(grid[i][j] == 1) {
                    return -1;
                }
            }
        }

        return maxMin;
    }

}
