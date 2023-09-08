import { useState } from "react";
import AddTask from "./AddTask";
import ShowTasks from "./ShowTasks";

function Layout() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    const taskList = filteredTasks(filter);

    function filteredTasks(filter) {
        if (filter === "all")
            return tasks.slice();
        else if (filter === "completed") {
            return tasks.filter(task => task.status === true);
        }
        else if (filter === "pending") {
            return tasks.filter(task => task.status === false);
        }
    }

    function tasksAdd(value) {
       const taskId = tasks.length ? tasks.length + 1 : 1;
       setTasks([...tasks, {info:value, status:false, id:taskId}]);
    }
    function tasksDelete(i) {
        const newTasks = tasks.filter(task => task.id !== i);
        setTasks(newTasks);
    }
    function tasksUpdate(i, value) {
        const newTasks = tasks.map(task => {
            if (i === task.id) {
                return {...task, info: value};
            }
            return task;
        })
        setTasks(newTasks);
    }
    function changeTaskStatus(oldTask) {
        const newTasks = tasks.map(task => {
            if (oldTask.id === task.id) {
                return {...task, 
                        info:oldTask.info,
                        status:!oldTask.status,
                        id: oldTask.id,
                }
            }
            return task;
        })
        setTasks(newTasks);
    }
    
    return(
        <>
         <h1>Todo-App</h1>
         <AddTask onChange={tasksAdd}/>
         <br/>
         <label for="all">All</label>
         <input name="all" 
                type="checkbox" 
                checked={filter=="all"} 
                onChange={() => setFilter("all")}/>
         <label for="completed">Completed</label>
         <input name="completed" 
                type="checkbox"  
                checked={filter=="completed"} 
                onChange={() => setFilter("completed")}/>
         <label for="pending">Pending</label>
         <input name="pending" 
                type="checkbox"  
                checked={filter=="pending"} 
                onChange={() => setFilter("pending")}/>

         <ShowTasks tasks={taskList} 
                    onChange={tasksDelete}
                    onUpdate={tasksUpdate}
                    changeTaskStatus={changeTaskStatus}
        />
        </>
       
    )

}
export default Layout;