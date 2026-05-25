class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if (nums.length <= 1) return nums;

        let mid = Math.floor(nums.length / 2);
        let left = this.sortArray(nums.slice(0, mid));
        let right = this.sortArray(nums.slice(mid));
        return merge(left, right);
    }
}

function merge (left, right) {
    let i = 0, j = 0;
    let res = [];
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]){
            res.push( left[i] );
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j)];
}
