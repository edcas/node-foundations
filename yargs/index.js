'use strict'

const options = {
    math: {
        default: 0,
        alias: 'm',
    },
    english: {
        default: 0,
        alias: 'l',
    },
    programming: {
        demand: true,
        alias: 'p',
    }
}

const argv = require('yargs')
    .command('average', 'Calculate the average', options)
    .argv

console.log(argv.math)
console.log(argv)
console.log('The average is ' + (argv.m + argv.l + argv.p) / 3)