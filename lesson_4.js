// Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null
// Пример:
// [0, 1, false, 2, undefined, '', 3, null, 'Да'] => [1, 2, 3, 'Да']

function removeFalsy(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeFalsy([0, 1, false, 2, undefined, '', 3, null, 'Да', true, {}]))