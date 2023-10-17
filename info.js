/*const person = {
    age: 25,
    name: 'Bob'
}

const person2 = Object.assign({}, person)

person2.age = 33;
person2.name = 'Dilan'

console.log(person)
console.log(person2)*/

const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/'

try {
    const data = await getData(url)
    console.log(data)
} catch(error) {
    console.log(error.message)
}



