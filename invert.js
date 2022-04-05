const invert = (object) => {
    let newObject = {};
    console.log(object)
    for (const [key, value] of Object.entries(object)) {
        newObject[value] = key;
    }
    return newObject;
}

console.log(invert({ language: 'english' }))