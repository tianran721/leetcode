var maxArea = function(height) {
    let L = 0;
    let R = height.length - 1;
    let max = 0;
    while(L < R) {
        // 先 底乘高 ，底是两指针距离，高是两指针指向的数值小的那个，不然会水溢出
        let area = (R - L) * Math.min(height[L], height[R])
        max = Math.max(max, area);
        // 如果左指针指向的高度，小于等于 右指针，那就该它移
        if(height[L] <= height[R]) L++;
        else R--;
    }
    return max;
};


var maxArea = function(height) {
    let L = 0;
    let R = height.length -1;
    let max = 0;
    while(L < R){
        let currArea = (R - L)*Math.min(height[L],height[R]);
        max = Math.max(max,currArea);
        if(height[L] <= height[R]) L++;
        else R--;
    }
    return max;
};
