const request = require('postman-request')

const forecast=(address, callback) =>{
    const url= 'http://api.weatherstack.com/current?access_key=5a9135adfd5a0989e86d0a45b0828bac&query='+address

    request({url, json: true}, (error, {body}= {})=> {    
        if (error) {
            callback('Please check your connection!', undefined)
        } else if (body.error) {
            callback('Unable to find the location!', undefined)
        } else {
            callback(undefined, body.location.name+', '+body.location.region+', '+body.location.country +'. '+ body.current.weather_descriptions[0]+'. It is currently '+ body.current.temperature+' degrees out. It feels like '+ body.current.feelslike+' degrees out.')
        }
    })
}

module.exports = forecast

// // const chalk = require('chalk')
// const request = require('postman-request')
// // const yargs = require('yargs')
// // const yargs = require('yargs')

// // const address= process.argv[2]

// const weather=(address) => {
//     const url= 'http://api.weatherstack.com/current?access_key=5a9135adfd5a0989e86d0a45b0828bac&query='+address

//     request({url, json:true}, (error, {body})=> {    
//         if (error) {
//             return 'Unable to connect!'
//         } else if (body.error) {
//             return 'Unable to find the location!'
//         } else {
//             return body.location.name+', '+body.location.region+', '+body.location.country + '.<br>' + body.current.weather_descriptions[0]+'.<br> It is currently '+ body.current.temperature+' degrees out. It feels like '+ body.current.feelslike+' degrees out.'
//         }
//     })
// } 

