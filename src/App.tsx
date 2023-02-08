import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

export default function App() {
  const [city, setCity]:any = useState()
  const cities = ['Riyadh', 'Jeddah', 'Makkah', 'Abha', 'Tabuk'];
  const [cityName, setCityName]:any = useState(cities[0])
  const api =`http://api.weatherapi.com/v1/current.json?key=5fb3638ac08644ad88b181609230702&q=${cityName}&aqi=no`;

      useEffect(()=> {
        axios.get(api).then(res=> {
          console.log(res.data);
          setCity(res.data)
        })
      }, [api])

  return (
    <div className="main">
      <select 
       value={cityName} 
       onChange={e => setCityName(e.target.value)}
       >
        {cities.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>

      <div className='weatherInfo'>
        {city? <p>Weather in {city.location.name}</p> : null}
        {city? <img src={city.current.condition.icon} /> : null}
        {city? <p>Temp: {city.current.temp_c} C</p> : null}
        {city? <p>Humidity: {city.current.humidity} </p> : null}
        {city? <p>Wind speed: {city.current.wind_mph} km/h</p> : null}
      </div>
    </div>
  )
}
