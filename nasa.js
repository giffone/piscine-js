const nasa = (n) => {
    let str = ''
    if (n === 0) {
        return
    }
    for (let index = 1; index <= n; index++) {
        if (index < 3) {
            str = str + '' + index
            if (index < n) str = str + ' ';
            continue
        }
        let three = index % 3
        let five = index % 5
        if (three === 0 && five === 0) {
            str = str + '' + 'NASA'
        } else if (three === 0) {
            str = str + '' + 'NA'
        } else if (five === 0) {
            str = str + '' + 'SA'
        } else {
            str = str + '' + index
        }
        if (index < n) str = str + ' ';
    }
    return str
}