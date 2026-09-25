class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for(let i =0; i<strs.length; i++) {
            let freqArr = Array(26).fill(0);

            let str = strs[i];
            for(let j =0; j<str.length; j++) {
                let idx = str[j].charCodeAt() - 'a'.charCodeAt();
                ++freqArr[idx];
            }

            let key = '';
            for(let k =0; k<freqArr.length; k++) {
                key += "#" + freqArr[k];
            }
            
            if(!map[key]) {
                map[key] = [strs[i]];
            } else {
                map[key].push(strs[i]);
            }
        }
        return [...Object.values(map)];
    }
}
