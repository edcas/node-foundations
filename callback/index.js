'use strict'

let average = (first, second, third, callback) => {
    setTimeout(function() {
        let average = (first + second + third) / 3 
        callback(average)
    })
}

average(5, 4, 5, function(res) {
    console.log(res)
})