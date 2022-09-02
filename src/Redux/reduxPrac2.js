import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const __getPrac2 = createAsyncThunk(
    "getPrac2",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get("http://localhost:3001/prac")
            return thunkAPI.fulfillWithValue(data.data);
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
)

export const prac2Slice = createSlice({
    name: "prac2",
    initialState: {
        prac2: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [__getPrac2.pending]: (state, action) => {
            state.isLoading = true;
        },
        [__getPrac2.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.prac2 = action.payload;
        },
        [__getPrac2.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
});

export const {} = prac2Slice.actions;
export default prac2Slice.reducer;