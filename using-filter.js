const filterShortStateName = (arr) => arr.filter(x => x.length < 7)

const filterStartVowel = (arr) => arr.filter(x => x[0].match(/[aeiou]/gi))

const filter5Vowels = (arr) => arr.filter(x => x.match(/[aeiou]/gi).length >= 5)

const filter1DistinctVowel = (arr) => arr.filter(function (x) {
    let low = x.toLowerCase()
    let vowelsArr = low.match(/[aeiou]/gi)
    return vowelsArr.every(y => y === vowelsArr[0])
})

const multiFilter = (arr) => {
    return arr.filter(x => {
        if ((x.capital.length >= 8) && (x.name[0].match(/[^aeiou]/gi)) &&
            (x.tag.match(/[aeiou]/gi)) && (x.region !== 'South')) return x
    })
}