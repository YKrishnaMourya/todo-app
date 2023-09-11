import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeFilter } from "@/redux/features/tasksSlice";

export default function Filter() {
    const filter = useSelector((state) => state.tasks.filter);
    const dispatch = useDispatch();

    return(
        <>
        <label for="all">All</label>
        <input name="all" 
            type="checkbox" 
            checked={filter=="all"} 
            onChange={() => dispatch(changeFilter("all"))}/>
        <label for="completed">Completed</label>
        <input name="completed" 
            type="checkbox"  
            checked={filter=="completed"} 
            onChange={() => dispatch(changeFilter("completed"))}/>
        <label for="pending">Pending</label>
        <input name="pending" 
            type="checkbox"  
            checked={filter=="pending"} 
            onChange={() => dispatch(changeFilter("pending"))}/>
        </>
    )
}
