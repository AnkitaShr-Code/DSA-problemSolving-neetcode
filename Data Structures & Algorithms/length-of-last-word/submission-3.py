class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        n = len(s) -1
        while n >= 0:
            if s[n] != " ":
                break
            n -= 1

        count =0
        while s[n] != " " and n >= 0:
            count += 1
            n -= 1
        
        return count