import './Todo.css';
import { useState } from "react";
import TodoList from './TodoList';
import AddTodoList from './AddTodoList';

const initial_todos = [
    {
        id: 1,
        title: 'Watch',
        task: 'The Batman',
        category: 'Movie List',
        filted: 'no_filted',
    },
    {
        id: 2,
        title: 'Place',
        task: 'Iceland',
        category: 'Travel Plans',
        filted: 'no_filted',
    },
    {
        id: 3,
        title: 'Do',
        task: 'skateboard',
        category: 'Yearly Goals',
        filted: 'no_filted',
    },
];


function Todo() {

    const [todolist, setTodolist] = useState(initial_todos);
    const [switchStatus, setSwitchStatus] = useState(false);

    function searchTodo(e){
        let content = e.target.value.toLowerCase();
        
        setTodolist(
            todolist.map((list) =>{
                !list.title.toLowerCase().includes(content) ? list.filted = 'filted' : list.filted = 'no_filted';
                return list;
            }) 
        );
    }

    function deleteTodo(title) {
        setTodolist(todolist.filter((list) => {
            return list.title !== title;
        }));
    }

    function addTodo(newTodo) {
        setTodolist(
            [...todolist,
            newTodo]
        );
    }

    function switchTodo() {
        setSwitchStatus(!switchStatus);
    }


    return (
        <div className='plan_page'>

            <div className='search_plan'>
                <input type='text' onChange={searchTodo}/>
                <img src="/image/search.png" alt="search plan"/>
            </div>

           { 
               todolist.length === 0? (<div className='no_content'>Adding your own plan here!</div>) :
               (todolist.map(todo => {
                   return (<TodoList key={todo.id} todo={todo} onDeleteTodo={deleteTodo}/>);
               }))
           }

           <hr className='plan_line'/>

           <button className='switch' onClick={switchTodo}>
              <img src="/image/add.png" alt="Add plan"  className={switchStatus ? 'switch_on' : ''}/>
           </button>

            <div className={`add_show ${switchStatus ? '' : 'hide'}`}>
               <AddTodoList onAddTodo={addTodo}/>
           </div>

        </div>
    )
}

export default Todo;


