// Напишите функцию, которая  возводит в  квадрат все чётные числа целочисленного массива.
// Пример
// [1, 4, 3, 0, 2, 5, 6]  //  => [1, 16, 3, 0, 4, 5, 36]

function getSquare(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i] ** 2)
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(getSquare([1, 4, 3, 0, 2, 5, 6]))