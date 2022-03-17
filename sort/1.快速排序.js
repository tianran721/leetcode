// 在平均状况下，排序 n 个项目要 Ο(nlogn) 次比较。在最坏状况下则需要 Ο(n2) 次比较
// 快速排序使用分治法（Divide and conquer）策略来把一个串行（list）分为两个子串行（sub-lists）。
// 步骤:
// 从数列中挑出一个元素，称为 "基准"（pivot）;
//
// 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
//
// 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序
import pic from './pic/img_1.png'
var sortArray = function(nums,low = 0,high = nums.length - 1) {
    if(!nums.length) return nums;
    if(low < high){
        let point = partition(nums,low,high);
        // 左区
        sortArray(nums,low,point-1)
        // 右区
        sortArray(nums,point+1,high)
    }
    return nums;
};
const partition = (nums,low,high)=>{
    // 中心点
    // 第一次为 0
    let center = nums[low]
    while(low < high){
        while(low < high && nums[high] >= center){
            high --;
        }
        // 此时h <center
        nums[low] = nums[high];
        while(low < high &&  nums[low] <= center ){
            low ++;
        }
        // l > center
        nums[high] = nums[low];
    }
    // l,h 重合时 -> 找到枢轴
    nums[low] = center;
    return low
}





// bug
var sortArray = function(nums,low = 0, high = nums.length - 1) {
    if(!nums.length) return
    if(low < high){
        let idx = partition(nums,low,high)
        //bug1: sortArray(nums,0,idx-1) -> 应该是 sortArray(nums,low,idx-1)
        sortArray(nums,idx+1,high)
    }
    // bug3  没有return 返回值 -> 应该是 return nums

};
function partition(nums,low,high){
    // bug2: let center = nums[0] -> 应该是 let center = nums[low]
    while(low < high){
        while(low < high && nums[high] >= center){
            high--
        }
        nums[low] = nums[high]
        while(low < high && nums[low] <= center){
            low ++
        }
        nums[high] = nums[low]
    }
    // l,h 重合
    nums[low] = center
    return low
}
