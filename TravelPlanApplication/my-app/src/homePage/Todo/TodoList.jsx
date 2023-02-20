import './Todo.css';

function TodoList(props) {

    function cancelTodo() {
        props.onDeleteTodo(props.todo.title);
    }

    return (
        <div className={`todolist ${props.todo.filted}`}>
            <div className="todolist_content">
                <div className="todolist_title">{props.todo.title}</div>
                <div className="task">{props.todo.task}</div>
            </div>
            <div className="todolist_button">
                <button className='category_button'> {props.todo.category} </button>
            </div>

            <div className="todolist_button">
                <button className="cancel_button" onClick={cancelTodo}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TodoList;