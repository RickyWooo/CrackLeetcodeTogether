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

Consequently, the outside loop will iterate from 2, 7, 11
the inside loop will iterate 7,11,15
from the next number to the end of array.

**Note that the final value will not be iterated in outside loop(since it had been already add)**

### Hash Table

Since the Two for-loop method will take O(n<sup>2</sup>)

HashMap with better Time Complexity, store key and value into a map object

```json
{ 
  "value1":0,
  "value2":1
}


Is target minus number is well defined in the map?
yes 
==> then we find the result
no
 ==> store the value and index into the map
then iterate to next number...until we find the result



is (9-2) in the map? 
no 
==> store 2 as key and value as 0 into the map
==> iterate to the next nubmer 7


{ 
  "2":0
}


Is (9-7) in the map? 
yes 
==> the value is 0, not as undefined
==> return the index of map[9-7] and index of 7 as results.

no, 9-7 is not in the map
==> store (9-7) as key and the corresponding index into the map
==> iterate to the next number


```