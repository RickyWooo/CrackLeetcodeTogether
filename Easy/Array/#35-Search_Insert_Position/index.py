class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        for (index,val) in enumerate(nums):
            if target<nums[0]:
                return 0
            if target>nums[len(nums)-1]:
                return len(nums)
            if target>val and target<nums[index+1]:
                return index+1
            elif target==val:
                return index
            
                