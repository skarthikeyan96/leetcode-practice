# Explanation

1. We first create two pointers for source and the target string.
2. Initalize the two pointers with 0.
3. Create a variable called `count` and initalise to 0.
4. Now loop through both strings till we reach the end.
5. If `source[leftPointer] === target[rightPointer]`
   1. Increase both `Left and Right Pointer`
   2. Increase `count`. The reason is because by the end when we match `count` with length of the `source string` and if it is same we have checked all the charachters in the `source string with target string`.
6. Else
   1. Increase `Right pointer`.
7. Now when we come out of the loop , check the `count` with `length of the source string`. If they are equal then source is a subsequence of target else it is not.
