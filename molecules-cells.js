const DNA = (str) => {
    if (str === '') return ''
    let dna = ''
    for (let index = 0; index < str.length; index++) {
        if (str[index] === 'C'){
            dna = [dna,'G'].join('')
        } else if (str[index] === 'G') {
            dna = [dna,'C'].join('')
        } else if (str[index] === 'A') {
            dna = [dna,'T'].join('')
        } else if (str[index] === 'U') {
            dna = [dna,'A'].join('')
        }
    }
    return dna
}

const RNA = (str) => {
    if (str === '') return ''
    let rna = ''
    for (let index = 0; index < str.length; index++) {
        if (str[index] === 'G'){
            rna = [rna,'C'].join('')
        } else if (str[index] === 'C') {
            rna = [rna,'G'].join('')
        } else if (str[index] === 'T') {
            rna = [rna,'A'].join('')
        } else if (str[index] === 'A') {
            rna = [rna,'U'].join('')
        }
    }
    return rna
}