const add = ((a, b, callback) => {
    setTimeout(() => {
        console.log("2 mins up")
        callback(a + b)
    }, 2000)

})

add(1, 4, (sum) => {
    console.log(sum)
})