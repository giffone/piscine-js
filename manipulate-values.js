const filterValues = (object, func) => {
    let ans = {};
    Object.keys(object).forEach(key => {
        if (func(object[key])){
            ans[key] = object[key];
        }
    })
    return ans
}

const mapValues = (object, func) => {
    let ans = {};
    Object.keys(object).forEach(key => {
        ans[key] = func(object[key])
    })
    return ans
}

const reduceValues = (object, func, acc) => {
    let ans = 0;
    if (acc !== undefined) ans = acc
    Object.keys(object).forEach(key => {
        ans = func(ans, object[key])
    })
    return ans
}