const forEach = (arr, func) => {
    for (let i =0; i < arr.length; i++) {
        func(arr[i], i, arr)
    }
}