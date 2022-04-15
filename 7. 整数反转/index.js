/**
 * @param {number} x
 * @return {number}
 */
// 原码 反码 补码
var reverse = function (x) {
    let str = x.toString().split("").reverse().join("")
    let y = parseInt(str);
    if (x < 0) y = - y;
    if(y > Math.pow(2,31) -1 || y < -Math.pow(2,31)) return 0;
    else{
        return y;
    }
};


var reverse = function (x) {
    let str = x.toString().split("").reverse().join("");
    let y = parseInt(str);
    if(x < 0) y = -y;
    if(y < - Math.pow(2,31) || y > Math.pow(2,31) - 1) return 0;
    return y;
};
