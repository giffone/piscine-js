// make the last action after delay
const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// leading = false - make the last action after delay
// leading = true - make at start only
const opDebounce = (func, delay, leading) => {
    if (!leading) {
        return debounce(func, delay);
    }
    let timeout;
    return (...args) => {
        if (!timeout) {
            func.apply(this, args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
           timeout = undefined;
        }, delay);
    };
}