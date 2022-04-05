const sign = (n) => n > 0 ? 1 : n < 0 ? -1 : 0;

const sameSign = (n1, n2) => sign(n1) === sign(n2);