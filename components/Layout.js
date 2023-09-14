import AddTask from "./AddTask";
import ShowTasks from "./ShowTasks";
import { useSelector } from 'react-redux';
import Filter from "./Filters";

function Layout() {
    const tasks = useSelector((state) => state.tasks.tasksList);
    const filter = useSelector((state) => state.tasks.filter)
    const completedTaskList = tasks.filter(task => task.completionStatus === true);
    const pendingTaskList = tasks.filter(task => task.completionStatus === false);
   
    return(
        <>
         <h1>Todo-App</h1>
         <AddTask/>
         <br/>
         <Filter/>
         <br/>
         {
            (filter==="all" || filter ==="pending") &&  <ShowTasks tasks={pendingTaskList}/>
         }
         {
            (filter==="all" || filter ==="completed") &&  <ShowTasks tasks={completedTaskList}/>
         }
        </>
       
    )

}
export default Layout;