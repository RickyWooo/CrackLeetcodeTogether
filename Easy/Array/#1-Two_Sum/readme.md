### Question

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

```json
Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

***

### Two For-loop

Hello, Leetcode! This may be the first step to Leetcode, do not be scared and crack it together.

The first idea flash through our mind may be creating two arrays, implement nested for-loops and iterate it until you find the sum of two intergers, then we can try to get the indices from the values.

```json
Given nums = [2, 7, 11, 15], target = 9,

The possible combination as following:

[2,7],[2,11],[2,15]
[7,11],[7,15]
[11,15]
```

Consequently, the outside loop will iterate from 2, 7, 11,the inside loop will iterate from the next number to the end of array (7,11,15).

**Note that the final value will not be iterated in outside loop(since it had been already add)**

### 

Since the Two for-loop method will take O(n<sup>2</sup>)

the method with better Time Complexity is HashMap, store key and value into a map object

**i.e. custom a map looks like number<->index. number: the value of arrey, index: the index of array**

```json
{ 
  "2":0,
}

"
Is target minus number is well defined in the map?
yes ==> then we found the answer
no ==> store the value and index into the map
then iterate to next number...
like the following procedure

is (9-2) in the map? 
no ==> store 2 and 0 into the map
interate to the next nubmer :7

Is (9-7) in the map? exist? not as undefined?
yes ==> the value is 0, not as undefined
If so, return the index of map[9-7] and 7.
If not, store 7 in the map. 
"

```

Inside a for-loop, usually we set/store the value and index in the map at first,
So that we have 3 different kinds of number:

1. target: the given result, should be the sum of 2 separate numbers in the array
2. check: the number which may be summand, if this number is not relative with current map, store it in the map
3. store:  the number is stored in the custom map

We can get the target = check + store as conclusion.
if the given taget minus check appears in the map, then we find the combination.
Or we store the "check" in the map as a "store" number.