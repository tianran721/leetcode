// 在平均状况下，排序 n 个项目要 Ο(nlogn) 次比较。在最坏状况下则需要 Ο(n2) 次比较
// 快速排序使用分治法（Divide and conquer）策略来把一个串行（list）分为两个子串行（sub-lists）。
// 步骤:
// 从数列中挑出一个元素，称为 "基准"（pivot）;
//
// 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
//
// 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*var sortArray = function(nums,low = 0,high = nums.length - 1) {
    if(!nums.length) return nums;
    if(low < high){
        let partitionIdx = partition(nums,low,high);
        // 左区
        sortArray(nums,low,partitionIdx-1)
        // 右区
        sortArray(nums,partitionIdx+1,high)
    }
    return nums;
};
const partition = (nums,low,high)=>{
    // 中心点
    // 第一次为 0
    let center = nums[low]
    while(low < high){
        while(low < high && center <= nums[high]){
            high --;
        }
        // high指针的值比较小 -> 交换
        nums[low] = nums[high];
        //
        while(low < high &&  center >= nums[low]){
            low ++;
        }
        nums[high] = nums[low];
    }
    nums[low] = center;// 重合
    return low

}*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums, low = 0, high = nums.length - 1) {
    if (!nums.length) return nums;
    if (low < high) {
        let partitionIdx = partition(nums, low, high);
        // 左区
        sortArray(nums, low, partitionIdx - 1)
        // 右区
        sortArray(nums, partitionIdx + 1, high)
    }
    return nums;
};

function partition(arr, left, right) {     // 分区操作
    var pivot = left,                      // 设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
