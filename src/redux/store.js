import { configureStore } from "@reduxjs/toolkit";


import Reducer from "./reducer"



const reducers =({

    data:Reducer,

})

const store = configureStore({
    reducer:
    reducers})
export default store