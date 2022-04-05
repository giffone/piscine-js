const currify = (func) => {
    return function curried(...args) {
        if (args.length >= func.length) { // (1)
            return func.apply(this, args);
        } else {
            return function(...args2) { // (2)
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}