import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState =  {
    cocktails: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create a new cocktail

