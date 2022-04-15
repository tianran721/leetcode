// 算法的时间复杂度应该为 O(log (m+n))
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr =[...nums1,...nums2]
    if(arr.length<=1) return arr[0]
    arr.sort((a,b)=>a-b)
    const len = arr.length
    // 判断数组长度奇还是偶
    // 奇数返回
    if(len % 2 !== 0) return arr[(len-1) / 2]
    // 偶数 [)
    const resArr = arr.slice(len/2 - 1,len/2 + 1)
    return (resArr[0]+resArr[1]) / 2
};



var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1,...nums2];
    let len = arr.length;
    if(len === 1) return arr[0];
    arr.sort((a,b)=>a-b);
    if(len % 2 === 1) {
        return arr[Math.floor(len / 2)];
    }else{
        let ans = arr.slice(len / 2 -1 , len / 2 + 1);
        return (ans[0] + ans[1]) / 2;
    }
};
