const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            console.log(arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    console.log(arr)
}
const testArray = [12, 45, 34, 1, 564, 122, 9]
bubbleSort(testArray)




