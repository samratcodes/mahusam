import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Weather {
  name: string;
  sys: {
    country: string;
  };
  weather: {
    main: string;
    description: string;
  }[];
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

const apiKey = 'adf65e2fa7e0de243f0a7adaec8b6839';

export const fetchWeather = createAsyncThunk<Weather, string>(
  'weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data: Weather = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err as string); // Convert err to string
    }
  }
);

interface WeatherState {
  weatherData: Weather | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  weatherData: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
        state.error = null; // Reset error
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Convert payload to string
      });
  },
});

export default weatherSlice.reducer;
