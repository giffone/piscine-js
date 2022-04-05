const mult2 = (n1) => function (n2) {return n1 * n2}

const add3 = (n1) => function (n2) {return function (n3) {return n1 + n2 + n3}}

const sub4 = (n1) => function (n2) {return function (n3) {return function (n4) {return n1 - n2 -n3 - n4}}}