'use strict'

const fs = require('fs')
const courses = require('./courses').courses
const constants = require('./constants')

const enroll = (courseId, name, document) => {
    if (isNaN(courseId) || isNaN(document) || !(name.match(constants.regexLetters))) {
        console.log('Invalid data');
        return
    }

    const course = courses.find((course) => course.id == courseId)

    if (!course) {
        console.log('Course not found')
        return
    }

    saveEnroll(course, name, document)
}

let saveEnroll = (course, name, document) => {
    let content = `Student ${name} - ${document} enroll in course:` + '\n' +
        `id: ${course.id}, name: ${course.name}, duration: ${course.duration}, cost: ${course.cost}\n\n`

    fs.appendFile(constants.fileNameEnroll, content, (err) => {
        if (err) throw (err);
        console.log(content)
    })
}

module.exports = {
    enroll,
}