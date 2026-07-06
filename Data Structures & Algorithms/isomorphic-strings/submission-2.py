class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        mapStoT = dict()
        mapTtoS = dict()

        for i in range(len(s)):
            if s[i] not in mapStoT and t[i] not in mapTtoS:
                mapStoT[s[i]] = t[i]
                mapTtoS[t[i]] = s[i]
            elif mapStoT.get(s[i]) != t[i] or mapTtoS.get(t[i]) != s[i]:
                return False

        return True

        