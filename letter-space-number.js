const letterSpaceNumber = (str) => {
    const regex = /[a-zA-Z][\s][\d]([^\w]|$)/gm;
    let arr = str.match(regex);
    // console.log(arr)
    if (arr === null) return [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].length === 4) arr[index] = arr[index].slice(0,-1);
        if (arr[index] === '') arr.splice(index,1);
    }
    return arr
}