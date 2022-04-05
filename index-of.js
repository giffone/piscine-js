const indexOf = (arr,val,formIndex) => {
    formIndex = formIndex === undefined ? -1 : formIndex;
    for (let index = 0; index < arr.length; index++ ) {
        if (val === arr[index]) {
            if (index >= formIndex) {
                return index
            }
        }
    }
    return -1
}

const lastIndexOf = (arr,val,formIndex) => {
    formIndex = formIndex === undefined ? arr.length : formIndex;
    for (let index = arr.length-1; index >= 0; index-- ) {
        if (val === arr[index]) {
            if (index <= formIndex) {
                return index
            }
        }
    }
    return -1
}

const includes = (arr,val) => {
    for (let index = arr.length-1; index >= 0; index-- ) {
        if (val === arr[index]) {
            return true
        }
    }
    return false
}