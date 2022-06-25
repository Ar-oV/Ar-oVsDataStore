const person = {
    name: 'Artem',
    age: 26,
    isProgrammer: true,
    languages: ['ru','en','de'],
    //'complex key': 'Complex Value',
    //['key_'+ (1 + 3)]: 'Computed Key', // key_4
    greet(){
        console.log('greet form person')
    },
    info() {
        //console.log('this:', this)
        console.info('Информация про человека по имени:', this.name)
    }
}
//console.log(person.name)
//const addKey = 'age'
//console.log(person[addKey])
//console.log(person['complex key'])
//person.greet()
//
//person.age++
//person.languages.push('by')
//person['key_4'] = undefined
//delete person['key_4']
//console.log(person)
//console.log(person['key_4']) 

//const name = person.name
//const age = person.age
//const languages = person.languages
//              =
//const {name, age: personAge, languages} = person
//console.log(name, personAge, languages)

//console.log(person)

//for(let key in person) {
//    if (person.hasOwnProperty(key)) {
//        console.log('key:', key)
//        console.log('value:', person[key])
//    }
//}

//Object.keys(person).forEach((key) => {
//    console.log('key:', key)
//    console.log('value:', person[key])
//})
//console.log(keys)

// Context
//person.info()

const logger = {
    keys(){
        console.log('Object Keys: ', Object.keys(this))
    },
    keysAndValues(){
        //Object.keys(this).forEach( key => {
        //    console.log(`"${key}": ${this[key]}`)
        //})
        //const self = this
        Object.keys(this).forEach( function(key) {
            console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },
    withParams (top = false, between = false, bottom = false) {
        if (top) {
            console.log('______START______')
        }
        Object.keys(this).forEach( (key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length -1) {
                console.log('_________________')
            }
        })
        if (bottom) {
            console.log('______END______')
        }
    }
}
//const bound = logger.keys.bind(person)
//bound()
//                  =
//logger.keys.call(person)
//logger.keysAndValues.call(person)

logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])