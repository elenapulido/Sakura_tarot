
function random(array) {
    let tarot = [];
    for (let i = 0; i < 5; i++) {
        tarot.push(array.splice(Math.floor(Math.random() * array.length), 1));
    }
    return tarot
    
}



export default random