### Question

Given a 32-bit signed integer, reverse digits of an integer.

```json
Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21
```

**Note:**
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

***

### How To Resolve
1. Straight forward solution

### [Method]

First of all, We check the number is positive or negative
Then we remove the sign of number and get absolute value
Declare a new string and append the each character from the tail of the number
After appending to the new string, remove the last character of the number 
Iterate it until the number is less than 10
 