export {getArchitects, getClassical, getActive, getBonannoPisano}

const getArchitects = () => {
    // let arch = [].slice.call(document.getElementsByTagName("a"));
    // let notArch = [].slice.call(document.getElementsByTagName("span"));

    const arch = document.getElementsByTagName("a");
    const others = document.getElementsByTagName("span");
    return [[...arch], [...others]]
}

const getClassical = () => {
    // const classical = document.getElementsByClassName("classical")
    // const baroque = document.getElementsByClassName("baroque")
    // const modern = document.getElementsByClassName("modern")
    // return [[...classical], [...baroque, ...modern]]

    const classical = document.querySelectorAll(".classical")
    const baroque = document.querySelectorAll(".baroque")
    const modern = document.querySelectorAll(".modern")

    return [[...classical], [...baroque, ...modern]]

    // const classical = document.querySelectorAll("a.classical")
    // const baroque = document.querySelectorAll("a:not(.classical)")
    // return [[...classical], [...baroque]]
}

const getActive = () => {
    const classicalActive = document.querySelectorAll("a.classical.active")
    const classicalNotActive = document.querySelectorAll("a:not(.classical.active)")
    return [[...classicalActive], [...classicalNotActive]]
}

const getBonannoPisano = () => {
    const bonannoP = document.getElementById('BonannoPisano')
    const classicalActive = document.querySelectorAll("a.classical.active")
    return [bonannoP, [...classicalActive]]
}