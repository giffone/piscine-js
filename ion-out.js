const ionOut = (str) => {
    let arr = [];
    let regexSplit = (/,|\s/);
    let regexIon = new RegExp('tion','g');
    let buf = str.split(regexSplit);
    for (let index = 0; index < buf.length; index++) {
        if (regexIon.test(buf[index])) {
            arr = [...arr,buf[index].slice(0,-3)]
        }
    }
    return arr
}