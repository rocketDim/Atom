// Тенис

function crissCross(a, b) {
    let arr = []
    for (let i = 0; i < a; i++) {
        let newStr = ''
        for (let j = 0; j < b; j++) {
            if (Math.round(Math.random())) {
                newStr += 'X '
            } else {
                newStr += 'O '
            }
        }
        arr.push(newStr)
    }
    return arr.join('\n')
}
// console.log(crissCross(3, 6))

function movingBall() {
    const arr = ['🤖', '⬛️', '⬛️', '⬛️', '⬛️', '⬛️', '⬛️', '⬛️', '👽']

    const ball = '🥎️'
    let position = 0
    let direction = 'right'

    setInterval(() => {
        console.clear()
        if (position === arr.length - 2) {
            direction = 'left'
        }
        if (position === 1) {
            direction = 'right'
        }
        if (arr.length - 2 > position && direction === 'right') {
            position += 1
            arr[position] = ball
            console.log(arr.join(''))
            arr[position] = '⬛️'
        }
        if (position > 1 && direction === 'left') {
            position -= 1
            arr[position] = ball
            console.log(arr.join(''))
            arr[position] = '⬛️'
        }
    }, 400)
}
movingBall()