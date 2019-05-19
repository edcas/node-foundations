'use strict'

const {student, average} = require('./record')
const fs = require('fs')

console.log(student)
console.log(average(2, 3, 4))

let createFile = (student) => {
    let content = 'The name of the student is ' + student.name;

    fs.writeFile('./require/student.txt', content, (err) => {
        if (err) throw (err);
        console.log('The file has been created.')
    })
}

createFile(student);

