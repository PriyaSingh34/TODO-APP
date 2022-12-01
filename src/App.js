
import './App.css';
import {useState} from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  // const arr=[1,2,3,4,5];

  const [todo, setTodo]=useState("");
  const[todos,setTodos]=useState([]);
  const[editId,setEditId]=useState(0);

 function handleSubmit(event) {
event.preventDefault();

if(editId){
  const editTodo=todos.find((i)=>i.id===editId);
  const updatedTodos=todos.map((t)=>
  t.id===editTodo.id
  ? (t={id:t.id,todo})
  : {id:t.id,todo:t.todo}
  );
  setTodos(updatedTodos);
  setEditId(0)
  setTodo("");
  return;
}
if(todo!==''){
  setTodos([...todos,{id:`${todo}-${Date.now()}`,todo}]);
  setTodo("");
}
}

  function handleGo(event){
    setTodo(event.target.value);
  }

  const handleDelete=(id)=>{
    const delTodo=todos.filter((to)=>to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit=(id)=>{

    const editTodo=todos.find((i)=>i.id===id);
    setTodo(editTodo.todo);
    setEditId(id);
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1>Todo list App</h1>
        <TodoForm
        handleSubmit={handleSubmit}
        handleGo={handleGo}
        todo={todo}
        editId={editId}/>
        
        <TodoList
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        todos={todos}/>
      </div>
      {
      /* {
      arr.map((num) => {
        return <div key={num.id}>{num.name}</div>
      })
      } */}
    </div>
    //map and filter function.
    // <div className='App'>{arr.filter((num)=>( num!==3))}
      /* {
        arr.map((num)=>{
          return (
            <div>{num}</div>
          )
        })
      } */
    // </div>
  );
}

export default App;
