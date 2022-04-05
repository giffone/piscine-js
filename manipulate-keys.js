const filterKeys = (object, func) => {
    let ans = {};
    Object.keys(object).forEach(key => {
        if (func(key)){
            ans[key] = object[key];
        }
    })
    return ans
}

const mapKeys = (object, func) => {
    let ans = {};
    Object.keys(object).forEach(key => {
        ans[func(key)] = object[key]
    })
    return ans
}

const reduceKeys = (object, func, acc) => {
    let ans = '';
    if (acc !== undefined) ans = acc
    Object.keys(object).forEach(key => {
        if (ans === '') {
            ans = key
        } else {
            ans = func(ans, key)
        }
    })
    return ans
}