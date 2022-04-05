import { styles } from './pimp-my-style.data.js'
const undo = 'unpimp'

export const pimp = () => {
    const button = document.querySelector('button')
    const classList = button.classList, lClassList = button.classList.length,
    lStyles = styles.length;

    classList.toggle('button',true)
    let add = classList[lClassList-1] !== undo

    if (add) {
        classList.toggle(styles[lClassList-1],add)
        if (classList.item(lClassList) === styles[lStyles-1]) classList.toggle(undo,true);
    } else {
        classList.toggle(styles[lClassList-3],add)
        if (classList.item(lClassList-3) === 'button' && !add) classList.toggle(undo,false);
    }
}