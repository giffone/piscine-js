export {createCircle, moveCircle, setBox};

let x = 0, y = 0, left = 0, right = 0, top = 0, bottom = 0
let radius = 25

const createCircle = () => {
    document.addEventListener('click', handleClick)
}

const moveCircle = () => {
    document.addEventListener('mousemove',e => {
        const last = document.body.lastChild;
        x = e.clientX - radius;
        y = e.clientY - radius;
        last.style.left = String(x) + "px";
        last.style.top = String(y) + "px";
    })
}

const setBox = () => {
    let box = document.createElement('div');
    box.className = 'box'
    document.body.appendChild(box);
    let rect = box.getBoundingClientRect();
    left = rect.left;
    right = rect.right;
    top = rect.top;
    bottom = rect.bottom;
}
function handleClick(event) {
    const newDiv = document.createElement('div');
    newDiv.className = 'circle';
    x = event.clientX - radius;
    y = event.clientY - radius;
    console.log(event.target)
    if (event.target.classList.value === 'box') {
        console.log('in box')
        newDiv.style.left = String(x) + "px";
        newDiv.style.top = String(y) + "px";
        newDiv.style.background = `var(--purple)`;
    } else {
        newDiv.style.left = String(x) + "px";
        newDiv.style.top = String(y) + "px";
        newDiv.style.background = 'white';
    }
    document.body.appendChild(newDiv);
}

function handleMove(event) {

}