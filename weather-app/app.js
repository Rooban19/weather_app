const request = require('request')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const yargs = require('yargs')
const address = process.argv[2]
console.log(process.argv)

if (!address) {
    console.log("Please enter the address")

} else {

    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            console.log(error)
        } else {
            forecast(latitude, longitude, (error, forecastdata) => {
                console.log(location)
                console.log(forecastdata)

            })

        }


    })

}