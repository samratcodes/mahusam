import { useSelector } from 'react-redux';
import clear from '../assets/clear.png';
import clouds from '../assets/clouds.png';
import drizzle from '../assets/drizzle.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import humidityIcon from '../assets/humidity.png';
import wind from '../assets/wind.png';
import { FaTemperatureHigh } from "react-icons/fa";
import { MdQueryStats } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { GiDeadlyStrike } from "react-icons/gi";

interface Weather {
  name: string;
  sys: {
    country: string;
  };
  weather: [
    {
      main: string;
      description: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  visibility: number;
}

const dummyWeatherData: Weather = {
  name: "London",
  sys: {
    country: "GB",
  },
  weather: [
    {
      main: "Clouds",
      description: "broken clouds",
    }
  ],
  main: {
    temp: 15,
    feels_like: 13,
    pressure: 1015,
    humidity: 72,
  },
  wind: {
    speed: 5,
  },
  visibility: 10000,
};

const Main = () => {
  // Fetch weather data from Redux store
  const weatherData: Weather = useSelector((state: any) => state.weather.weatherData) || dummyWeatherData;

  // Function to get weather icon based on weather condition
  const getWeatherIcon = (weatherMain: string): string | undefined => {
    switch (weatherMain) {
      case 'Clear':
        return clear;
      case 'Clouds':
        return clouds;
      case 'Drizzle':
        return drizzle;
      case 'Rain':
        return rain;
      case 'Snow':
        return snow;
      default:
        return undefined;
    }
  };

  return (
    <div className="flex justify-center container">
      <div className="w-full md:w-4/5 mb-6 p-2 sm:p-4 bg-white rounded-3xl">
        <div className="sm:p-6">
          <h1 className="text-4xl font-semibold text-center mb-6 text-blue-800">
            Weather in {weatherData.name}, {weatherData.sys.country}
          </h1>
          {weatherData ? (
            <div className="w-full flex flex-col items-center justify-between">
              <div className="flex items-center justify-center">
                <img src={getWeatherIcon(weatherData.weather[0].main)} alt={weatherData.weather[0].main} className="w-48 sm:w-52" />
              </div>
              <div className="w-full sm:w-4/5 flex flex-col justify-between items-end bg-gray-200 my-3 p-4 rounded-3xl md:flex-row">
                <div className="flex flex-col">
                  <p className="text-2xl flex justify-center items-center font-semibold text-gray-600 m-2">
                    <FaTemperatureHigh className='mr-2 text-red-600' />Temperature: {weatherData.main.temp} °C
                  </p>
                  <p className="text-2xl flex justify-center items-center font-semibold text-gray-600 m-2">
                    <IoIosTime className='mr-2 text-blue-400' />Feels like: {weatherData.main.feels_like} °C
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-2xl flex justify-center items-center font-semibold text-gray-600 m-2">
                    <MdQueryStats className='mr-2 text-green-400' />Description: {weatherData.weather[0].description}
                  </p>
                  <p className="text-2xl flex justify-center items-center font-semibold text-gray-600 m-2">
                    <GiDeadlyStrike className='mr-2 text-yellow-400' />Pressure: {weatherData.main.pressure} hPa
                  </p>
                </div>
              </div>
              <div className='flex flex-wrap justify-around items-center w-full'>
                <div className="flex items-center m-2">
                  <img src={humidityIcon} alt="Humidity" className="w-20 mr-3 rounded-lg" />
                  <p className="text-2xl font-semibold text-gray-600">Humidity: {weatherData.main.humidity}%</p>
                </div>
                <div className="flex items-center m-2">
                  <img src={wind} alt="Wind" className="w-20 mr-3 rounded-lg" />
                  <p className="text-2xl font-semibold text-gray-600">Wind: {weatherData.wind.speed} m/s</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-xl font-semibold text-black">Visibility: {weatherData.visibility} meters</p>
              </div>
            </div>
          ) : (
            <p className="text-center text-xl text-gray-600">Please Enter the place ..... </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
