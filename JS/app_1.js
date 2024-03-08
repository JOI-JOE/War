/*
1 <= nums.length <= 104
-231 <= nums[i] <= 231 -1
*/

const moveZeoes = function (nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
};

console.log(moveZeoes([0, 1, 0, 3, 12])); // [1,2,12,0,0]
console.log(moveZeoes([0])); // [0]
