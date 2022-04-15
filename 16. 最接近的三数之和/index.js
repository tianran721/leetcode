const threeSumClosest = (nums, target) => {
    let len = nums.length;
    let min = Infinity;
    nums.sort((a,b)=>a - b);
    for(let i = 0; i < len; i++){
        let [L,R] = [i+1,len-1];
        while(L < R){
            let sum = nums[i] + nums[L] + nums[R];
            if(Math.abs(sum - target) < Math.abs(min - target)){
                min = sum;
            }
            if(sum < target) L++;
            else if(sum > target) R--;
            else return sum;
        }
    }
    return min;
};



