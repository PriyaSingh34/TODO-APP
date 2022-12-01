import React from 'react'

function TodoForm({handleSubmit,handleGo,todo,editId}) {
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
          <input type="text" onChange={handleGo} value={todo}/>
          <button type='submit'>{editId?"Edit":"Go"} </button>
        </form>
  );
}

export default TodoForm
