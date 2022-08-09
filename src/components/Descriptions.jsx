import React from 'react'
import './descriptions.css'

const Descriptions = ({weather}) => {
    const cards = [
        {
            id: 1,
            title: "min",
            data: weather.main.temp_min,
            unit: "°C",
        },
        {
            id: 2,
            title: "max",
            data: weather.main.temp_max,
            unit: "°C",
        },
        {
            id: 3,
            title: "feels like",
            data: weather.main.feels_like,
            unit: "°C",
        },
        {
            id: 4,
            title: "pressure",
            data: weather.main.pressure,
            unit: "hPa",
        },
        {
            id: 5,
            title: "humidity",
            data: weather.main.humidity,
            unit: "%",
        },
        {
            id: 6,
            title: "wind speed",
            data: weather.wind.speed,
            unit: "m/s",
        },
    ];
  return (
    <div className="description">
        {cards.map(({id,title,data,unit}) => (
            <div key={id} className="card">
                <div className="description-card">
                    <small>{title}</small>
                </div>
                <h2>{data} {unit}</h2>
            </div>
        ))}
    </div>
  )
}

export default Descriptions