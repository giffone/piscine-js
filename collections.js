const superTypeOf = (x) => {
    if (x === null) return 'null';
    if (x === undefined) return 'undefined';
    if (typeof x === 'function') return 'Function';
    if (typeof x === 'string') return 'String';
    if (typeof x === 'number') return 'Number';
    if (typeof x === 'object' && Array.isArray(x)) return 'Array';
    if (x instanceof Set) return  'Set';
    if (x instanceof Map) return 'Map';
    if (typeof x === 'object') return 'Object';
    return 'undefined';
};

const arrToSet = (a) => new Set(a);
const arrToStr = (a) => a.join('');
const setToArr = (s) => [...s];
const setToStr = (s) => arrToStr([...s]);
const strToArr = (s) => [...s];
const strToSet = (s) => new Set([...s]);
const mapToObj = (m) => Object.fromEntries(m);
const objToArr = (o) => Object.values(o);
const objToMap = (o) => new Map(Object.entries(o));
const arrToObj = (a) => Object.fromEntries(Object.entries(a));
const strToObj = (s) => Object.fromEntries(Object.entries(s))
