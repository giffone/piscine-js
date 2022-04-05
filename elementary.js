const multiply = (a, b) => {
    if (a === 0 ^ b === 0) return 0;
    const minus = (a < 0) ^ (b < 0) ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)
    let answer = 0
    for (let count = 1; count <= b; count++) {
        answer = answer + a
    }
    if (minus === -1) answer = -answer;
    return answer
}

const divide = (a, b) => {
    if (a === 0) return 0;
    if (a === b) return 1;
    const minus = (a < 0) ^ (b < 0) ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)
    let answer = 0
    while (a >= b) {
        a = a - b
        answer++
    }
    if (minus === -1) answer = -answer;
    return answer
}

const modulo = (a, b) => {
    if (a === 0 || a === b ) return 0;
    const minus = (a < 0) ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)
    if (a < b) return a;
    let answer = b
    while (b <= a) {
        answer += b
        if (answer > a) return minus === -1 ? -(a - (answer - b)) : a - (answer - b);
    }
}