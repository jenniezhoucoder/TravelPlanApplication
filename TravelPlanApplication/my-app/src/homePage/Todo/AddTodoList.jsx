import './Todo.css';
import { useState } from "react";

function AddTodoList(props) {

    const [submitTitle, setSubmitTitle] = useState('');
    const [submitTask, setSubmitTask] = useState('');
    const [submitCategory, setSubmitCategory] = useState('');

    function getTitle(e) {
        setSubmitTitle(e.target.value);
    }

    function getTask(e) {
        setSubmitTask(e.target.value);
    }

    function getCategory(e) {
        setSubmitCategory(e.target.value);
    }

    function submitTodo(e) {
        e.preventDefault();
    

        const todo = {
            id: Math.random(),
            title: submitTitle,
            task: submitTask,
            category: submitCategory,
        }

        setSubmitTitle('');
        setSubmitTask('');
        setSubmitCategory('');
        
        props.onAddTodo(todo);
    }

    return (
        <div className="form_container">
            <form className="form_content" onSubmit={submitTodo}>
                <label htmlFor="title">
                <span className="required"> *</span>
                    Plan title:
                </label>
                <input type="text" name="title" onChange={getTitle} value={submitTitle} required/>

                <label htmlFor="task">
                <span className="required"> *</span>
                    Plan content:
                </label>
                <input type="text" name="task" onChange={getTask} value={submitTask} required/>

                <select name="category" onChange={getCategory} value={submitCategory} required>
                    <option value="">Please Select</option> 
                    <option value="Movie List">Movie List</option> 
                    <option value="Yearly Goals">Yearly Goals</option> 
                    <option value="Travel Plans">Travel Plans</option>     
                </select>                  

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddTodoList;
