// Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
// Пример:
// ([1, 2, 3, 'Да'], [1, 2, 3, 'Да']) => true

function twoArr(arr1, arr2) {
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }
    } else {
        return false
    }
    return true
}

console.log(twoArr([1, 2, 3, 'Да'], [1, 2, 3, 'Да']))
console.log(twoArr([1, 2, 3, 'Да'], [1, 2, 3]))
console.log(twoArr([1, 2, 3], [1, 2, 3, 'Да']))
console.log(twoArr([6, 8, 1, 'Да'], [1, 2, 3, 'Да']))