import React, { useState } from 'react';
import styles from './weatherForm.module.css';

const WeatherForm = ({ onChangeCity }) => {
    const [city, setCity] = useState('');

    const handleChange = (e) => {
        if(e.target.value !== '') setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onChangeCity(city);
    }

    return (
        <form className={styles.container} onSubmit={city !== '' ? handleSubmit : undefined }>
            <input className={styles.input} type='text' onChange={(e) => handleChange(e)}></input>
        </form>
    )
}

export default WeatherForm;