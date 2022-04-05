const cutFirst = (str) => str.slice(2)
const cutLast = (str) => str.slice(0,-2)
const cutFirstLast = (str) => str.slice(2,-2)
const keepFirst = (str) => str.slice(0, 2)
const keepLast = (str) => str.slice(str.length-2)
const keepFirstLast = (str) => {
    if (str.length < 4) return str;
    let f = keepFirst(str)
    return [f,keepLast(str)].join('')
}