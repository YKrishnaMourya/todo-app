import { useDispatch , useSelector } from 'react-redux';
import { addTask, updateNewTaskInfo } from "@/redux/features/tasksSlice";

function AddTask() {
    const dispatch = useDispatch();
    const taskInfo = useSelector((state) => state.tasks.newTaskInfo);
    
    const handleAction = () => {
        if (taskInfo === "")
            return;
        dispatch(addTask(taskInfo));
        dispatch(updateNewTaskInfo(""));
    }

    function handleKeyDown(e) {
        if (e.key ==='Enter')
            handleAction();
    }
    return (
         <>
           <input type="text" 
                  value={taskInfo} 
                  onChange={e => dispatch(updateNewTaskInfo(e.target.value))}
                  onKeyDown={handleKeyDown}
            />
            <button onClick={handleAction}>Add</button>
        </>
    )
}

export default AddTask;