const replica = (object, ...source) => {
    for (let i = 0; i < source.length; i++) {
        Object.keys(source[i]).forEach(key => {
            if (!object.hasOwnProperty(key) ||
                (object[key].constructor.name !== 'Object' || source[i][key].constructor.name !== 'Object')) {
                object[key] = source[i][key]
            } else {
                object[key] = replica(object[key], source[i][key])
            }
        })
    }
    return object
}