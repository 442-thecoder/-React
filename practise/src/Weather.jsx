// // src/Weather.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css'

// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [city, setCity] = useState('New York'); // Default city

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
//         );
//         setWeatherData(response.data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     fetchWeatherData();
//   }, [city]);

//   const handleChange = (event) => {
//     setCity(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Weather App</h1>
//       <input type="text" value={city} onChange={handleChange} />
//       {weatherData && (
//         <div>
//           <h2>{weatherData.name}, {weatherData.sys.country}</h2>
//           <p>{weatherData.weather[0].description}</p>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;
