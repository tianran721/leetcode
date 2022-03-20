/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // t = 7
    let len = nums.length - 1;
    if(target > nums[len]){
        return len + 1;
    }else if(target < nums[0]){
        return 0
    }
    // [1,3,5,6] 4
    let res = 0;
    for(let i = 0; i <= len; i++){
        if(target === nums[i]){
            return i;
        }else{
            if(nums[i] < target){
                res = i;
            }
        }
    }
    return res + 1;

};
