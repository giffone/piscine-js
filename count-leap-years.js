const countLeapYears = (date) => {
    let year = date.getFullYear()
    let leap = 0
    while (year > 1) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            leap++
        }
        year--
    }
    if (leap === 0) return 0;
    return leap - 1
}