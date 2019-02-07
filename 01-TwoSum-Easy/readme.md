#Question

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

***

#How To Resolve

1. Two For-loop 
2. HashMap

### Two For-loop
The first thought bring to your mind may be creating 2 arrays, and implement 2 for-loops, iterate it until you find the sum of two interger, then get the index from the value.

Take [2,7,11,15] as an example:
Target number is 9

The possible combination as following:

2->7  7->11 11->15
2->11 7->15
2->15

since 2+7=9 then return the [0,1]
