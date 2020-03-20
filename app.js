const request = require('request')

// const url = 'https://api.darksky.net/forecast/087f3f5563f6142cd4eab9fabd3477e1/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
    
//     if (error) {
//     console.log ('Unable to connect')

//     } else if (response.body.error) {
//             console.log('Unable to find location')

//     } else {console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is ' + response.body.currently.precipProbability + '% chance of rain')

//     }
    
    
// })



const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2lhcmFhbmRlcnNvbiIsImEiOiJjazgwa3Q0ZjQwZ2o1M2xyeXB1YWJzYzExIn0.gYDD5aJ3DQiWGXDpIDDV5Q&limit=1'

request ( { url: geocodeURL, json: true }, (error, response) => {
    

    if (error) {
        console.log ('Unable to connect')
        
    } else if (response.body.features.length === 0 ) {
         console.log('Unable to find location')
    } else {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)}


})