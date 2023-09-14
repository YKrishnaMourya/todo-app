import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeFilter } from "@/redux/features/tasksSlice";

export default function Filter() {
    const filter = useSelector((state) => state.tasks.filter);
    const dispatch = useDispatch();

    return(
        <>
        <label>All</label>
        <input type="checkbox" 
               checked={filter=="all"} 
               onChange={() => dispatch(changeFilter("all"))}/>
        <label>Completed</label>
        <input type="checkbox"  
               checked={filter=="completed"} 
               onChange={() => dispatch(changeFilter("completed"))}/>
        <label>Pending</label>
        <input type="checkbox"  
               checked={filter=="pending"} 
               onChange={() => dispatch(changeFilter("pending"))}/>
        </>
    )
}
