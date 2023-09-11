import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasksList:[],
    filter:"all",
    newTaskInfo:"",
};
export const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const taskId = state.tasksList.length > 0 ? state.tasksList.length + 1 : 1; 
            const newTasks = [...state.tasksList, {info: action.payload, 
                                                    completionStatus:false, 
                                                    id:taskId,
                                                    isEditable: false,
                                                }]
           state.tasksList = newTasks
        },
        deleteTask: (state, action) => {
            const newTasks = state.tasksList.filter(task => task.id !== action.payload);
            state.tasksList = newTasks
        },
        updateTask: (state, action) => {
            const newTasks = state.tasksList.map(task => {
                if (action.payload.id === task.id) {
                    return {...task, info: action.payload.value};
                }
                return task;
            })
            state.tasksList = newTasks;
        },
        changeTaskStatus: (state, action) => {
            const newTasks = state.tasksList.map(task => {
                if (action.payload.id === task.id) {
                    return {...task, 
                            info:action.payload.info,
                            completionStatus:!action.payload.completionStatus,
                            id: action.payload.id,
                    }
                }
                return task;
            })
            state.tasksList = newTasks;
        },
        changeIsEditable: (state, action) => {
            const newTasks = state.tasksList.map(task => {
                if (action.payload.id === task.id) {
                    return {...task,
                            isEditable: action.payload.value,
                    }
                }
                return task;
            })
            state.tasksList = newTasks;
        },
        changeFilter: (state, action) => {
            state.filter = action.payload;
        },
        updateNewTaskInfo: (state, action) => {
            state.newTaskInfo = action.payload;
        }
    }
});

export const { addTask,
               deleteTask, 
               updateTask, 
               changeTaskStatus, 
               changeIsEditable, 
               changeFilter,
               updateNewTaskInfo } = tasksSlice.actions;
export default tasksSlice.reducer;


