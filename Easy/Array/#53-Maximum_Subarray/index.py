nums = [-2,1,-3,4,-1,2,1,-5,4]
#print(nums[1:len(nums)])
for (i,val) in enumerate(nums):
    for (j,val2) in enumerate(nums[val:len(nums)]):
        print(j)
    print("---")