import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cocktailService from '../cocktails/cocktailService'

const initialState =  {
    cocktails: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Adda new cocktail

export const addCocktail = createAsyncThunk('cocktails/add',
async (formData, thunkAPI) => {
    try {
        return await cocktailService.addCocktail(formData)
    } catch (err) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
})

export const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(addCocktail.pendging, (state) => {
                state.isLoading = true
            })
            .addCase(addCocktail.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
                state.cocktails.push(action.paylod)
            })
            .addCase(addCocktail.rejected, (state, action) => {
                state.isLoading = true
                state.isError = true
                state.message = (action.paylod)
            })
    }
})

export const { reset } = cocktailSlice.actionsexport 
export default cocktailSlice.reducer