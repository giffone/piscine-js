const citiesOnly = (arr) => arr.map(x => x.city)

const upperCasingStates = (arr) => {
    return arr.map(function (x) {
        let n = x.match(/[\Sa-z]+/g);
        n = n.map(y => y.charAt(0).toUpperCase()+y.slice(1));
        return n.join(' ')
    })
}
const fahrenheitToCelsius = (arr, c) => {
    return arr.map(function (x) {
        let n = x.match(/[-?0-9]*/);
        if (c === undefined) c = '°C';
        return Math.floor((Number(n[0]) - 32) * (5/9)) + c
    })
}
const trimTemp = (arr) => {
    arr.map(function (x) {
        let n = x.temperature.match(/[\S]/g);
        return x.temperature = n.join('')
    })
    return arr
}

const tempForecasts = (arr) => {
    return arr.map(x => {
        return [...fahrenheitToCelsius([x.temperature],'°Celsius'),' in ',
            ...citiesOnly([x]),', ', ...upperCasingStates([x.state])].join('')
    })
}