// Напишите функцию, которая получает на вход массив чисел и вычисляет сумму всех положительных чисел.

function summPositive(arr){
    let summ = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            summ = summ + arr[i]
        }
    }
    return summ
}

console.log(summPositive([2, -1, -7, 33, -2, 5]))