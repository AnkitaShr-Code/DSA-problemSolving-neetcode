class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        x = 0
        while x < len(strs[0]):
            ch = strs[0][x]
            for i in range(1, len(strs)):
                if x == len(strs[i]) or ch != strs[i][x]:
                    return strs[0][0:x]

            x += 1

        return strs[0]
        