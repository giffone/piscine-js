const round = (num) => {
    let minus = num < 0;
    let n = Math.abs(num);
    let rem = n % 1;
    if (rem === 0) return num;
    if (minus) {
        return rem <= 0.5 ? -(n - rem) : -((n - rem) + 1)
    } else {
        return rem <= 0.5 ? n - rem : (n - rem) + 1
    }
}

const ceil = (num) => {
    let minus = num < 0;
    let n = Math.abs(num);
    let rem = n % 1;
    if (rem === 0) return num;
    return minus ? -(n - rem) : (n - rem) + 1
}

const floor = (num) => {
    let minus = num < 0;
    let n = Math.abs(num);
    let rem = n % 1;
    if (rem === 0) return num;
    return minus ? -(1 + n - rem) : n - rem
}

const trunc = (num) => {
    let minus = num < 0;
    let n = Math.abs(num);
    let rem = n % 1;
    if (rem === 0) return num;
    return minus ? -(n - rem) : n - rem
}