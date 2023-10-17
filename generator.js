function getLetter(str, num) {
    let summ = ''
    for (let i = 0; i < num; i++) {
        if (Math.round(Math.random()) === 1) {
            summ = summ + str[Math.floor(Math.random() * str.length)].toUpperCase()
        } else {
            summ = summ + str[Math.floor(Math.random() * str.length)]
        }
    }
    return summ
}

console.log(getLetter('abcdefghjoi', 5))
console.log(getLetter('абвгдеёжзи', 20))