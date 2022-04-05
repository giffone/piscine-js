const deepCopy = (inObject) => {
    if (inObject === undefined) return undefined;
    if (inObject.constructor.name === 'RegExp') return inObject;
    if (typeof inObject !== 'object') return inObject;

    let outObject = Array.isArray(inObject) ? [] : {};

    for (let key in inObject) {
        outObject[key] = deepCopy(inObject[key])
    }

    return outObject
}