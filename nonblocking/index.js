'use strict'

let average = (first, second, third) => {
    return (first + second + third) / 3
}

let averageSlow = (first, second, third) => {
    setTimeout(function() {
        console.log((first + second + third) / 3)
    }, 200)
}

console.log(averageSlow(2, 5, 4))
console.log(average(2, 3, 4))
console.log(average(2, 3, 4))
console.log(average(2, 3, 4))
console.log(average(2, 3, 4))
console.log(average(2, 3, 4))