const str = 'string';
const num = 1;
const bool = true;
const undef = undefined;
const escapeStr = "`\\/\"'";
const arr = [4,'2'];

Object.freeze(arr);

const obj = {
    str,
    num,
    bool,
    undef,
};

Object.freeze(obj);

const nested = {
    arr : Object.freeze([4,undefined,'2']),
    obj : Object.freeze({
        str,
        num,
        bool,
    })
};

Object.freeze(nested);