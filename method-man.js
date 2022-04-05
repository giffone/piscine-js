const words = (text) => text.split(" ")
const sentence = (arr) => arr.join(" ")
const yell = (text) => text.toUpperCase()
const whisper = (text) => '*'+text.toLowerCase()+'*'
const capitalize = (text) => text[0].toUpperCase()+text.slice(1).toLowerCase()