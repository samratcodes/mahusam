import {configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../feature/Weather/Weather';
export const store = configureStore({
   
   reducer:{ 
    weather: weatherReducer,
   },
});