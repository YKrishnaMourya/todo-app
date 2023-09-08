import { useState } from "react";
function AddTask({onChange}) {
    const [task, setTask] = useState("");
    const addTask = () => {
        if (task === "")
            return;
        onChange(task)
        setTask("");
    }
    function handleKeyDown(e) {
        if (e.key ==='Enter')
            addTask(e.target.value);
    }
    return (
         <>
           <input type="text" 
                  value={task} 
                  onChange={e => setTask(e.target.value)}
                  onKeyDown={handleKeyDown}
            />
            <button onClick={addTask}>Add</button>
        </>
    )
}

export default AddTask;