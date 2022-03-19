import pic from './pic/img_3.png'
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    // IV
    let res = 0;
    for(let i = 0 ; i < s.length; i++){
        let mark = s[i];
        let val = map[mark];
        if(val < map[s[i+1]]){
            val = map[s[i+1]] - val;
            i++;
        }
        res += val;
    }
    return res;
};
