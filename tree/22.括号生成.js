
var generateParenthesis = function (n) {
    // [] -> 转 -> set集合 -> {'()'}
    let set = new Set(['()']);
    for (let c = 2; c <= n; c++) {
        let nextSet = new Set();
        for (const str of set) {
            for (let j = 0; j <= str.length; j++) {
                nextSet.add(str.slice(0, j) + '()' + str.slice(j));
            }
        }
        set = nextSet;
    }
    return [...set];
};

generateParenthesis(2)


// String -> 转 -> set集合 -> {'(',')'}
console.log(new Set('()'))



