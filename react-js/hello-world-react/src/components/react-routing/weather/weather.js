import React, { useState } from 'react';

const WeatherApp = () => {

    // Note: Handeling states here...!
    const [searchWeather, setSearchWeather] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [weatherImage, setWeatherImage] = useState("");

    const searchWeatherHandler = async (e) => {
        if (e.key == "Enter") {
            try {
                let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather.toLowerCase()}&units=metric&appid=4fcd41771cc91187db1651ddcc10916f`;

                let response = await fetch(apiUrl);
                let dataInJSON = await response.json();
                console.log(dataInJSON);

                if (dataInJSON) {
                    setWeatherData(dataInJSON);
                    setWeatherImage(dataInJSON.weather[0].main);
                    setSearchWeather("");
                };
            }

            catch (error) {
                console.log("Error in Weather API: ", error);
            };
        };
    };

    return (
        <>
            <h1> Weather App </h1>
            <input
                type={'text'}
                placeholder="Search City"
                value={searchWeather}
                onChange={(e) => { setSearchWeather(e.target.value) }}
                onKeyPress={searchWeatherHandler}
            />

            {
                (weatherData != null)
                    ?
                    (
                        <div>
                            <h1> City Name: {weatherData.name} </h1>
                            <h2> Temperature: {weatherData.main.temp} </h2>
                            <h3> {weatherData.weather[0].main} </h3>
                        </div>
                    )
                    :
                    (<h1>
                        Please Enter City
                    </h1>)
            }
        </>
    );
};

export default WeatherApp;