import React, { useEffect, useRef, useState } from "react";
import sun_icon from '../assets/sun.png'
import cloud_icon from '../assets/clouds.png'
import rain_icon from '../assets/raining.png'
import snow_icon from '../assets/snowflake.png'
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaSearch } from "react-icons/fa";

const WeatherUi = () => {
  const [weatherData, setWeatherData] = useState(false);
  const allIcons={
    "01d":sun_icon,
    "01n":sun_icon,
    "02d":cloud_icon,
    "02n":cloud_icon,
    "03d":cloud_icon,
    "03n":cloud_icon,
    "04d":rain_icon,
    "04n":rain_icon,
    "09d":rain_icon,
    "09n":rain_icon,
    "10d":rain_icon,
    "10n":rain_icon,
    "13d":snow_icon,
    "13n":snow_icon,
  }

  const inputRef = useRef();

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon=allIcons[data.weather[0].icon] || sun_icon
      setWeatherData({
        humidity: data.main.humidity,
        windSpeeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon:icon
      });
    } catch (error) {}
  };

  useEffect(() => {
    search("");
  }, []);

  return (
    <div className="h-screen w-full bg-gray-300">
      <div className=" flex absolute bg-white ml-52  mt-20 w-[80vw] h-[80vh] rounded-3xl py-96">
        <input
          ref={inputRef}
          type="text"
          className="absolute  shadow-lg -mt-72 ml-24 px-10 py-3 border-2 border-black rounded-2xl"
          placeholder="Search..."
        />
        <FaSearch
          className="absolute -mt-[273px] text-lg ml-[340px] cursor-pointer"
          onClick={() => search(inputRef.current.value)}
        />
        <div className="flex -mt-96">
          <h1 className=" mt-80 ml-20 text-6xl">{weatherData.location}</h1>
          <h1 className=" absolute mt-16 text-4xl ml-[40rem]">Weather App</h1>
          <h1 className="absolute text-9xl mt-64 ml-[42rem]">
            {weatherData.temperature}
            <span className="-mt-5 -ml-2 absolute text-7xl"> &deg; </span> C
          </h1>
          <h1 className=" absolute text-2xl mt-[30rem] ml-[43rem]">
            <span>
              <WiHumidity className="text-4xl" />
            </span>
            <br />
            {weatherData.humidity}%
          </h1>
          <h1 className=" absolute text-2xl mt-[30rem] ml-[53rem]">
            <span>
              <FaWind className="text-4xl" />
            </span>
            <br />
            {weatherData.windSpeeed} Km/Hr
          </h1>
        </div>
        <img src={weatherData.icon} alt="" className=" absolute h-[300px] w-[300px] object-contain ml-[69rem] -mt-44"/>
      </div>
    </div>
  );
};

export default WeatherUi;
