//回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数
import pic from './pic/img_2.png'
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString() == x.toString().split('').reverse().join('')
};


let s = '-121'.split('')
console.log(s)
