// const hashCode = str =>
//     (
//         [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
//     ).toString(36)

const blockChain = (data, prev) => {
    let bc = {}
    if (prev === undefined) {
        prev = { index: 0, hash: "0", }
    }
    bc.prev = prev
    bc.data = data
    bc.index = bc.prev.index + 1
    bc.hash = bc.prev.hash
    bc.hash = hashCode([bc.index, bc.hash, JSON.stringify(bc.data)].join(''))
    bc.chain = (newBc) => blockChain(newBc, bc)
    return bc
}

// const first = blockChain({ a: 1 })
// const second = first.chain({ hello: 'world' })
// console.log(second)

// const blockChain = (a) => {
//     let bc = {}
//     bc.index = 1
//     bc.data = a
//     bc.hash = '0'
//     bc.hash = hashCode([bc.index,bc.hash,JSON.stringify(bc.data)].join(''))
//     bc.prev = { index: 0, hash: "0" }
//
//     bc.chain = (newBlock) => {
//         let newBC = {}
//         newBC.index = bc.index + 1
//         newBC.data = newBlock
//         newBC.hash = hashCode([newBC.index,bc.hash,JSON.stringify(newBC.data)].join(''))
//         newBC.prev = bc
//         return newBC
//     }
//     return bc
// }
