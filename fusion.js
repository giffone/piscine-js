const fusion = (...object) => {
    let newObject = {...object[0]};
    for (let i = 1; i < object.length; i++) {
        for (const [key, value] of Object.entries(object[i])) {
            if (!newObject.hasOwnProperty(key)) {
                newObject[key] = value;
            } else if (typeof value === 'object' && !Array.isArray(value)) {
                newObject[key] = fusion(newObject[key],value);
            } else {
                if (typeof value !== typeof newObject[key]) {
                    newObject[key] = value;
                    continue;
                }
                if (Array.isArray(value))  newObject[key] = [...newObject[key],...value]
                else if (typeof value === 'number') newObject[key] = newObject[key] + value
                else if (typeof value === 'string') newObject[key] = [newObject[key], value].join(' ')
            }
        }
    }
    return newObject
}