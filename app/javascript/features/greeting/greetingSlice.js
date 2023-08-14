import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { stat } from 'fs';

const initialState = {
  greeting: {},
  isLoading: false,
  hasError: undefined,
};

const getGreeting = createAsyncThunk('greeting/random', async () => {
  const greeting = await axios.get('/random');
  return await greeting.json();
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreeting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGreeting.fulfilled, (state, action) => {
      state.isLoading = false;
      state.greeting = action.payload;
    });
  },
});

export default greetingSlice.reducer;
