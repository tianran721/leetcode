/*
* 原理
先将数组进行排序
从左侧开始，选定一个值为 定值 ，右侧进行求解，获取与其相加为 00 的两个值
类似于快排，定义首和尾
首尾与 定值 相加
等于 00，记录这三个值
小于 00，首部右移
大于 00，尾部左移
定值右移，重复该步骤
* */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    const len = nums.length;
    if(len < 3) return ans;
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len ; i++) {
        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] === nums[i-1]) continue; // i=0除外 去重
        let L = i+1;
        let R = len-1;
        while(L < R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum === 0){
                ans.push([nums[i],nums[L],nums[R]]);
                while (L<R && nums[L] === nums[L+1]) L++; // 去重
                while (L<R && nums[R] === nums[R-1]) R--; // 去重
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }
    return ans;
};



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    let len = nums.length;
    if(len < 3) return res;
    nums.sort((a,b)=>a-b);
    for(let i=0; i < len;i++){
        if(nums[i] > 0) break;
        if(i>0 && nums[i] === nums[i-1]) continue;
        let L = i + 1;
        let R = len - 1;
        while(L < R){
            let sum = nums[i] + nums[L] + nums[R];
            if(sum === 0){
                res.push([nums[i],nums[L],nums[R]]);
                while(L < R && nums[L] === nums[L+1]) L++;
                while(L < R && nums[R] === nums[R-1]) R--;
                L++;
                R--;
            }
            else if(sum < 0) L++;
            else if(sum > 0) R--;
        }
    }
    return res;
};
