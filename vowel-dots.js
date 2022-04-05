const vowels = /[aeiouAEIOU]/;

const vowelDots = (str) => {
    for (let index = 0; index < str.length; index++) {
        if (vowels.test(str[index])) {
            str = [str.slice(0, index + 1),str.slice([index + 1])].join('.')
        }
    }
    return str
}