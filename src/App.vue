<template>
  <div class="APP">
    <div class="flex">
      <div class="flex flex-col justify-center items-center ml-2">
        <img src="@/assets/Logo.png" alt="Logo" class="mt-1 w-16 sm:w-24 rounded-full" />
        <h1 class="text-sm sm:text-xl text-white font-bold">Mahusam</h1>
      </div>
      <form class="w-full flex justify-center py-2 sm:p-4" @submit.prevent="fetchNew">
        <div class="flex items-center h-8 px-2 border border-white rounded-2xl">
          <input
            v-model="searchLocation"
            class="bg-transparent border-0 w-56 sm:w-96 h-8 text-white focus:outline-none text-1xl placeholder-gray-200"
            type="text"
            placeholder="Search location . . ."
          />
          <button class="rounded-r text-white" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
    <div class="flex justify-center container" v-if="weatherData">
      <div class="w-full md:w-4/5 mb-6 p-2 sm:p-4 bg-white rounded-3xl">
        <div class="sm:p-6">
          <h1 class="text-4xl font-semibold text-center mb-6 text-blue-800">
            Weather in {{ weatherData.name }}, {{ weatherData.sys.country }}
          </h1>
          <div class="w-full flex flex-col items-center justify-between">
            <div class="flex items-center justify-center">
              <img :src="getImage(weatherData.weather[0].main)" alt="w" class="w-48 sm:w-52" />
            </div>
            <div class="w-full sm:w-4/5 flex flex-col justify-between items-end bg-gray-200 my-3 p-4 rounded-3xl md:flex-row">
              <div class="flex flex-col">
                <p class="text-2xl flex justify-center items-center font-semibold text-gray-600 m-2">
                  <i class="mr-2 text-4xl text-red-600 fa-solid fa-temperature-three-quarters"></i>Temperature: {{ weatherData.main.temp }} °C
                </p>
                <p class="text-2xl flex justify-center items-center font-semibold text-gray-600 m-2">
                  <i class="mr-2 text-blue-400 fa-solid fa-clock"></i>Feels like: {{ weatherData.main.feels_like }} °C
                </p>
              </div>
              <div class="flex flex-col">
                <p class="text-2xl flex justify-center items-center font-semibold text-gray-600 m-2">
                  <i class="mr-2 text-green-400 fa-solid fa-chart-line"></i>Description: {{ weatherData.weather[0].description }}
                </p>
                <p class="text-2xl flex justify-center items-center font-semibold text-gray-600 m-2">
                  <i class="mr-2 text-yellow-400 fa-solid fa-explosion"></i>Pressure: {{ weatherData.main.pressure }} hPa
                </p>
              </div>
            </div>
            <div class="flex flex-wrap justify-around items-center w-full">
              <div class="flex items-center m-2">
                <img src="@/assets/humidity.png" alt="Humidity" class="w-20 mr-3 bg-slate-200 rounded-lg" />
                <p class="text-2xl font-semibold text-gray-600">Humidity: {{ weatherData.main.humidity }}%</p>
              </div>
              <div class="flex items-center m-2">
                <img src="@/assets/wind.png" alt="Wind" class="w-20 mr-3 bg-slate-200 rounded-lg" />
                <p class="text-2xl font-semibold text-gray-600">Wind: {{ weatherData.wind.speed }} m/s</p>
              </div>
            </div>
            <div class="text-center mt-8">
              <p class="text-xl font-semibold text-black">Visibility: {{ weatherData.visibility }} meters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import wind from '@/assets/wind.png';
import humidity from '@/assets/humidity.png';
import clear from '@/assets/clear.png';
import rain from '@/assets/rain.png';
import snow from '@/assets/snow.png';
import drizzle from '@/assets/drizzle.png';
import clouds from '@/assets/clouds.png';
import mist from '@/assets/mist.png';

const searchLocation = ref('');
const weatherData = ref(null);

const images = {
  Clear: clear,
  Rain: rain,
  Snow: snow,
  Drizzle: drizzle,
  Clouds: clouds,
  Mist: mist,
};

const fetchNew = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation.value}&appid=adf65e2fa7e0de243f0a7adaec8b6839&units=metric`);
    weatherData.value = response.data;
    console.log(weatherData.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=adf65e2fa7e0de243f0a7adaec8b6839&units=metric`);
    weatherData.value = response.data;
    console.log(weatherData.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const getImage = (weather) => {
  console.log(weather);
  return images[weather] || '@/assets/clear.png' ;
};
</script>
