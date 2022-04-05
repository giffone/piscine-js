const filterEntries = (object, func) => {
    let ans = {};
    Object.keys(object).forEach(key => {
        if (func([key, object[key]])) {
            ans[key] = object[key];
        }
    })
    return ans
}

const mapEntries = (object, func) => {
    let ans = {};
    Object.keys(object).forEach(key => {
        let buf = func([key, object[key]]);
        ans[buf[0]] = buf[1];
    })
    return ans
}

const reduceEntries = (object, func, acc) => {
    let ans;
    acc === '' ? ans = '' : ans = 0
    Object.keys(object).forEach(key => {
        ans += func(acc, [key, object[key]]);
    })
    return ans
}

const totalCalories = (object) => {
    return reduceEntries(object, (acc, [k, v]) =>
        acc + (v / 100) * nutritionDB[k]['calories'], 0) * 100 / 100
}

const lowCarbs = (object) => {
    return filterEntries(object, ([k, v]) => v * nutritionDB[k]['carbs'] / 100 < 50)
}

const cartTotal = (object) => {
    let ans = {};
    Object.keys(object).forEach(key => {
        ans[key] = mapEntries(nutritionDB[key], ([k, v]) => [
            k,
            (object[key] * v).toFixed(4) / 100
        ])
    })
    return ans

}
