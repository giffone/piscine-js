const firstDayWeek = (week, year) => {
    let date = new Date(year)
    let janFirst = date.getDay()
    date.setDate(date.getDate() - janFirst)
    if (week === 1) {
        date.setDate(date.getDate() + ((week-1) * 7) + 3)
    } else {
        date.setDate(date.getDate() + ((week-1) * 7) + 1)
    }

    let ans = {}
    ans.day = String(date.getDate())
    ans.month = String(date.getMonth()+1)
    ans.year = String(date.getFullYear())
    if (ans.day.length < 2) ans.day = '0' + ans.day
    if (ans.month.length < 2) ans.month = '0' + ans.month
    while (ans.year.length < 4) {
        ans.year = '0' + ans.year
    }
    return ans.day+'-'+ans.month+'-'+ans.year
}