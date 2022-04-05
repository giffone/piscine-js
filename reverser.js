const reverse = (x) => {
    let arr = []
    let str = false
    if (typeof x === 'string') {
        x = [...x]
        str = true
    }
    for (let index = x.length - 1; index >= 0; index--) {
        arr = [...arr,x[index]]
    }
    if (str) {
        return arr.join('')
    }
    return arr
}