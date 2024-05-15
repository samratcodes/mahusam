import React from 'react';



const Main = () => {
    // Dummy data for testing
    const dummyData= {
        base: 'stations',
        coord: {
            lat: 27.7167,
            lon: 85.3167
        },
        main: {
            feels_like: 24.15,
            humidity: 60,
            pressure: 1019,
            temp: 24.12,
            temp_max: 24.12,
            temp_min: 24.12
        },
        visibility: 7000,
        name: 'Kathmandu',
        sys: {
            country: 'NP'
        },
        weather: [{
            description: 'thunderstorm',
            icon: '11n',
            id: 211,
            main: 'Thunderstorm'
        }],
        wind: {
            deg: 240,
            speed: 3.09
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
            <div className="p-6">
                <h1 className="text-2xl font-semibold text-center mb-4">Weather in {dummyData.name}, {dummyData.sys.country}</h1>
                <div className="flex justify-between mb-4">
                    <div>
                        <p>Temperature: {dummyData.main.temp} °C</p>
                        <p>Feels like: {dummyData.main.feels_like} °C</p>
                        <p>Description: {dummyData.weather[0].description}</p>
                    </div>
                    <div>
                        <p>Humidity: {dummyData.main.humidity}%</p>
                        <p>Pressure: {dummyData.main.pressure} hPa</p>
                        <p>Wind: {dummyData.wind.speed} m/s</p>
                    </div>
                </div>
                <div className="text-center">
                    <p>Visibility: {dummyData.visibility} meters</p>
                </div>
            </div>
        </div>
    );
};

export default Main;
