/*
 * Given a sorted array nums, remove the duplicates in-place such that each
 * element appear only once and return the new length.
 * 
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 * 
 * Example 1:
 * Given nums = [1,1,2],
 * 
 * Your function should return length = 2, with the first two elements of nums
 * being 1 and 2 respectively.
 * 
 * It doesn't matter what you leave beyond the returned length.
 * 
 * Example 2:
 * Given nums = [0,0,1,1,1,2,2,3,3,4],
 * 
 * Your function should return length = 5, with the first five elements of nums
 * being modified to 0, 1, 2, 3, and 4 respectively.
 * 
 * It doesn't matter what values are set beyond the returned length.
 * 
 * 
 * Clarification:
 * 
 * Confused why the returned value is an integer but your answer is an array?
 * 
 * Note that the input array is passed in by reference, which means
 * modification to the input array will be known to the caller as well.
 * 
 * Internally you can think of this:
 * 
 * 
 * // nums is passed in by reference. (i.e., without making a copy)
 * int len = removeDuplicates(nums);
 * 
 * // any modification to nums in your function would be known by the caller.
 * // using the length returned by your function, it prints the first len
 * elements.
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 * 
 */


 /**
 * @param {number[]} nums
 * @return {number}
 */
// a faster pointer and a slower pointer 
 var removeDuplicates = function(nums) {
     const size = nums.length;
     let slowP = 0;
     for (let fastP = 0; fastP < size; fastP++){
         if (nums[fastP] !== num[slowP]) {
             slowP++;
             num[slowP] = num[fastP]
         }
     }

     return slowP++;
 }





 /*
 merge sort 
 */
function merge(nums1, nums2) {
    let ret = [];
    while(num1.length || nums2.length) {
        if (num1.length === 0) {
            ret.push(num2.shift());
            continue;
        }
        if (num2.length === 0) {
            ret.push(num1.shift());
            continue;
        }
        const a = nums1[0];
        const b = nums2[0];
        if(a > b) { 
            ret.push(num2.shift());
        } else {
            ret.push(num1.shift());
        }
    }

    return ret;
}

/*
Array.shift()
*/

var arr1 = [1, 2, 3];
var firstEle = arr1.shift();
console.log(arr1);











 /* Merge Sorted Array
 Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

 */

 // current is a pointer 
 var merge = function (nums1, m, nums2, n) {
     let current = nums1.length - 1; // set the pointer at the last ele of the nums1 array

     while (current >= 0) {
         if (n == 0) {
             return;
         }

         if (m < 0) {
             nums1[current--] = nums2[--n];
             continue;
         }
         if (n < 0) {
             nums1[current--] = nums1[--m];
             continue;
         }

         if (nums1[m - 1] > nums2[n - 1]) {
             nums1[current--] = nums2[--m];
         } else {
             nums1[current--] = nums2[--n];
         }
     }
      
 };