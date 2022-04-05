// import {colors} from "./fifty-shades-of-cold.data.js";

export const compose = () => {
    document.addEventListener('keydown', e => {
        if ((/^[a-z\s]$/).test(e.key)) {
            const newDiv = document.createElement('div');
            let color = (e.key.charCodeAt(0) - 97) * 9;
            // let color = colors[Math.floor(Math.random() * colors.length)]
            console.log(e.key)
            newDiv.className = 'note';
            newDiv.textContent = e.key;
            // newDiv.style.background = color;
            newDiv.style.background = `rgb(${color}, ${color}, ${color} )`;
            document.body.append(newDiv);
        }
        if (e.key === 'Backspace') {
            document.body.lastChild.remove()
        }
        if (e.key === 'Escape') {
            document.body.textContent = ''
        }
    })
}