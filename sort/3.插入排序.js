//第一个元素看做一个有序序列
function sortArray(nums) {
    let len = nums.length
    let preIdx
    let curr
    for(let i = 1; i < len;i++){
        preIdx = i - 1;
        curr = nums[i]
        while(preIdx >= 0 && curr < nums[preIdx]){
            // curr ->
            nums[preIdx + 1] = nums[preIdx]
            // 指针往后移动,看有没有更小的
            preIdx --
        }
        // 最坏的情况: preIdx = -1
        // 交换
        nums[preIdx + 1] = curr
    }
    return nums
}




/*
// bug 1
function sortArray(arr) {
    let len = arr.length
    let preIdx
    let curr
    for(let i = 1 ; i < len; i++){
        preIdx = i - 1;
        curr = arr[i]
        while(preIdx >= 0 && curr < arr[preIdx]){
            // curr -> 改变
            arr[preIdx+1] = arr[preIdx]
            // 指针向后移动,进行下一轮比较
            preIdx --
        }
        // 最坏的情况: preIdx -> -1
        // 进行交换
        arr[preIdx+1] = arr[preIdx] 改为 -> arr[preIdx+1] = curr
    }
    return arr
}*/
