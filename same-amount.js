const sameAmount = (str, reg1, reg2) => {
    let r1 = new RegExp(reg1,'gm');
    let r2 = new RegExp(reg2,'gm');
    let s1 = str.match(r1);
    let s2 = str.match(r2);
    if (s1 === null ^ s2 === null) return false
    return str.match(r1).length === str.match(r2).length
}