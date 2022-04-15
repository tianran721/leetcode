/**
 * @param {number} num
 * @return {string}
 */
// 字典法
var intToRoman = function(num) {
    let Q = ["","M","MM","MMM"];
    let B = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    let S = ["","X","XX","XXX",'XL',"L","LX","LXX","LXXX","XC"];
    let G = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
    let res = [];
    res.push(Q[Math.floor(num/1000)]);
    res.push(B[Math.floor(num % 1000 / 100)]);
    res.push(S[Math.floor(num % 100 / 10)]);
    res.push(G[Math.floor(num%10)])

    return res.join('');
};

// TODO hash
