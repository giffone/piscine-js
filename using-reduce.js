const adder = (arr, init) => {
    if (init === undefined) init = 0;
    return arr.reduce((prev, curr) => prev + curr, init)
}

const sumOrMul = (arr, init) => {
    if (init === undefined) init = 0;
    if (arr.length === 0) return 0;
    return arr.reduce(function(prev, curr) {
        if (curr % 2 === 0) {
            return prev * curr
        } else {
            return prev + curr
        }
    }, init)
}

const funcExec = (arr, init) => {
    return arr.reduce((x, f) => f(x), init)
}