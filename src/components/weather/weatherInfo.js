import React from 'react';
import styles from './weatherInfo.module.css';

const WeatherInfo = ({ weather }) => {
  return (
    <section className={styles.mainInfo}>
        <div className={styles.city}>{weather?.location?.name}</div>
        <div className={styles.country}>{weather?.location?.country}</div>
        <div className={styles.row}>
            <div>
                <img src={`http:${weather?.current?.condition?.icon}`} alt={weather?.current.condition.text} width="128" />
            </div>
            <div className={styles.weatherConditions}>
                <div className={styles.condition}>{weather?.current?.condition.text}</div>
                <div className={styles.current}>{weather?.current?.temp_c}º</div>
            </div>
        </div>
        <iframe title={weather?.location.name} src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d250963.14639582476!2d${weather.location.lon}5!3d${weather.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1666886528290!5m2!1ses-419!2scl`} width="700" height="550" style={{ border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default WeatherInfo;