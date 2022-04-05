// object { step: 3, start: 1, end: 2, duration: 10 }

const interpolation = (step, start, end, callback, duration) => {
    const stepDuration = duration / step;
    const stepEnd = (end - start) / step;
    let ans = [[0, start+stepEnd]];

    return ans
}