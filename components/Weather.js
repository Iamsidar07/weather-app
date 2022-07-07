import Image from "next/image";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [data,setData]=useState();

  const [keywords, setKeywords] = useState("Delhi");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  const getData = () => {
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${keywords}&units=metric&mode=JSON`,
      options
    )
    .then((response) => response.json())
    .then((response)=>setData(response))
    .catch((err) => console.error(err));
     console.log({data})
  };

  const getWeather = (e) => {
    e.preventDefault();
    getData();
    // console.log(weatherData.main)
    getRandomImage(keywords);
  };

  useEffect(() => {
    getData();
  }, []);

  const [imageURL, SetImageURL] = useState("https://source.unsplash.com/random/?delhi");
  const getRandomImage =async (keyword) => {
  
    const response= await fetch(`https://source.unsplash.com/random/?${keyword}`);
    SetImageURL(response.url);
    console.log(response,keyword)
  };

  //`https://source.unsplash.com/random/?${mausam}`
  // fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=delhi&units=imperial&mode=JSON', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));

  return (
    <div className="mt-40 min-h-screen">
      <div className="fixed z-[-1] min-h-screen top-0 left-0 right-0 bottom-0">
        <Image
          src={imageURL}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={imageURL}
          className="transition-all duration-300 ease-in"
        />
      </div>
      <Search
        funCall={getWeather}
        keywords={keywords}
        setKeywords={setKeywords}
      />
      <WeatherCard data={data} />
    </div>
  );
};

export default Weather;
