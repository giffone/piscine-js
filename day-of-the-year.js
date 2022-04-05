const day = 1000 * 60 * 60 * 24;

const dayOfTheYear = (date) => {
    let firstDay = new Date(date)
    firstDay.setDate(1)
    firstDay.setMonth(0)
    return Math.round(Math.abs(new Date(date) - firstDay) / day + 1)
}
