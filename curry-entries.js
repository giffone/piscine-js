const defaultCurry = (object) => {
    return function (object2) {
        let ans = {...object}
        Object.keys(object2).forEach(key => {
            ans[key] = object2[key]
        })
        return ans
    }
}

const mapCurry = (func) => {
    return function (object) {
        let ans = {};
        Object.keys(object).forEach(key => {
            let buf = func([key, object[key]])
            ans[buf[0]] = buf[1];
        })
        return ans
    }
}

const reduceCurry = (func) => {
    return function (object, acc) {
        let ans;
        if (Number.isInteger(acc)) ans = 0;
        else ans = acc;
        Object.keys(object).forEach(key => {
            let buf = func(acc, [key, object[key]]);
            if (Number.isInteger(buf)) ans += buf
            else ans += buf.split(acc)[1]
        })
        return ans
    }
}

const filterCurry = (func) => {
    return function (object) {
        let ans = {};
        Object.keys(object).forEach(key => {
            if (func([key, object[key]])) {
                ans[key] = object[key];
            }
        })
        return ans
    }
}

const reduceScore = (object, acc) => {
    if (acc === undefined) acc = 0;
    let filter = filterCurry(([, v]) => v.isForceUser === true)(object)
    Object.keys(filter).forEach(key => {
        acc += reduceCurry((acc, [, v]) => acc += v)
        (defaultCurry(filter[key])({id: 0, isForceUser: 0}), 0)
    })
    return acc
}

const filterForce = (object) => {
    return filterCurry(([, v]) => v.shootingScore >= 80 && v.isForceUser === true )(object)
}

const mapAverage = (object) => {
    let ans = {};
    Object.keys(object).forEach(key => {
        let medium = (object[key].pilotingScore + object[key].shootingScore) / 2
        ans [key] = defaultCurry(object[key])({averageScore: medium})
    })
    return ans
}
