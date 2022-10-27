import React, { useState, useEffect } from 'react';
import WeatherForm from './weatherForm';
import WeatherInfo from './weatherInfo';
import Loading from '../loading/loading';
import styles from './weatherApp.module.css';

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        loadInfo();
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ''}`;
    }, [weather])

    const loadInfo = async (city = 'london') => {
        try {
            const req = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_APIKEY}&q=${city}&aqi=no`);
            const res = await req.json();
            setWeather(res);
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleChangeCity = (city) => {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <main className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity} />
            {!weather ? <Loading /> : <WeatherInfo weather={weather} />}
        </main>
    )
}

export default WeatherApp;