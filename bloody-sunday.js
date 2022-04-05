const week = {
    0 : 'Saturday',
    1 : 'Monday',
    2 : 'Tuesday',
    3 : 'Wednesday',
    4 : 'Thursday',
    5 : 'Friday',
    6 : 'Saturday',
}

const firstDay = new Date('0001-01-01');
const day = 1000 * 60 * 60 * 24;

const bloodySunday = (date) => {
    let index = Math.round(Math.abs((new Date(date) - firstDay) / day + 1));
    if (index > 6) index = Math.round(index % 6)
    return week[index]
}