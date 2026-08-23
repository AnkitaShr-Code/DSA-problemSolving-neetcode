class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack = []
        ngeMap = {}
        n = len(nums2)

        stack.append(nums2[n-1])
        ngeMap[nums2[n-1]] = -1

        for i in range(n-2, -1, -1):
            top = stack[len(stack) -1]
            if nums2[i] < top:
                ngeMap[nums2[i]] = top
            else:
                while len(stack) > 0:
                    if stack[len(stack) - 1] < nums2[i]:
                        stack.pop()
                    else:
                        ngeMap[nums2[i]] = stack[len(stack) - 1]
                        break;
                if len(stack) == 0:
                    ngeMap[nums2[i]] = -1
            stack.append(nums2[i])
        
        ans = []
        for i in range(len(nums1)):
            ans.append(ngeMap[nums1[i]])
        return ans