import pic from './pic/img_1.png'

let longestCommonPrefix = function(strs) {
    let s1 = strs[0] ? strs[0]:'';
    for (let i=1;i<strs.length;i++){
        let regex = new RegExp('^'+s1);
        // 测试xxx 是不是以yyy开头
        while (s1.length && !regex.test(strs[i])){
            s1 = s1.slice(0,s1.length-1);
            regex = new RegExp('^'+s1);
        }
    }
    return s1;
};



