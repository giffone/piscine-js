const pick = (object, array) => {
    let newObject = {};
    if (typeof array !== 'object') array = [array];
    for (let v of array) {
        for (const [key, value] of Object.entries(object)) {
            if (key === v) {
                newObject[key] = value;
                continue
            }
        }
    }
    return newObject;
}

const omit = (object, array) => {
    let newObject = {};
    if (typeof array !== 'object') array = [array];

    for (const [key, value] of Object.entries(object)) {
        let buf = {}, add = true;
        for (let v of array) {
            if (key !== v) {
                buf[key] = value;
            } else {
                add = false
            }
        }
        if (add) {
            for (const [key, value] of Object.entries(buf)) {
                newObject[key] = value;
            }
        }
    }
    return newObject;
}