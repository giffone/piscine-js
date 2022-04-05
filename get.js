const get = (src, path) => {
    let s = {}
    let keys = path.split('.')
    for (let index = 0; index < keys.length; index++) {
        let k = keys[index]
        s = src[k]
        if (s === undefined) return undefined;
        src = s
    }
    return s
}