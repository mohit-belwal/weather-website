const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

// Defining paths for Express config
const publicDirectoryPath= path.join(__dirname, '../public')
const viewsPath= path.join(__dirname, '../templates/views')
const partialsPath= path.join(__dirname, '../templates/partials')

// Setting up handlebars engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setting up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) =>{
    res.render('home', {
        title: 'Welcome to home page',
        name: 'user'
    })
})

app.get('/about', (req, res) =>{
    res.render('about', {
        title: 'This is about section',
        name: 'user'
    })
})

app.get('/help', (req, res) =>{
    res.render('help', {
        title: 'This is help section',
        name: 'user'
    })
})


app.get('/weather', (req, res) =>{
    if(!req.query.address){
        return res.send({
            error:'Address not provided'
        })
    }
    
    forecast(req.query.address, (error, forecastData)=>{
        if(error){
            // return res.send('Unable to connect!')
            return res.send({error})
        }
        res.send({
            forecast: forecastData,
            location: req.query.address
        })
    })
})

app.get('/help/*', (req, res) =>{
    res.render('error', {
        title: '404: Error',
        name: 'user',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) =>{
    res.render('error', {
        title: '404: Error',
        name: 'user',
        errorMessage: 'Page not found'
    })
})

app.listen(port, () =>{
    console.log('Server is up on port '+port)
})