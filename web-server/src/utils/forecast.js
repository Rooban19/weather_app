const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=820090a258a5fad10ded503f9e44f5ec&query=' + longitude + ',' + latitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("connect your internet", undefined)
        } else if (body.success === false) {
            callback("No city found", undefined)
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike

            })
        }
    })

}
module.exports = forecast