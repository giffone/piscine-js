const repeat = (word, repeatN) => {
    let line = '';
    for (let c = 0; c < repeatN; c++) {
        line = line+word
    }
    return line
}