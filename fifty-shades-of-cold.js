import {colors} from './fifty-shades-of-cold.data.js'
export {generateClasses,generateColdShades,choseShade}

const generateClasses = () => {
    const style = document.createElement('style')
    colors.forEach(el => style.append(`.${el} { background: ${el}; }`));
    document.head.appendChild(style)
}

const generateColdShades = () => {
    colors.forEach(el => {
        if ((/(aqua|blue|turquoise|green|cyan|navy|purple)/).test(el)) {
            const newDiv = document.createElement('div')
            newDiv.className = el;
            newDiv.textContent = el;
            document.body.append(newDiv)
        }
    })
}

const choseShade = (color) => {
    let allDiv = [...document.getElementsByTagName('div')]
    allDiv.forEach(el => {
        el.className = color;
    })
}