const flow = (arrFunc) => function () {
    let args = arguments, lArgs = args.length, larrFunc = arrFunc.length;
    let ans = 0, i = 0;
    if (lArgs === 1) ans = arrFunc[0].call(this,args[0]) | i++;
    else ans = arrFunc[0].apply(this,args) | i++;
    for (; i < larrFunc; i++) {
        ans = arrFunc[i].call(this, ans)
    }
    return ans
}