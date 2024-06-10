import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from 'uuid';

const TaskForm = () => {
    const {setTasks} = useContext(TodoContext);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [deadline, setDeadline] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        let newTask = {
            title: title,
            desc: desc,
            deadline: deadline,
            id: uuidv4()
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
    }

    return ( 
        <div className="taskform_main" onSubmit={(e) => addTask(e)}>
            <h3>Add a new task!</h3>
            <form className="taskform_form">
                <label>Title:</label>
                <input type="text" required onChange={(e) => setTitle(e.target.value)}/>
                <label>Description:</label>
                <input type="text" required onChange={(e) => setDesc(e.target.value)}/>
                <label>Deadline</label>
                <input type="date" required onChange={(e) => setDeadline(e.target.value)}/>
                <button className="taskform_button">+ Add Task</button>
            </form>
        </div>
     );
}
 
export default TaskForm
