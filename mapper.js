const map = (arr, func) => {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans = [...ans, func(arr[i],i, arr)]
    }
    return ans
}

const flatMap = (arr, func) => {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        let value = func(arr[i],i, arr)
        if (typeof value !== 'object') {
            ans = [...ans, value]
        } else {
            ans = [...ans, ...value]
        }

    }
    return ans
}