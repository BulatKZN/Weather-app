import { apiUrl, apiKey } from "./config";



export function getWeather (cityName : string) : Promise<any> {
    return fetch(`${apiUrl}?query=${cityName}&access_key=${apiKey}`).then((resp) => {
        return resp.json();
    }) 
}

