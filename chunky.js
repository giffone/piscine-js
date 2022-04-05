const chunk = (arr, cutN) => {
    if (cutN === 0) return [arr];
    let lArr = arr.length
    let arrGr = []
    let buf = []
    let count = 0
    for (let index = 0; index < lArr; index++) {
        if (count === cutN) {
            arrGr = [...arrGr, buf]
            count = 0
            buf = []
            index--
            continue
        }
        buf = [...buf, arr[index]]
        count++
    }
    return [...arrGr, buf]
}