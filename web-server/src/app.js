const express = require('express')
const path = require('path')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const app = express()

hbs.registerPartials(path.join(__dirname, '../templates/partials'))

publicdirpath = path.join(__dirname, '../public')
app.use(express.static(publicdirpath))
app.set('views', path.join(__dirname, '../templates/views'))
app.set('view engine', 'hbs')


app.get('', (req, res) => {
    res.render('index', {

        name: 'Weather',
        title: 'nodejs'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'About me',
        title: 'nodesjs'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        name: 'Help pageS',
        title: 'nodesdjs'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        res.send({
            error: 'provide the address'
        })
    } else {
        geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
            if (error) {
                return res.send("Address is invalid")
            } else {
                forecast(latitude, longitude, (error, forecastdata) => {
                    console.log(location)
                    console.log(forecastdata)
                    res.send({
                        forecast: forecastdata,
                        location: location,
                        addresses: req.query.address
                    })


                })

            }


        })


    }


})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errormessage: "Help Page is Not Foundd"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errormessage: "404"
    })
})



app.listen(8000, () => {
    console.log("ServerResponse ")
})