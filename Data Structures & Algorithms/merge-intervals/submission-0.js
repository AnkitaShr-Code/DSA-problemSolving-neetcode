class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        const result = [];
        result.push(intervals[0]);

        for(let i =1; i<intervals.length; i++) {
            if(intervals[i][0] <= result[result.length - 1][1]) {
                result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
            } else {
                result.push(intervals[i]);
            }
        }
        return result;
    }
}
