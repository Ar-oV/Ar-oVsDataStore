// String
//const name = 'Артем'
//const age = 26

//function getAge() {
//    return age
//}

//const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
//const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет.`
//console.log(output)

//const output = `
//<div>This is div</div>
//<p>This is o</p>
//`
//console.log(output)

//const name = 'Артем'
//console.log(name.length)
//console.log(name.toUpperCase())
//console.log(name.toLowerCase())
//console.log(name.charAt(2))
//console.log(name.indexOf('ем'))
//console.log(name.toLowerCase().startsWith('артем'))
//console.log(name.startsWith('Артем'))
//console.log(name.endsWith('ем!'))
//console.log(name.repeat(10))
//const string = '      password      '
//console.log(string.trim())
//console.log(string.trimLeft())
//console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Артем'
const personName2 = 'Марк'
const personAge = 26
const personAge2 = -10
const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output)
console.log(output2)