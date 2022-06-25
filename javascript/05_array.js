const cars = ['mazda', 'ford', 'bmw', 'mersedes']
//const people = [
//    {name: 'Artem', budget: 4200},
//    {name: 'Mark', budget: 3500},
//    {name: 'Ben', budget: 1200}
//]
const fib = [1, 1, 2, 3, 5, 8, 13]
//f function
function addItemToEnd(){

}

// method
//cars.push('renault')
//cars.unshift('Volga')

//const firstCar = cars.shift()
//const lastCar = cars.pop()
//console.log(firstCar)
//console.log(lastCar)
//onsole.log(cars)

//console.log(cars.reverse())
//console.log(cars)

//const index = cars.indexOf('bmw')
//cars[index] = 'porsche'
//console.log(cars)

//let findedPerson
//for (const person of people) {
//    if (person.budget === 3500){
//        findedPerson = person
//    }
//}
//console.log(findedPerson)

//const index = people.findIndex(function(person){
//    return person.budget === 3500
//})
//const person = people.find(function(person){
//    return person.budget === 3500
//})
//const person = people.find(person => person.budget === 3500)
//console.log(person)

//console.log(cars.includes('mazda'));

//const upperCaseCars = cars.map(car => {
//    return car.toUpperCase()
//})

const pow2 = num => num ** 2
//const sqrt = num => Math.sqrt(num)

//const pow2Fib = fib.map(pow2).map(Math.sqrt)
//console.log(pow2Fib);

//const pow2Fib = fib.map(pow2)
//const filteredNumbers = pow2Fib.filter(num => {
//    return num > 20
//})
//console.log(pow2Fib)
//console.log(filteredNumbers)

// Задача 1
//const text = 'Привет, мы изучаем JavaScript'
//const reverseText = text.split('').reverse().join('')
//console.log(reverseText)

const people = [
    {name: 'Artem', budget: 4200},
    {name: 'Mark', budget: 3500},
    {name: 'Ben', budget: 1200}
]

const allBudget = people.filter(person => person.budget > 2000).reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)