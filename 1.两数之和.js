/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        // nums[i] , i
        // 2.确定要找的result
        if(map.get())

            // 1.第一次
            map.set(nums[i],i)
    }
};

//
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i < nums.length;i++){
        // 0 -> 7
        // 1 -> 2
        let result = target - nums[i]
        if(map.has(result)){
            return [map.get(result),i]
        }
        // 1.第一次 2 0
        map.set(nums[i],i)
    }
};
