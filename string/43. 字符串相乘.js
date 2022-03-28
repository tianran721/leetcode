// todo
// 如果相乘的两个因数非常大，语言提供的数据类型可能就会溢出。
// 这就是字符串相乘的应用场景
// ![](pic/img_5.png)
// https://www.youtube.com/watch?v=kY7SI207GAk
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let m = num1.length,
        n = num2.length;
    // 结果最多为m+n位
    let res = new Array(m + n).fill(0);
    // 从个位数开始逐位相乘
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            // 乘积在res对应的索引位置
            let posHigh = i + j // 高位
            let posLow = i + j + 1; // 低位
            let mul = (num1[i] - 0) * (num2[j] - 0);
            let sum = mul + res[posLow];
            // 低位更新
            res[posLow] = sum % 10;
            // 高位更新
            res[posHigh] += parseInt(sum / 10);
        }
    }
    // 结果前缀可能存在0（未使用的位）
    let i = 0;
    while (i < res.length && res[i] == 0) {
        i++;
    }
    // 将计算结果转化成字符串
    let str = "";
    for (; i < res.length; i++) {
        str += res[i];
    }
    return str.length == 0 ? "0" : str;
};
