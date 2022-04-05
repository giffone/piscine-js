const regexResponse = /(\s-\s[a-z]+:\s)/i;
const regexKeys = /[a-z]+:/i;

let data = {};

const neuron = (arr) => {
    data = {};
    arr.forEach(value => {
        let cut = value.match(regexResponse);
        if (cut === null) return {};
        let queObj = dataQuestion(value.slice(0,cut.index));
        if (queObj === {}) return;
        dataResponse(value.slice(cut.index + 3), queObj);
        // console.log(data)
    })
    return data
}

const dataQuestion = (que) => {
    let title = makeTitle(que);
    if (title === undefined) return {};
    que = cutTitle(que);
    que = cutSymbol(que);
    let q_u_e = que.split(' ').join('_');
    let titleInSingle = cutEnding(title);
    if (data[title] === undefined) data[title] = {};
    if (data[title][q_u_e] === undefined) data[title][q_u_e] = {};
    data[title][q_u_e][titleInSingle] = que
    return data[title][q_u_e]
    // return {}
}

const dataResponse = (res, resObj) => {
    let title = makeTitle(res);
    if (title === undefined) return;
    if (resObj[title] === undefined) resObj[title] = [];
    resObj[title] = [...resObj[title], cutTitle(res)]
    console.log(resObj)
}

const makeTitle = (str) => {
    let title = str.match(regexKeys);
    if (title === null) return;
    title = title[0].toLowerCase().slice(0, -1);
    return title
}

const cutTitle = (str) => {
    return str.slice(str.indexOf(':') + 2)
}

const cutSymbol = (str) => {
    while ((/\w+[?:]$/).test(str)) {
        str = str.slice(0, -1)
    }
    return str
}

const cutEnding = (str) => {
    while ((/\w+[s]$/).test(str)) {
        str = str.slice(0, -1)
    }
    return str
}

console.log(neuron(['Orders: shutdown please! - Response: no!']))

