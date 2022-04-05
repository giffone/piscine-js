const flat = (arr, dep) => {
    if (dep === undefined) dep = 1;
    let ans = [];
    dep++
    while (dep !== 0) {
        let buf = [];
        for (let index = 0; index < arr.length; index++) {
            if (typeof arr[index] !== 'object') {
                ans = [...ans, arr[index]]
            } else {
                buf = [...buf, ...arr[index]]
            }
        }
        arr = [...buf]
        dep--
        if (dep === Infinity && arr.length === 0) break;
    }
    if (arr.length > 0) return [...ans, arr]
    return ans
}