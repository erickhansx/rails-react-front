import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/greetings/random_greeting';

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.fulfilled, (_, action) => action.payload);
  },
});

export const fetchGreetings = createAsyncThunk('FETCH_MESSAGE', () =>
  axios.get(url).then((response) => {
    const greeting = response.data.message;
    return greeting;
  }),
);

export default greetingsSlice.reducer;
