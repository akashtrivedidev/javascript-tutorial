/**
 * types of loops in javascript
 */

// creating new array
const names = new Array(5)
names.push('user1')

// traversing arrays and not objects
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// for traversing arrays
names.forEach(name => { console.log(name) })

const { personObjectArray } = require('./dataFile')
// for traversing objects
for (const person in personObjectArray) {
    if (Object.hasOwnProperty.call(personObjectArray, person)) {
        console.log(personObjectArray[person])
    }
}



