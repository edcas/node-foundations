'use strict'

const student = {
    name: 'John Doe',
    age: 25,
    notes: {
        math: 3,
        english: 4,
        programming: 5
    }
};

let average = (note_one, note_two, note_three) => (note_one + note_two + note_three) / 3;

module.exports = {
    student,
    average
}