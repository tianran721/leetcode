import pic from './pic/img.png'
/**
 * @param {string} s
 * @return {boolean}
 */
// shift的基本意思是“搬动,移动” ->
var isValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (['(', '{', '['].includes(s[i])) {
            stack.unshift(s[i]);
        } else if (['()', '{}', '[]'].includes(stack[0] + s[i])) {
            stack.shift();
        } else {
            return false;
        }
    }

    return stack.length == 0;
};


/*// bug
var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(['(','{','['].includes(s[i])){
            // unshift() -> 将一个元素或多个元素添加到数组的开头
            // stack.unshift(); => 应该是 stack.unshift(s[i])
        // }else if(['()','{}','[]'].includes(s[0] + s[i])){ => stack[0] + s[i]
            stack.shift();
        }else{
            return false;
        }
    }
    return stack.length === 0;
};*/
