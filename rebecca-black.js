const isFriday = (date) => {
    return date.getDay() === 5
}

const isWeekend = (date) => {
    return date.getDay() === 6 ^ date.getDay() === 0
}

const isLeapYear = (date) => {
    date.setDate(date.getDate() + 28)
    return date.getMonth() === 1
}

const isLastDayOfMonth = (date) => {
    let currMonth = date.getMonth()
    date.setDate(date.getDate() + 1)
    return date.getMonth() !== currMonth
}