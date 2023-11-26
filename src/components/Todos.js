import React from 'react'
import {Todo} from './Todo'

export const Todos = (props) => {
  let todosStyle = {
     minHeight : '58vh',
  }
  return (
    <div className="container p-2" style={todosStyle}>
      <h3 className='text-center'>Todo List </h3>

      { props.todos.length ===0? "No todo To Display " :
      
        props.todos.map((todo)=> {
            return( <>
            <Todo todo={todo} key={todo.id} onDelete={props.onDelete}/>
            <hr />
            </>)
        })
      }
      
    </div>
  )
}
