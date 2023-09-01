let apikey = '598587270b43200f73894593acfab269'
let apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
let inputfield = document.querySelector('.search input')
let searchbutton = document.querySelector('.search button')
let weathericon = document.querySelector('.weather-icon')
let weather = document.querySelector('.weather')
let error = document.querySelector('.error')

async function checkweather(city) {
    let response = await fetch(apiurl + city + `&appid=${apikey}`)

    if (response.status == 404) {
        error.style.display = 'block'
        weather.style.display = 'none'
    }
    else {
        let data = await response.json()



        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr"


        if (data.weather[0].main == 'Clouds') {
            weathericon.src = "clouds.png"
        }
        else if (data.weather[0].main == 'Clear') {
            weathericon.src = "clear.png"
        }
        else if (data.weather[0].main == 'Drizzle') {
            weathericon.src = "drizzle.png"
        }
        else if (data.weather[0].main == 'Mist') {
            weathericon.src = "mist.png"
        }
        else if (data.weather[0].main == 'Rain') {
            weathericon.src = "rain.png"
        }
        else if (data.weather[0].main == 'Snow') {
            weathericon.src = "snow.png"
        }

        weather.style.display = 'block'
        error.style.display = 'none'

    }
    


}


searchbutton.addEventListener('click', function () {
    checkweather(inputfield.value)
})

inputfield.addEventListener('keyup',function(e){
    if(e.key=='Enter'){
        checkweather(inputfield.value)
    }
})

