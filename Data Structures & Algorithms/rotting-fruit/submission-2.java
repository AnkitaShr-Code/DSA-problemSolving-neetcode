class Solution {
    public int orangesRotting(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        Queue<int[]> queue = new LinkedList<>();
        int maxMin = 0;

        for(int i =0; i<m; i++) {
            for(int j =0; j<n; j++) {
                if(grid[i][j] == 2) {
                    queue.add(new int[]{i, j, 0});
                }
            }
        }

        while(!queue.isEmpty()) {
            int[] curr = queue.poll();
            int x = curr[0], y = curr[1], level = curr[2];

            if(x > 0 && grid[x-1][y] == 1) {
                grid[x-1][y] = 2;
                queue.add(new int[]{x-1, y, level+1});
            }

            if(x < m-1 && grid[x+1][y] == 1) {
                grid[x+1][y] = 2;
                queue.add(new int[]{x+1, y, level+1});
            }

            if(y > 0 && grid[x][y-1] == 1) {
                grid[x][y-1] = 2;
                queue.add(new int[]{x, y-1, level+1});
            }

            if(y < n-1 && grid[x][y+1] == 1) {
                grid[x][y+1] = 2;
                queue.add(new int[]{x, y+1, level+1});
            }
            maxMin = Math.max(maxMin, level);
        }

        for(int i =0; i< m; i++) {
            for(int j =0; j< n; j++) {
                if(grid[i][j] == 1) {
                    return -1;
                }
            }
        }

        return maxMin;
        
    }
}
