import Image from "next/image";
import React, { useState } from "react";

const WeatherCard = ({data}) => {
  console.log("data",data?.cod)
  let icon;
  if (data?.cod==404) {
    return <div className="bg-black/40 min-h-[200px] rounded-md p-1 md:p-2 text-white max-w-sm m-auto">
    <h1 className="text-2xl md:text-6xl text-center font-serif my-1 ">{"⚠️Not found"} </h1>
    <div className="text-xl flex items-center justify-between">
  </div>
  </div>

  }else{
    icon=data?.weather[0].icon;
    const url=`https://openweathermap.org/img/wn/${icon}.png`
  return (
    <div className="bg-black/40 min-h-[200px] rounded-md p-1 md:p-2 text-white max-w-sm m-auto">
      <h1 className="text-2xl md:text-6xl text-center font-serif my-1 ">{data? (data?.name):"⚠️Not found"} <small className="text-sm">{data?.sys.country}</small></h1>
      <div className="text-xl flex items-center justify-between">
      
       <div>
         <Image src={url} width={200} height={200} layout="responsive"
         />
        <h1>{data&& data?.weather[0].main}</h1>
       </div>
        <h1>{data?.main.temp}{data &&"°C"}</h1>
      </div>

      <div className="mt-2 grid grid-cols-3 p-2 gap-1">
        <div className="bg-black/40 p-1 rounded-sm text-center ">
          <h2 className="text-lg">Pressure</h2>
          <p className="text-sm">{data?.main.pressure}</p>
        </div>
        <div className="bg-black/40 p-1 rounded-sm text-center ">
          <h2 className="text-lg">Visibility</h2>
          <p className="text-sm">{data?.visibility}</p>
        </div>
        <div className="bg-black/40 p-1 rounded-sm  text-center">
          <h2 className="text-lg">Wind speed</h2>
          <p className="text-sm">{data?.wind.speed}</p>
        </div>
      </div>
    </div>

  );
  }
  
};

export default WeatherCard;
