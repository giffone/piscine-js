let ans = '1'

const findExpression = (num) => {
    if (num % 2 !== 0) return undefined;
    return fE(num,1,'1')
}

const fE = (num, start, buf) => {
    if (start > num) {
        return;
    } else if (start === num) {
        ans = buf;
        // console.log(num, ans)
    } else {
        fE(num,start * 2, buf + ' ' + mul2);
        fE(num,start + 4, buf + ' ' + add4);
    }
    return ans
}