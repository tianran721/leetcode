//选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。
// 每次找最小的
var sortArray = function(nums) {
    let len = nums.length
    for(let i = 0; i < len; i++){
        // 假设最小索引为0
        let minIdx = i;
        for(let j = i + 1; j < len; j++){
            if(nums[j] < nums[minIdx]){
                minIdx = j
            }
        }
        exchange(nums,i,minIdx)
        function exchange(nums,i,minIdx){
            let temp = nums[i]
            // 本轮最小值
            nums[i] = nums[minIdx]
            nums[minIdx] = temp
        }
    }
    return nums
};
