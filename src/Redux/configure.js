import { configureStore } from "@reduxjs/toolkit";
import  pracSlice  from "./reduxPrac"
import prac2Slice from "./reduxPrac2";



const store = configureStore({
    reducer: { 
         prac: pracSlice,
         prac2: prac2Slice,

     }
})

export default store;