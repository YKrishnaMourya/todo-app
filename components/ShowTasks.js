import { useDispatch } from 'react-redux';
import { deleteTask, updateTask, changeTaskStatus, changeIsEditable } from "@/redux/features/tasksSlice";

function ShowTasks({tasks}) {
    const dispatch = useDispatch();

    const afterEdit = (info, i, value) => {
        dispatch(changeIsEditable({id:i, value: !value}));
        if (info === "") {
            dispatch(deleteTask(i));
        }
    }
    
    const tasksList = tasks.map((task) => {
        return (
            <li key={task.id}>
                 <input type="checkbox" 
                        checked={task.completionStatus === true} 
                        onChange={() => dispatch(changeTaskStatus(task))}
                 />
                 <input type="text" 
                        value={task.info} 
                        onChange={e => dispatch(updateTask({id: task.id, value: e.target.value}))} 
                        onKeyDown={(e) => {
                            if (e.key === 'Enter')
                                afterEdit(task.info, task.id, task.isEditable)
                            }
                        }
                        disabled={!task.isEditable}/>
                 {task.isEditable === false ?
                 <>
                    <button onClick={() => dispatch(deleteTask(task.id))}> Delete</button>
                    <button onClick={() => dispatch(changeIsEditable({id:task.id, value: !task.isEditable}))}>Edit</button>
                 </> : <button onClick={() => afterEdit(task.info, task.id, task.isEditable)}>Add</button>
                }
            </li>
        );
    });
    return (
        <ul>
            {tasksList}
        </ul>
    )
}

export default ShowTasks;