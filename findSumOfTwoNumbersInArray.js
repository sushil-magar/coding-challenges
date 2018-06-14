function twoSum(nums, target) {
  let result = [];
  
  let map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], i);
  }

  console.log(map)
  
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      
      if (map.has(complement) && map.get(complement) !== i && !result.includes(i)) {
          result.push(map.get(complement), i);
      }
  }
  
  return result;
};

const nums = [3,2,4];
const target = 6;

console.log(twoSum(nums, target));

