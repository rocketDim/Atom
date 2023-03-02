// Напишите функцию, которая принимает на вход массив и разворачивает его в обратном порядке, не используйте array.reverse()
// Пример:
// [1, 2, 3] => [3, 2, 1]

function reverseArr(arr) {
    const newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

console.log(reverseArr(['Мама', 'мыла', 'раму', 'ДА!']))
