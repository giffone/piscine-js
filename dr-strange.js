const week = {
    1 : 'Monday',
    2 : 'Tuesday',
    3 : 'Wednesday',
    4 : 'Thursday',
    5 : 'Friday',
    6 : 'Saturday',
    7 : 'Sunday',
}

const firstDay = new Date('0001-01-01');
const day = 1000 * 60 * 60 * 24;

const addWeek = (date) => {
    let ms = Math.abs(date - firstDay)
    let diff = Math.round(ms / day) + 1
    let rem = diff <= 14 ? diff : diff % 14;
    if (rem === 0) rem = 14;
    if (rem > 7) return 'second'+week[rem-7]
    return week[rem]
}

const timeTravel = (time) => {
    time.date.setHours(time.hour)
    time.date.setMinutes(time.minute)
    time.date.setSeconds(time.second)
    return time.date
}