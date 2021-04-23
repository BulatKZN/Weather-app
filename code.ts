const dateEl = document.querySelector('.date');
const timeEl = document.querySelector('.time');
const temperatureEl = document.querySelector('.temperature');
const humidityEl = document.querySelector('.humidity');
const pressureEl = document.querySelector('.pressure');
const visibilityEl = document.querySelector('.visibility');





let date = new Date();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];


dateEl.innerHTML = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} `;
setInterval(() => {
    date = new Date();
    timeEl.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
} , 1000) ;

const apiKey = '7155a3e99be9f1b890e8660d2eeb421d';
const apiUrl = 'http://api.weatherstack.com/current';

// Query parameters
// начинаются со знака ?
// после чего пишется название параметра - query
// ставится равно и пишется значение  - London
// ?query=London

fetch(`${apiUrl}?query=Kazan&access_key=${apiKey}`).then((resp) => {
    return resp.json();
}).then((resp) => {
    console.log(resp);

    // const temp = resp.current.temperature;
    // const pressure = resp.current.pressure;

    const {current: {temperature, pressure, humidity, visibility}} = resp;

    // const current = resp.current;
    // const {current} = resp;
    // console.log(temperature, pressure)
    temperatureEl.innerHTML = temperature;
    pressureEl.innerHTML = pressure;
    humidityEl.innerHTML = humidity;
    visibilityEl.innerHTML = visibility;

})

setInterval(() => {
    temperatureEl.innerHTML = temperature
},60000 );
