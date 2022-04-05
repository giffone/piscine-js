const slice = (obj,start, end) => {
    const l = obj.length;
    if (start === undefined) {
        return obj
    } else if (start < 0) {
        start = l + start
    }
    if (end === undefined) {
        end = l
    } else if (end < 0) {
        end = l + end
    }
    let x;
    let str = typeof obj === 'string';
    if (str) {
        x = ''
    } else {
        x = []
    }
    for (let index = start; index < end; index++) {
        if (str) {
            x = [x,obj[index]].join('')
        } else {
            x = [...x,obj[index]]
        }
    }
    return x
}