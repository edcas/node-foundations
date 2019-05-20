'use strict'

const courses = require('./courses').courses
const enrollStudent = require('./enroll').enroll

const options = {
    course: {
        demand: true,
        describe: 'Course identifier',
        alias: 'c',
        type: 'number',
    },
    name: {
        demand: true,
        describe: 'Student name',
        alias: 'n',
        type: 'string',
    },
    document: {
        demand: true,
        describe: 'Student\'s document',
        alias: 'd',
        type: 'number',
    }
}

const command = {
    enroll: 'enroll'
};

const argv = require('yargs')
    .detectLocale(false)
    .command(command.enroll, 'Enroll student in a course', options)
    .argv

const commandOutput = argv._[0];

if (command.enroll == commandOutput) {
    enrollStudent(argv.course, argv.name, argv.document)
} else {
    console.log('List of courses')
    courses.forEach((course, index) => {
        setTimeout(() => {
            console.log(`id: ${course.id}, name: ${course.name}, duration: ${course.duration}, cost: ${course.cost}`)
        }, index * 2000);
    });
}