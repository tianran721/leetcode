// 逐位相加
import pic from './pic/img_4.png'
const addBinary = (a, b) => {
    while(a.length > b.length) b = "0"+b;
    while(b.length > a.length) a = "0"+a;
    let res = [];
    let carry = 0;
    let sum = 0;
    for(let i = a.length - 1; i>= 0 ; i--){
        sum = Number(a[i]) + Number(b[i]) + carry;
        if(sum >= 2){
            res[i] = sum -2;
            carry = 1;
        }else{
            res[i] = sum;
            carry = 0;
        }
    }
    if(carry)res.unshift(carry);
    return res.join('')
}

addBinary('10','11')
