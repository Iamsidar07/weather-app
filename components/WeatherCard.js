import React, { useState } from "react";

const WeatherCard = ({data}) => {

  return (
    <div className="bg-black/40 min-h-[200px] rounded-md p-1 md:p-2 text-white max-w-sm m-auto">
      <h1 className="text-2xl md:text-6xl text-center font-serif my-1 ">{data?.name}</h1>
      <div className="text-xl flex items-center justify-between">
        <h1>{data?.main}</h1>
        <h1>{data?.temp}{data?.code=='200'&&"°C"}</h1>
      </div>

      <div className="mt-2 grid grid-cols-3 p-2 gap-1">
        <div className="bg-black/40 p-1 rounded-sm text-center ">
          <h2 className="text-lg">Pressure</h2>
          <p className="text-sm">{data?.pressure}</p>
        </div>
        <div className="bg-black/40 p-1 rounded-sm text-center ">
          <h2 className="text-lg">Visibility</h2>
          <p className="text-sm">{data?.visibility}</p>
        </div>
        <div className="bg-black/40 p-1 rounded-sm  text-center">
          <h2 className="text-lg">Wind speed</h2>
          <p className="text-sm">{data?.windSpeed}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
