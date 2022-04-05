const isValid = (date) => {
    if (isNaN(date)) return false;
    if (typeof date === "number") return true;
    return date instanceof Date;
}

const isAfter = (date1, date2) => {
    if (!isValid(date1) ^ !isValid(date2)) return false;
    return date1 > date2
}

const isBefore = (date1, date2) => {
    if (!isValid(date1) ^ !isValid(date2)) return false;
    return date1 < date2
}

const isFuture = (date) => {
    if (!isValid(date)) return false;
    return date > Date.now()
}

const isPast = (date) => {
    if (!isValid(date)) return false;
    return date < Date.now()
}