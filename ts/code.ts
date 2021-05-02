
import {findColor} from "./utilities";
import {getWeather} from "./api";



const dateEl = document.querySelector('.date');
const timeEl = document.querySelector('.time');
const temperatureEl = document.querySelector('.temperature');
const humidityEl = document.querySelector('.humidity');
const pressureEl = document.querySelector('.pressure');
const visibilityEl = document.querySelector('.visibility');
const centerEl = document.querySelector('.center');
const citySelectEl: HTMLSelectElement = document.querySelector('.city-select');





let date = new Date();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];


dateEl.innerHTML = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} `;
setInterval(() => {
    date = new Date();
    timeEl.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
} , 1000) ;

let cityName = localStorage.getItem('cityName') || 'kazan';

citySelectEl.value = cityName;


citySelectEl.addEventListener('change', (event) => {
    cityName = citySelectEl.value;
    // document.cookie = `cityName=${cityName}`;
    localStorage.setItem('cityName', cityName);
    updateWeather();
})




// Query parameters
// начинаются со знака ?
// после чего пишется название параметра - query
// ставится равно и пишется значение  - London
// ?query=London

updateWeather();

setInterval(() => {
    updateWeather();
}, 15000);

function updateWeather () {
    getWeather(cityName).then((resp) => {
        let {current} = resp;
        console.log(resp)
        updateValues(current);
    })
}



function updateValues ({temperature, pressure, humidity,visibility}) {
    temperatureEl.innerHTML = temperature;
    pressureEl.innerHTML = pressure;
    humidityEl.innerHTML = humidity;
    visibilityEl.innerHTML = visibility;

    const color = findColor(temperature);

    centerEl.classList.remove('yellow','red');
    centerEl.classList.add(color);
}

// fetch(`${apiUrl}?query=Kazan&access_key=${apiKey}`).then((resp) => {
//     return resp.json();
// }).then((resp) => {
//     console.log(resp);

//     // const temp = resp.current.temperature;
//     // const pressure = resp.current.pressure;

//     const {current: {temperature, pressure, humidity, visibility}} = resp;

    // const current = resp.current;
    // const {current} = resp;
    // console.log(temperature, pressure)
    

// })


