// TODO
var sortArray = function(nums) {
    if(!nums)return nums;
    for(let i = 0; i < nums.length -1; i++){
        for(let j = 0; j<nums.length-1-i;j++){
            if(nums[j] > nums[j+1]){
                swap(nums,j,j+1)
            }
        }
    }
    return nums;
};
const swap = (nums,a,b)=>{
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;

}
