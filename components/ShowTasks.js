import { useState } from "react";
function ShowTasks({tasks, onChange, onUpdate, changeTaskStatus}) {
    const [status, setStatus] = useState(true);
    const afterEdit = (info, i) => {
        setStatus(true);
        if (info === "") {
            onChange(i);
        }
    }
    
    const tasksList = tasks.map((task) => {
        return (
            <li key={task.id}>
                 <input type="checkbox" 
                        checked={task.status === true} 
                        onChange={() => changeTaskStatus(task)}
                 />
                 <input type="text" 
                        value={task.info} 
                        onChange={e => onUpdate(task.id, e.target.value)} 
                        onKeyDown={(e) => {
                            if (e.key === 'Enter')
                                afterEdit(task.info, task.id)
                            }
                        }
                        disabled={status}/>
                 {status === true ?
                 <>
                    <button onClick={() => onChange(task.id)}> Delete</button>
                    <button onClick={() => setStatus(false)}>Edit</button>
                 </> : <button onClick={() => afterEdit(task.info, task.id)}>Add</button>
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