import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const __thunkPrac = createAsyncThunk(
    "thunkPrac",
    (payload, thunkAPI) => {
        setTimeout(() => { thunkAPI.dispatch(reduxPlus(payload))
        }, 3000);
    }
)

const pracSlice = createSlice({
    name: "prac",
    initialState: { number: 0 },
    reducers: {
        reduxPlus: (state, action) => {
            state.number += action.payload; 
        },
        reduxMinus: (state, action) => {
            state.number -= action.payload;
        }
    }
})

export const { reduxPlus, reduxMinus } = pracSlice.actions;
export default pracSlice.reducer;