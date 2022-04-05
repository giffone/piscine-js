const pronouns = /(\b(i|me|you|s?he|it|him|her|we|us|the[ym])\b)/gmi;

const pronoun = (line) => {
    let ans = {};
    let match = line.match(pronouns);
    if (match === null) return ans;
    let cutCount = 0;
    match.forEach(value => {
        let v = value.toLowerCase();
        if (ans[v] === undefined) ans[v] = {word : [], count: 0};
        ans[v]['count'] += 1;
        let cut = line.slice(line.indexOf(value, cutCount))
        let regex = new RegExp(value+'\\s\\w+','gmi');
        let match2 = cut.match(regex);
        if (match2 !== null) {
            let slice = match2[0].split(' ');
            if (slice[1].match(pronouns) === null) {
                ans[v]['word'] = [...ans[v]['word'], slice[1]];
                cutCount += match2[0].length
            } else {
                cutCount += v.length
            }
        }
    })
    return ans
}