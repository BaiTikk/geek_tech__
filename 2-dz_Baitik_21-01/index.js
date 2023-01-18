let counter = 0
let interval = setInterval( () => {
    if (counter < 60 ) {
        counter++
        console.log(counter)
    }else {
        clearInterval(interval)
    }
}, 1000)

/////////////////////////////////////////////////////////////////////////////////////////

const box = document.querySelector(".box")
console.log(box)

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 440 && positionY <= 0) {
        positionX += 16
        box.style.left = `${positionX}px`
        setTimeout(move, 100)
    } else if (positionY <= 440 && positionX >= 440 ) {
        positionY += 16
        box.style.top = `${positionY}px`
        setTimeout(move, 100)
    } else if (positionX > 0 && positionY >= 440) {
        positionX -= 16
        box.style.left = `${positionX}px`
        setTimeout(move, 100)
    } else if (positionY >= 0 && positionX <= 0) {
        positionY -=16
        box.style.top = `${positionY}px`
        setTimeout(move, 100)
    }
}
move()