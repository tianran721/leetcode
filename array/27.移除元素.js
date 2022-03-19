import pic from './pic/img.png'
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = 0;
    for(const num of nums) {
        if(num != val) {
            nums[len] = num;
            len++;
        }
    }
    return len;
};
