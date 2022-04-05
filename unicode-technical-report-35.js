const validStr = (num) => {
    // console.log(num)
    if (num < 0) num *= -1;
    return String(num)
}

const loopN = (value, n) => {
    let str = validStr(value);
    while (str.length < n) {
        str = '0' + str
    }
    return str
}

const pmAm = (h, a) => {
    let time = h
    if (h > 12) {
        time = h -12;
        if (a !== undefined) time = 'PM'
    } else {
        if (a !== undefined) time = 'AM'
    }
    return time
}

const era = (year, type) => {
    if (type === 'G') {
        return year < 0 ? 'BC' : 'AD';
    }
    return year < 0 ? 'Before Christ' : 'Anno Domini';
}

const frm = {
    date : new Date(1),
    y : function () {
        return validStr(this.date.getFullYear())
    },
    yyyy : function () {
        return loopN(this.date.getFullYear(),4)
    },
    G : function () {
        return era(this.date.getFullYear(),'G')
    },
    GGGG : function () {
        return era(this.date.getFullYear(),'GGGG')
    },
    M : function () {
        return validStr(this.date.getMonth() + 1)
    },
    MM : function () {
        return loopN(this.date.getMonth() + 1,2)
    },
    MMM : function () {
        return this.months[this.date.getMonth()][1]
    },
    MMMM : function () {
        return this.months[this.date.getMonth()][0]
    },
    d : function () {
        return validStr(this.date.getDate())
    },
    dd : function () {
        return loopN(this.date.getDate(),2)
    },
    E : function () {
        return this.weeks[this.date.getDay()][1]
    },
    EEEE : function () {
        return this.weeks[this.date.getDay()][0]
    },
    h : function () {
        return validStr(pmAm(this.date.getHours()))
    },
    hh : function () {
        return loopN(pmAm(this.date.getHours()),2)
    },
    m : function () {
        return validStr(this.date.getMinutes())
    },
    mm : function () {
        return loopN(this.date.getMinutes(),2)
    },
    s : function () {
        return validStr(this.date.getSeconds())
    },
    ss : function () {
        return loopN(this.date.getSeconds(),2)
    },
    H : function () {
        return validStr(this.date.getHours())
    },
    HH : function () {
        return loopN(this.date.getHours(),2)
    },
    a : function () {
        return validStr(pmAm(this.date.getHours(),'a'))
    },
    months : {
        0 :  ['January', 'Jan'],
        1 :  ['February', 'Feb'],
        2 :  ['March', 'Mar'],
        3 :  ['April', 'Apr'],
        4 :  ['May', 'May'],
        5 :  ['June', 'Jun'],
        6 :  ['July', 'Jul'],
        7 :  ['August', 'Aug'],
        8 :  ['September', 'Sep'],
        9 :  ['October', 'Oct'],
        10 : ['November', 'Nov'],
        11 : ['December', 'Dec']
    },
    weeks : {
        0 : ['Sunday', 'Sun'],
        1 : ['Monday', 'Mon'],
        2 : ['Tuesday', 'Tue'],
        3 : ['Wednesday', 'Wed'],
        4 : ['Thursday', 'Thu'],
        5 : ['Friday', 'Fri'],
        6 : ['Saturday', 'Sat']
    }
}

const sep = /[\s\[\]\/(),.:;<>]/;

const separate = (dF) => {
    let arr = [];
    let word = '';
    dF += '\n'
    for (let i = 0; i < dF.length; i++) {
        if (dF[i] === '\n') {
            arr = [...arr, word]
            break;
        }
        if (sep.test(dF[i])) {
            arr = [...arr, word, dF[i]]
            word = ''
            continue
        }
        word = word + '' + dF[i]
    }
    return arr
}

const format = (date, dateFormat) => {
    let ans = ''
    let arrF = separate(dateFormat);
    frm.date = new Date(date)
    for (let i = 0; i < arrF.length; i++) {
        if (sep.test(arrF[i])) {
            ans += arrF[i];
            continue
        }

        if (arrF[i] === 'y') ans += frm.y();
        else if (arrF[i] === 'yyyy') ans += frm.yyyy();
        else if (arrF[i] === 'G') ans += frm.G();
        else if (arrF[i] === 'GGGG') ans += frm.GGGG();
        else if (arrF[i] === 'M') ans += frm.M();
        else if (arrF[i] === 'MM') ans += frm.MM();
        else if (arrF[i] === 'MMM') ans += frm.MMM();
        else if (arrF[i] === 'MMMM') ans += frm.MMMM();
        else if (arrF[i] === 'd') ans += frm.d();
        else if (arrF[i] === 'dd') ans += frm.dd();
        else if (arrF[i] === 'E') ans += frm.E();
        else if (arrF[i] === 'EEEE') ans += frm.EEEE();
        else if (arrF[i] === 'h') ans += frm.h();
        else if (arrF[i] === 'hh') ans += frm.hh();
        else if (arrF[i] === 'm') ans += frm.m();
        else if (arrF[i] === 'mm') ans += frm.mm();
        else if (arrF[i] === 's') ans += frm.s();
        else if (arrF[i] === 'ss') ans += frm.ss();
        else if (arrF[i] === 'H') ans += frm.H();
        else if (arrF[i] === 'HH') ans += frm.HH();
        else if (arrF[i] === 'a') ans += frm.a();
    }
    return ans
}