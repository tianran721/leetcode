import pic from './pic/img_3.png'

// 回溯
const letterCombinations = (digits) => {
    if (digits.length == 0) return [];
    const res = [];
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    const dfs = (curLetter, lettersIdx) => {
        if (lettersIdx > digits.length - 1) {
            res.push(curLetter);
            return;
        }
        const letters = map[digits[lettersIdx]];
        for (const letter of letters) {
            dfs(curLetter + letter, lettersIdx + 1);
        }
    };
    dfs('', 0);
    return res;
};



/*
//bug
function dfs(currLetter,letterIdx){
    // if(currLetter > digits.length -1){ => letterIdx > digits.length -1
        res.push(currLetter);
        return;
    }
    let letters = map[digits[letterIdx]];
    for(let letter of letters){
        dfs(currLetter + letter,letterIdx + 1);
    }
}*/
