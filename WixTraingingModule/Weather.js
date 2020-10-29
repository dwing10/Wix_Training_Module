import { fetch } from 'wix-fetch';

export function getCurrentTemp(city) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const key = '3b85a10839f538a8255ba950989a6fc1';

    let fullurl = url + city + '&appid=' + key + '&units=imperial';
    console.log(fullurl);

    return fetch(fullurl, { method: 'get' })
        .then(response => response.json())
}