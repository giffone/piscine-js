// make at start and after delay
const throttle = (func, delay) => {
    let ignore;
    return (...args) => {
        if (ignore) {
            return;
        }
        func(...args);
        ignore = true;
        setTimeout(() => {
            ignore = false;
        }, delay);
    };
}

const opThrottle = (func, delay, options) => {
    let leading = false, trailing = false
    let context, args, result;
    let timeout = null;
    let previous = 0;
    if (options !== undefined) {
        leading = 'leading' in options ? options['leading'] : false;
        trailing = 'trailing' in options ? options['trailing'] : false;
    }
    let later = function() {
        previous = leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function() {
        let now = Date.now();
        if (!previous && leading === false) previous = now;
        let remaining = delay - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > delay) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && trailing) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}

// const opThrottle = (func, delay, options) => {
//     let leading = false, trailing = false;
//     if (options !== undefined) {
//         leading = 'leading' in options ? options['leading'] : false;
//         trailing = 'trailing' in options ? options['trailing'] : false;
//     }
//     if (leading && trailing) {
//         return throttle(func, delay)
//     }
//     let ignore, timeout, lastArgs, lastThis;
//     const invokeFunc = (...args) => {
//         if (ignore) {
//             lastArgs = args;
//             lastThis = this;
//             return;
//         }
//         func(...args);
//         ignore = true;
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             ignore = false;
//             if (trailing) {
//                 invokeFunc(lastThis, lastArgs);
//                 lastArgs = lastThis = undefined;
//             }
//         }, delay);
//     }
//     return (...args) => {
//         if (leading) {
//
//         }
//         if (!ignore && (leading || trailing)) {
//             invokeFunc(...args);
//         }
//     }
// }