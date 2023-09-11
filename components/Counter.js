import { useSelector } from 'react-redux';
function Counter() {
    const tasks = useSelector((state) => state.tasks.tasksList);
    const totalTasks = tasks.length;
    const completedTasks = tasks.reduce((count, task) => {
        if (task.completionStatus === true) {
            return count + 1;
        }
        else return count;
    }, 0);
    const pendingTasks = tasks.reduce((count, task) => {
        if (task.completionStatus === false) {
            return count + 1;
        }
        else return count;
    }, 0);

    return(
        
        <ul>
            <li>{`Total Tasks: ${totalTasks}`}</li>
            <li>{`Completed Tasks: ${completedTasks}`}</li>
            <li>{`Pending Tasks: ${pendingTasks}`}</li>
        </ul>
    )
}

export default Counter;