import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WeatherContainer, Temp, City } from './WeatherStyles';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Kaliningrad,ru&units=imperial&appid=93d63d7cd3c6216d515f6ff8c3125629';

const Weather = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    console.log(data);

    if(!data) return null;

  return (
    <WeatherContainer>
        <Temp>{data.main.temp.toFixed(1)}&#176; F</Temp>
        <City>Kaliningrad, KGD</City>
    </WeatherContainer>
  )
}

export default Weather;