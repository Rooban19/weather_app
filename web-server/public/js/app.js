console.log("Javascript is running")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
console.log("Searchh", search)

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    console.log(location)
    console.log('testing')
    const url = "http://localhost:8000/weather?address=" + location
    console.log(url)

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data)
                console.log("Forecast", data.forecast)
                console.log("Location", data.location)

            }

        })

    })

})