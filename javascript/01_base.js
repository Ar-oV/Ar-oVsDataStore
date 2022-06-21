// 1 переменные// 
//
//const firstName = 'Artem'
//const lastName = 'Popov'
//const age = 26
//const isProgrammer = true 
//
//const _ = 'private'
//const $ = 'some value'
//
// const if = 'mkef' // err
//const withNum5 = '5'
// const 5withNum = 5 // err

// 2 мутирование
// console.log('Имя человека ' + firstName + ', а возраст человека ' + age)
//alert('Имя человека ' + firstName + ', а возраст человека ' + age)
//
//const lastName = prompt('Введите фамилию')
//alert(firstName + ' ' + lastName)

// 3 Операторы
//let currentYear = 2022
//const birthYear = 1995

//const age = currentYear - birthYear
//const a = 10
//const b = 5

//let c = 32
//c = c + a 
//c += a
//c -= a
//c *= a
//c /= a

//console.log(a+b)
//console.log(a-b)
//console.log(a*b)
//console.log(a/b)
//console.log(++currentYear)
//console.log(--currentYear)
//console.log(c)

// 4 Типы данных
//const isProgrammer = true;
//const name = 'Artem';
//const age = 26;
//let x
//null
//console.log(typeof isProgrammer); boolean
//console.log(typeof name); string
//console.log(typeof age); number
//console.log(typeof x); undefined
//console.log(null); null

// 5 Приоритет операторов
//const fullAge = 26;
//const birthYear = 1995;
//const currentYear = 2022;
// > < >= <=
//const isFullAge = currentYear - birthYear >= fullAge; // 26 >= 27 => true
//console.log(isFullAge)

// 6 Условные операторы
//const courseStatus = 'ready' // ready, fail, pending

/*if (courseStatus === 'ready') {
    console.log('Курсе уже готов и его можно проходить')
} else if (courseStatus === 'pending') {
    console.log('Курсе пока находится в процессе разработки')
}else if (courseStatus === 'fail') {
    console.log('Курсе не готов')
}*/
//const isReady = true

//if (isReady) {
//    console.log('Все готово')
//} else {
//    console.log('Все не готово')
//}

// Тернарное выражение
//isReady ? console.log('Все готово') : console.log('Все не готово')

//const num1 = 42 // number
//const num2 = '42' // string

//console.log(num1 === num2)

// 7 Булевая логика
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
//var a1 =  true && true;     // t && t returns true
//var a2 =  true && false;    // t && f returns false
//var a3 = false && true;     // f && t returns false
//var a4 = false && (3 == 4); // f && f returns false
//var a5 = 'Cat' && 'Dog';    // t && t returns Dog
//var a6 = false && 'Cat';    // f && t returns false
//var a7 = 'Cat' && false;    // t && f returns false

// 8 Функции
//function calculateAge(year){
//    return 2022 - year
//}
//console.log(calculateAge(1995))
//console.log(calculateAge(1495))
//console.log(calculateAge(2005))

//function logInfoAbout(name, year) {
//    const age = calculateAge(year)
//
//    if (age > 0) {
//        console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//    } else {
//        console.log('Вообще то это уже будущее')
//    }
//
//}

//logInfoAbout('Артем', 1995)
//logInfoAbout('Адеша', 2025)

// 9 Массивы
//const cars = ['Мазда','Мерседес','Форд']
//const cars = new Array('Мазда','Мерседес','Форд')
//console.log(cars.length)
//console.log(cars[1])
//console.log(cars[0])
//console.log(cars[2])

//cars[0] = 'Porsche'
//console.log(cars[0])
//cars[cars.length] = 'Mazda'
//console.log(cars)

// 10 циклы
//const cars = ['Мазда','Мерседес','Форд','Porsche']
//
//for (let i = 0; i < cars.length; i++){
//    const car = cars[i]
//    console.log(car)
//}
//
//for (let car of cars){
//    console.log(car)
//}

// 11 объекты
//const person = {
//    firstName: 'Artem',
//    lastName: 'Popov',
//    year: 1995,
//    languages: ['Ru', 'En'],
//    hasWife: true,
//    greet: function(){
//        console.log('greet from person')
//    }
//}
//console.log(person.firstName)
//console.log(person['lastName'])
//const key = 'year'
//console.log(person[key])
//person.isProgrammer = true
//console.log(person)
//person.greet()

