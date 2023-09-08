function Counter({tasks}) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.reduce((count, task) => {
        if (task.status === true) {
            return count + 1;
        }
        else return count;
    }, 0);
    const pendingTasks = tasks.reduce((count, task) => {
        if (task.status === false) {
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