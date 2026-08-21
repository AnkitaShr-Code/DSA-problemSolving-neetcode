class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let stack = [];
        let ngeMap = {};
        let n = nums2.length -1;
        stack.push(nums2[n]);
        ngeMap[nums2[n]] = -1;

        for(let i= n-1; i>=0; i--) {
            if(stack[stack.length -1] > nums2[i]) {
                ngeMap[nums2[i]] = stack[stack.length -1];
            } else {
                while(stack.length) {
                    if(stack[stack.length - 1] < nums2[i]) {
                        stack.pop();
                    } else {
                        ngeMap[nums2[i]] = stack[stack.length -1];
                        break;
                    }
                }
                if(!stack.length) {
                    ngeMap[nums2[i]] = -1;
                }
            }
            stack.push(nums2[i]);
        }

        let result = [];
        for(let i =0; i<nums1.length; i++) {
            result.push(ngeMap[nums1[i]]);
        }
        return result;
    }
}
