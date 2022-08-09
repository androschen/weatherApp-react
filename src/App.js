import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState}  from 'react';
import Descriptions from './components/Descriptions';

const api ={
  key: "2695c02f70c98c398ff756ff8d0cc4da",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather,setWeather] = useState({});

  const search = evt => {
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('')
          console.log(result);
        });

    }
  }
  
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'App warm' : 'App') : 'App'}>
     <main>
      <h1 className='title'>Weather App Using React</h1>
      <div className='search-box'>
        <input type="text" className='search' placeholder='Search...' 
            onChange={e => setQuery(e.target.value)}
            value = {query}
            onKeyPress={search}
          />
      </div>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div className='location-box'>
            <div className='location'>
              {weather.name}, {weather.sys.country}
            </div>
            <div className='date'>
              {dateBuilder(new Date())}
            </div>
          </div>
          <div className='weather-box'>
            <div className='temp'>
              {Math.round(weather.main.temp)}°C
            </div>
            <img src=''/>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
          <Descriptions weather={weather}/>
        </div>
      ) : ('')}

     </main>
    </div>
  );
}

export default App;
