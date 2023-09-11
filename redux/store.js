import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from '@/redux/features/tasksSlice'
export default configureStore({
    reducer:{
        tasks: tasksReducer,
    },
})
