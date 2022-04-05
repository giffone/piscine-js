const matchCron = (pattern, date) => {
    let arr = pattern.split(' ');
    let lArr = arr.length;
    if (lArr !== 5) return false;
    let dateArr = {
        0 : date.getMinutes(),
        1 : date.getHours(),
        2 : date.getDate(),
        3 : date.getMonth() + 1,
        4 : date.getDay(),
    }
    for (let index = 0; index < lArr; index++) {
        if (arr[index] !== '*') {
            if (Number(arr[index]) !== dateArr[index]) return false
        }
    }
    return true
}
