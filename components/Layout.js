import AddTask from "./AddTask";
import ShowTasks from "./ShowTasks";
import { useSelector } from 'react-redux';
import Filter from "./Filters";

function Layout() {
    const tasks = useSelector((state) => state.tasks.tasksList);
    const filter = useSelector((state) => state.tasks.filter)
    const taskList = filteredTasks(filter);

    function filteredTasks(filter) {
        if (filter === "all")
            return tasks.slice();
        else if (filter === "completed") {
            return tasks.filter(task => task.completionStatus === true);
        }
        else if (filter === "pending") {
            return tasks.filter(task => task.completionStatus === false);
        }
    }
    
    return(
        <>
         <h1>Todo-App</h1>
         <AddTask/>
         <br/>
         <Filter/>
         <br/>
         <ShowTasks tasks={taskList}/>
        </>
       
    )

}
export default Layout;