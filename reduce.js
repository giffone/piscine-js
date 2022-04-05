const fold = (arr, func, accum) => {
    if (accum !== undefined) arr = [accum, ...arr];
    let lArr = arr.length
    for (let i = 1; i < lArr; i++) {
        arr[i] = func(arr[i-1], arr[i])
    }
    return arr[lArr-1]
}

const foldRight = (arr, func, accum) => {
    if (accum !== undefined) arr = [...arr, accum];
    let lArr = arr.length
    for (let i = lArr-1; i > 0; i--) {
        arr[i-1] = func(arr[i], arr[i-1])
    }
    return arr[0]
}

const reduce = (arr, func) => {
    if (arr.length < 1) return Error;
    let accum = typeof arr[0] === 'string' ? '' : 0
    arr = [accum, ...arr]
    let lArr = arr.length
    for (let i = 1; i < lArr; i++) {
        arr[i] = func(arr[i-1], arr[i])
    }
    return arr[lArr-1]
}

const reduceRight = (arr, func) => {
    if (arr.length < 1) return Error;
    let accum = typeof arr[0] === 'string' ? '' : 0
    arr = [...arr, accum]
    let lArr = arr.length
    for (let i = lArr-1; i > 0; i--) {
        arr[i-1] = func(arr[i], arr[i-1])
    }
    return arr[0]
}