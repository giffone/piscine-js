const split = (str, sep) => {
    let arr = [];
    if (sep === undefined) return [str];
    if (sep === '') return [...str];
    let lSep = sep.length
    let lStr = str.length
    let w = ''
    let s = ''
    let start = false
    let s1 = lSep > 1 ? sep[0] : '';
    for (let index = 0; index < lStr; index++) {
        if ((str[index] === sep) ^ (s === sep)) {
            arr = [...arr, w]
            w = ''
            s = ''
            start = false
            if (lSep > 1) index--
            if (index === lStr-1) {
                arr = [...arr, '']
                break
            }
            continue
        }
        if (s1 === str[index] && !start) {
            start = true
        }
        if (start) {
            s = s + '' + str[index]
            continue
        }
        w = w + '' + str[index]
    }
    if (w === '') return arr;
    return [...arr, w]
}

const join = (arr, sep) => {
    let str = ''
    let lArr = arr.length
    for (let index = 0; index < lArr; index++) {
        str = str + '' + arr[index]
        if (index !== lArr - 1) {
            str = str + '' + sep
        }
    }
    return str
}