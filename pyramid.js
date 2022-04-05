const pyramid = (smb, num) => {
    let pyr = ''
    let line = 1
    let smbN = 1
    let lSmb = smb.length
    for (let index = 0; index < num -1; index++) smbN += 2;
    let max = lSmb * smbN
    let corr = lSmb % 2 !== 0;
    let space = 0
    if (corr) {
        space = (max-lSmb)/2
    } else {
        space = (max/2) - lSmb + 1
    }
    for (let index = 0; index < num; index++) {
        pyr = pyr + '' + " ".repeat(space);
        pyr = pyr + '' + smb.repeat(line);
        if (index < num - 1) pyr = pyr + '\n';
        line += 2
        space -= lSmb
    }
    return pyr
}