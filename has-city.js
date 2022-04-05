const hasCity = (country, citiesArr) => function (city) {
    if (citiesArr.some(c => c === city)) {
        return [city,'is a city from',country].join(' ')
    }
    return [city,'is not a city from',country].join(' ')
}