const triangle = (smb, num) => {
    let tri = ''
    for (let index = 0; index < num; index++) {
        tri = tri + '' + smb.repeat(index + 1)
        if (index < num - 1) tri = tri + '\n';
    }
    return tri
}