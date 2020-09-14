const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoicm9vYmFuMTQiLCJhIjoiY2tlOWs2eDh0MHRxMjJ1cHh5MmpqMTU4OSJ9.k8uhLHsfDPS9QjNFq97smA&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("connect your internet", undefined)
        } else if (body.features.length === 0) {
            callback("No city found", undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }

    })
}

module.exports = geocode