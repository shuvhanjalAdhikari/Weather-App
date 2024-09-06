import React, { useState } from 'react'

import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { IoIosSunny } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const WeatherUi = () => {

    const [Temp, setTemp]=useState(10)
    const [Search, setSearch]=useState("")

    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }


  return (
    <div className='h-screen w-full bg-gray-300'>
      <div className=' flex absolute bg-white ml-52  mt-20 w-[80vw] h-[80vh] rounded-3xl py-96'>
        <input type="text" className='absolute  shadow-lg -mt-72 ml-24 px-10 py-3 border-2 border-black rounded-2xl' placeholder='Search...' value={Search} onChange={handleSearch} /><FaSearch className='absolute -mt-[273px] text-lg ml-[340px] cursor-pointer'/>
        <div className='flex -mt-96'>
            <h1 className=' mt-64 ml-20 text-6xl'>Kathmandu</h1>
            <h1 className='mt-16 text-4xl ml-60'>Weather App</h1>
            <h1 className='absolute text-9xl mt-64 ml-[42rem]'>{Temp}<span className='-mt-5 -ml-2 absolute text-7xl'> &deg; </span> C</h1>
            <h1 className=' absolute text-2xl mt-[30rem] ml-[40rem]'><span><WiHumidity className='text-4xl' /></span><span>91%</span><br />Humidity</h1>
            <h1 className='text-2xl mt-[30rem] mr-24'><span><FaWind className='text-4xl'/></span><span>3.4 Km/Hr</span><br />Wind Speed</h1>   
        </div>
        <IoIosSunny className='text-[300px]  absolute -mt-52 ml-[70rem] text-yellow-500' />
      </div>
    </div>
  )
}

export default WeatherUi
