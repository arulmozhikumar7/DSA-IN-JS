function findMaxAverage(nums, k) {
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }
  maxSum = currentSum;
  for (i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum / k;
}

const nums = [1, 12, -5, -6, 50, 3];

console.log(findMaxAverage(nums, 4));
