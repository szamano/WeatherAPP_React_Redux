import axios from 'axios';

const API_KEY='252b0bffb177be08fa4ca99cda9b1f7f';
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//`` zamiast + API_KEY

export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city}, us`;
    const request=axios.get(url);
    
    console.log('Request:', request);
    
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}