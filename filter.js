const filter = (arr, func) => {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            ans.push(arr[i])
        }
    }
    return ans
}

const reject = (arr, func) => {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            ans.push(arr[i])
        }
    }
    return ans
}

const partition = (arr, func) => {
    let truly = [];
    let falsy = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            truly.push(arr[i])
        } else {
            falsy.push(arr[i])
        }
    }
    return [truly,falsy]
}